import { Type } from "class-transformer";
import { IsBoolean, IsDateString, IsDefined, IsEmail, IsNumber, IsString, Length, ValidateNested } from "class-validator";
import { UserCredential } from "../entities/user-credential.entity";

export class CreateCredentialDto implements Partial<UserCredential> {
  @IsEmail()
  email: string;

  @Length(8, 10)
  password: string;
}

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  ci: string;

  @IsDateString({ strict: true })
  birthDay: Date;

  @IsNumber()
  phoneContact: number;

  @IsBoolean()
  isPremium: boolean;

  @ValidateNested()
  @Type((type) => CreateCredentialDto)
  @IsDefined()
  credential: CreateCredentialDto;
}



