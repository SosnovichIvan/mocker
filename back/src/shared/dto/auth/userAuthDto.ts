import { IsString, IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserAuthDTO {
  @ApiProperty({ required: true })
  @IsString({ message: 'Логин должен быть строкой' })
  @IsNotEmpty({ message: 'Логин обязательное поле' })
  login: string;

  @IsString({ message: 'Пароль должен быть строкой' })
  @MinLength(6, { message: "Пароль должен быть более 6 символов"})
  @IsNotEmpty({ message: 'Пароль обязательное поле' })
  @ApiProperty({ required: true, minimum: 6, type: 'string' })
  password: string;
}
