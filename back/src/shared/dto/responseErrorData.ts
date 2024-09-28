import { IsString, IsNotEmpty, IsEnum, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { HttpStatus } from '@nestjs/common';

export class ResponseErrorData {
  @ApiProperty({ required: true })
  @IsEnum(HttpStatus)
  @IsNotEmpty()
  code: HttpStatus;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: false })
  messages?: string;

  @IsArray()
  @IsNotEmpty()
  @ApiProperty({ required: false, isArray: true, type: 'string' })
  message?: string[]
}


