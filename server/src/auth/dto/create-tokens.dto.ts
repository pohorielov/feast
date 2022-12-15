import { IsNumber, IsString } from "@nestjs/class-validator";

export class CreateTokenDto {
  @IsNumber()
  userId: number;

  @IsString()
  refreshToken: string;
}
