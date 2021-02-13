import { IsBoolean, IsEmail, IsInt, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
    @IsEmail()
    readonly email: String;
    
    @IsString()
    readonly password: String;

    @IsString()
    readonly name: String;

    @IsOptional()
    @IsBoolean()
    readonly isValid: Boolean;

    @IsOptional()
    @IsString()
    readonly nickname: String;

    @IsOptional()
    @IsString()
    readonly token: String;

    
    @IsOptional()
    @IsInt()
    readonly division: number;

    @IsOptional()
    @IsInt()
    readonly brigade: number;
}