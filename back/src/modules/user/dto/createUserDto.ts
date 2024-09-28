import { IsString, IsNotEmpty, IsHash, IsEnum, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from 'src/shared/types';

export class CreateUserDTO {
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  login: string;

  @IsHash('sha256')
  @IsNotEmpty()
  @ApiProperty({ required: true })
  password: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  profession: string;

  @ApiProperty({ required: true })
  @IsEnum(UserRole)
  @IsNotEmpty()
  role: UserRole;

  @ApiProperty({ required: true })
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
