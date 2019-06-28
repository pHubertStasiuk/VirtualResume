import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor() { }


  getResume() {
    console.log('file retriever from service');
  }
}
