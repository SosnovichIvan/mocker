import { IsString, IsNotEmpty, IsEnum, IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { HttpStatus } from '@nestjs/common';

export class ResponseErrorData {
  @ApiProperty({ required: true })
  @IsEnum(HttpStatus)
  @IsNotEmpty()
  code: HttpStatus;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  message: string;
}


