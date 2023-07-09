import { Injectable } from '@nestjs/common';
import { DatabaseRepository as DB } from 'src/core/db';
import { FileContract } from '../contracts';
import { File } from 'src/file/models';

@Injectable()
export class FileRepository extends DB implements FileContract {
  model: File;
}
