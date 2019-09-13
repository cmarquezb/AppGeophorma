import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tab6Provider } from '../tab6/tab6.page.provider';

@Component({
  selector: 'app-tab6',
  templateUrl: './tab6.page.html',
  styleUrls: ['./tab6.page.scss'],
})

export class Tab6Page {
  usuarios;
  constructor(public proveedor:Tab6Provider) {}
  ionViewDibLoad(){
    this.proveedor.obtenerdata()
    .subscribe(
      (data)=>{this.usuarios = data;},
      (error)=>{console.log(error);}
    )
  }

}


