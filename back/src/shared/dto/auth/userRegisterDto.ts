import { IsString, IsNotEmpty, MinLength, IsEmail, Length, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserRegisterDTO {
  @ApiProperty({ required: true })
  @IsString({ message: 'Логин должен быть строкой' })
  @MinLength(6, { message: "Логин должен быть более 6 символов"})
  @IsNotEmpty({ message: 'Логин обязательное поле' })
  login: string;

  @ApiProperty({ required: true })
  @IsEmail({}, { message: 'Не валидный email'})
  @IsString({ message: 'Email должен быть строкой' })
  @IsNotEmpty({ message: 'Email обязательное поле' })
  email: string;

  @IsString({ message: 'Пароль должен быть строкой' })
  @MinLength(6, { message: "Пароль должен быть более 6 символов"})
  @IsNotEmpty({ message: 'Пароль обязательное поле' })
  @ApiProperty({ required: true, minimum: 6, type: 'string' })
  password: string;

  @IsOptional()
  @IsString({ message: 'Код должен быть строкой', always: false })
  @Length(6, 6, { message: "Код должен быть равен 6 символам"})
  @ApiProperty({ required: false, minLength: 6, maxLength: 6, type: 'string' })
  code?: string;
}
