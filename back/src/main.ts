import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';

dotenv.config({ path: '/.env' });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('SupportAPI')
    .setVersion(process.env.VERSION)
    .addTag('SupportAPI Back')
    .build();

  app.useGlobalPipes(new ValidationPipe());

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api/swagger', app, document);

  const port = process.env.PORT || 3001;

  app.enableCors({ credentials: true, origin: true });
  app.setGlobalPrefix('api');
  app.use(cookieParser());
  await app.listen(port, () => console.log('server start at port:', port));
}
bootstrap();
