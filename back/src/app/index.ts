import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthModule, UserModule, DataBaseModule } from "modules";

@Module({
	imports: [
		JwtModule.register({
			global: true,
			secret: `${process.env.JWT}`,
			signOptions: { expiresIn: "20m" },
		}),
		DataBaseModule,
		AuthModule,
		UserModule,
	],
	providers: [],
	controllers: [],
	exports: [],
})
export class ProjectModule {}
