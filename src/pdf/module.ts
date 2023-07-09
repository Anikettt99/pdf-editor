import { Module } from '@nestjs/common';
import { PDF_DATA_REPOSITORY } from './constants';
import { PdfDataRepository } from './repositories';
import { PdfService } from './services';
import { PdfController } from './controllers';
import { MediaModule } from 'src/media/module';
import { FileModule } from 'src/file/module';

@Module({
  imports: [MediaModule, FileModule],
  controllers: [PdfController],
  providers: [
    PdfService,
    {
      provide: PDF_DATA_REPOSITORY,
      useClass: PdfDataRepository,
    },
  ],
  exports: [
    {
      provide: PDF_DATA_REPOSITORY,
      useClass: PdfDataRepository,
    },
  ],
})
export class PdfModule {}
