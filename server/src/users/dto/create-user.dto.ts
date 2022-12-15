import { IsEmail, IsNumber, IsString } from "@nestjs/class-validator";

export class CreateUserDto {
  @IsNumber()
  id: number;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  role: string;
}
