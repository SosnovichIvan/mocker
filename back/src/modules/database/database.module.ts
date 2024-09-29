import { Module } from "@nestjs/common";

import { databaseProviders } from "./databaseProviders";

@Module({
	imports: [],
    providers: [...databaseProviders],
    exports: [...databaseProviders]
})
export class DataBaseModule {}
