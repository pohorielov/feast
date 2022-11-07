import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  create(@Body() userBody: CreateUserDto) {
    return this.userService.createUser(userBody);
  }

  @Get()
  async getUsers() {
    return await this.userService.getUsers();
  }
}
