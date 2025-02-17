import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }

  hide() {
    if (document.body) {  
      document.body.classList.add('none');
    }
  }

  show() {
    if (document.body) {
      document.body.classList.remove('none');
    }
  }
}
