import { forwardRef, Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UsersModule } from "../users/users.module";
import { JwtModule } from "@nestjs/jwt";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "src/users/users.models";
import { Token } from "./tokens.models";

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    SequelizeModule.forFeature([User, Token]),
    forwardRef(() => UsersModule),
    JwtModule,
  ],
  exports: [
    AuthService,
    JwtModule,
],
})
export class AuthModule {}