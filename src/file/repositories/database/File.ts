import { Injectable } from '@nestjs/common';
import { DatabaseRepository as DB } from 'src/core/db';
import { FileContract } from '../contracts';
import { File } from 'src/file/models';
import { InjectModel } from 'src/core/helpers';
import { Model } from 'objection';

@Injectable()
export class FileRepository extends DB implements FileContract {
  @InjectModel(File)
  model: File;
}
