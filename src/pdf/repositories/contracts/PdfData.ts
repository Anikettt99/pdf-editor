import { RepositoryContract } from 'src/core/db';

export interface PdfDataContract extends RepositoryContract {
  getPdfData(id): Promise<Record<string, any>>;
}
