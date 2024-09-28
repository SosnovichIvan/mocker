import { IsNotEmpty, IsJWT } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class TokenDTO {
  @ApiProperty({ required: true })
  @IsJWT()
  @IsNotEmpty()
  token: string;
}
