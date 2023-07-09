import { Module } from '@nestjs/common';
import { FileService } from './services';
import { FILE_REPOSITORY } from './constants';
import { FileRepository } from './repositories';

@Module({
  imports: [],
  providers: [
    FileService,
    {
      provide: FILE_REPOSITORY,
      useClass: FileRepository,
    },
  ],
  exports: [
    {
      provide: FILE_REPOSITORY,
      useClass: FileRepository,
    },
  ],
})
export class FileModule {}
