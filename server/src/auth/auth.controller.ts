import { Body, Controller, Get, Post, Req, Res, UseGuards } from "@nestjs/common";
import { CreateUserDto } from "../users/dto/create-user.dto";
import { AuthService } from "./auth.service";
import { Request, Response } from 'express';

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("/login")
  async login(@Body() userData: CreateUserDto, @Res() response: Response) {
    const user = await this.authService.login(userData)
    response.cookie('refreshToken', user.refreshToken, {maxAge: 1 * 24 * 60 * 68 * 1000, httpOnly: true} )
    return response.json(user);
  }

  @Post('/signup')
  async registration(@Body() userData: CreateUserDto, @Res() response: Response) {
    const user = await this.authService.registration(userData)
    response.cookie('refreshToken', user.refreshToken, {maxAge: 1 * 24 * 60 * 68 * 1000, httpOnly: true} )
    return response.json(user);
  }

  @Post('/logout')
  async logout(@Body() @Res() response: Response, @Req() request: Request) {
    const {refreshToken} = request.cookies
    const token = await this.authService.logout(refreshToken)
    response.clearCookie('refreshToken')
    return response.json(token)
  }

  @Get('/refresh') 
  async refresh(@Body() @Res() response: Response, @Req() request: Request) {
    const {refreshToken} = request.cookies
    const user = await this.authService.refresh(refreshToken)
    response.cookie('refreshToken', user.refreshToken, {maxAge: 1 * 24 * 60 * 68 * 1000, httpOnly: true} )
    return response.json(user);
  }
}
