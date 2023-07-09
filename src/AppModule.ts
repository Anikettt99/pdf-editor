import { Module } from '@nestjs/common';
import { MediaModule } from './media/module';
import { CoreModule } from './core/module';
import { FileModule } from './file/module';
import { PdfModule } from './pdf/module';

@Module({
  imports: [CoreModule, FileModule, MediaModule, PdfModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
