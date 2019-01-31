import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() {
      // console.log(petition);
  }

  printToConsole(arg ) {
    console.log(arg);
  }
}
