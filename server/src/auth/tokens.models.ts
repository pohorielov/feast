import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { User } from "src/users/users.models";
interface TokenCreationAttrs {
  userId: number;
  refreshToken: string;
}

@Table({ tableName: "tokens", createdAt: false, updatedAt: false })
export class Token extends Model<Token, TokenCreationAttrs> {
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
  })
  userId: number;

  @Column({
    type: DataType.TEXT,
    unique: true,
  })
  refreshToken: string;
}
