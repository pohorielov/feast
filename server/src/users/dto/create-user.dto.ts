export class CreateUserDto {
  readonly email: string;
  readonly password: string;
  readonly isClient: boolean;
  readonly isSpecialist: boolean;
}
