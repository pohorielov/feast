import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./users.models";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async createUser(userProps: CreateUserDto) {
    const user = await this.userRepository.create(userProps);
    return user;
  }
  async getUsers() {
    const users = await this.userRepository.findAll();
    return users;
  }
}
