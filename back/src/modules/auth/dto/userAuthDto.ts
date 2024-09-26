import { IsString, IsNotEmpty, IsHash } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserAuthDTO {
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  login: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  password: string;
}
