import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { AuthService } from "./auth.service";
import { JwtAuthGuard } from "./jwt-auth.guard";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("/login")
  login(@Body() userData: CreateUserDto) {
    return this.authService.login(userData);
  }

  @Post("/signup")
  registration(@Body() userData: CreateUserDto) {
    return this.authService.registration(userData);
  }
  
  @UseGuards(JwtAuthGuard)
  @Get("/auth")
  check(@Body() userData: CreateUserDto) {
    return this.authService.check(userData);
  }
}
