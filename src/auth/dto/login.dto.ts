import { Optional } from '@nestjs/common';
import { IsBoolean, isEmail, IsEmail, IsOptional, Length, Max, Min, validate } from 'class-validator';

export class LoginDto {
  @IsEmail()
  email: string;

  @Length(8,10)
  password: string;

  @IsBoolean()
  @IsOptional()
  ignoreLastLogin?: boolean
}


const payload = {
    user: {
        email: '...',
        address: 'xyz'
    },
    description: 'super',
}