import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcryptjs";
import { User } from "../users/users.models";
import { InjectModel } from "@nestjs/sequelize";
import { Token } from "./tokens.models";
 
@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Token) private authRepository: typeof Token, 
    private userService: UsersService,
    private jwtService: JwtService,
    ) {}
  
  async login(userData: CreateUserDto) {
    const user = await this.validateUser(userData); 
    const tokens = await this.generateTokens(user);
    await this.saveToken(user.id, tokens.refreshToken)

    return tokens
  }
  
  async logout(refreshToken) {
    const token = await this.removeToken(refreshToken)
    return token
  }

  async registration(userData: CreateUserDto) {
    const candidate = await this.userService.getUserByEmail(userData.email);
    if (candidate) {
      throw new HttpException(
        "Email вже зареєсрований",
        HttpStatus.BAD_REQUEST
      );
    }
    const hashPassword = await bcrypt.hash(userData.password, 5);
    const user = await this.userService.createUser({
      ...userData,
      password: hashPassword,
    });
    const tokens = await this.generateTokens(user);
    await this.saveToken(user.id, tokens.refreshToken)

    return tokens
  }

  async refresh(refreshToken) {
    if(!refreshToken) {
      throw new UnauthorizedException()
    }
    const userData = this.validateRefreshToken(refreshToken)
    const tokenFromDb = await this.findToken(refreshToken)
    if(!userData || !tokenFromDb) {
      throw new UnauthorizedException()
    }
    const findUser = await this.userService.getUserById(userData.id)
    const tokens = await this.generateTokens(findUser);
    await this.saveToken(findUser.id, tokens.refreshToken)

    return tokens
  }
 
  async generateTokens(user: User) {
    const payload = {
      email: user.email,
      id: user.id,
      role: user.role,
    };

    return {
      accessToken: await this.jwtService.sign(payload, { secret: process.env.ACCESS_SECRET_KEY, expiresIn: '1h' }),
      refreshToken: await this.jwtService.sign(payload, { secret: process.env.REFRESH_SECRET_KEY, expiresIn: '1d' }),
    };
  }

  async saveToken(userId, refreshToken) {
    const tokenData = await this.authRepository.findOne({where: {userId}})
    if(tokenData) {
      tokenData.refreshToken = refreshToken 
      return tokenData.save()
    }
    const token = await this.authRepository.create({userId, refreshToken})
    return token;
  }

  async removeToken(refreshToken) {
    const tokenData = await this.authRepository.destroy({where: {refreshToken}})
    return tokenData
  }
  
  async findToken(refreshToken) {
    const tokenData = await this.authRepository.findOne({where: {refreshToken}})
    return tokenData
  }

  validateAccessToken(token) {
    try {
      const userData = this.jwtService.verify(token, { secret: process.env.ACCESS_SECRET_KEY })
      return userData
    } catch(e) {
      return null;
    }
  }
  
  validateRefreshToken(token) {
    try {
      const userData = this.jwtService.verify(token, {secret: process.env.REFRESH_SECRET_KEY})
      return userData
    } catch(e) {
      return null;
    }
  }

  private async validateUser(userData: CreateUserDto) {
    const user = await this.userService.getUserByEmail(userData.email);
    const passwordEquals = await bcrypt.compare(
      userData.password,
      user.password
    );
    if (user && passwordEquals) {
      return user;
    }
    throw new UnauthorizedException({ message: "Невірний email або пароль" });
  }
}
