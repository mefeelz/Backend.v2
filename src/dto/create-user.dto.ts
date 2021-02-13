import {
  IsBoolean,
  IsEmail,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  readonly email: string;

  @IsString()
  readonly password: string;

  @IsString()
  readonly name: string;

  @IsOptional()
  @IsBoolean()
  readonly isValid: boolean;

  @IsOptional()
  @IsString()
  readonly nickname: string;

  @IsOptional()
  @IsString()
  readonly token: string;

  @IsOptional()
  @IsInt()
  readonly division: number;

  @IsOptional()
  @IsInt()
  readonly brigade: number;
}
