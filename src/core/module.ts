import { Module } from '@nestjs/common';
import { databaseProvider } from './db/provider';

@Module({
  imports: [],
  providers: [...databaseProvider],
  exports: [...databaseProvider],
})
export class CoreModule {}
