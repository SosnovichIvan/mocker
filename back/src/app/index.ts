import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule, UserModule } from 'src/modules';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: `${process.env.JWT}`,
      signOptions: { expiresIn: '20m' },
    }),
    AuthModule,
    UserModule
  ],
  providers: [],
  controllers: [],
  exports: [],
})
export class ProjectModule {}
