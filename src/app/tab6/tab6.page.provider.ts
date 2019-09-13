import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
  export class Tab6Provider {
    
    constructor(public http:HttpClient) {
      console.log("Paso por ak");
    }
    obtenerdata(){
      return this.http.get('https://jsonplaceholder.typicode.com/users');
    }

  }