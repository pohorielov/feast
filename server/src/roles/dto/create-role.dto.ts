import { IsString } from "@nestjs/class-validator";

export class CreateRoleDto {
  @IsString()
  value: string;
}
