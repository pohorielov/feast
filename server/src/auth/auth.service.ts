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
 
@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService
  ) {}

  async check(userData: CreateUserDto) {
    const user = await this.validateUser(userData); 
    return this.generateToken(user);
  }
  
  async login(userData: CreateUserDto) {
    const user = await this.validateUser(userData); 
    return this.generateToken(user);
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
    return this.generateToken(user);
  }

  private async generateToken(user: User) {
    const payload = {
      email: user.email,
      id: user.id,
      role: user.role,
    };
    return {
      token: this.jwtService.sign(payload),
    };
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
