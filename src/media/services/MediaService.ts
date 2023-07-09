import { Injectable } from '@nestjs/common';
import { initializeApp } from 'firebase/app';
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from 'firebase/storage';
import { firebaseConfig } from 'src/config/firebaseConfig';

@Injectable()
export class MediaService {
  private storage;

  constructor() {
    initializeApp(firebaseConfig);
    this.storage = getStorage();
  }
  async uploadFile(file: Express.Multer.File) {
    try {
      const name = file.originalname + new Date().toISOString();
      const storageRef = ref(this.storage, `files/${name}`);
      const snapshot = await uploadBytesResumable(storageRef, file.buffer);
      const downloadURL = await getDownloadURL(snapshot.ref);
      console.log(name, file.mimetype, downloadURL);
      return {
        name,
        mimetype: file.mimetype,
        url: downloadURL,
      };
    } catch (error) {
      throw new Error('Internal Server Error');
    }
  }
}
