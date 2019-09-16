import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})


export class Tab4Page {
public carro40=[];
public carro41=[];
public carro42=[];
public carro43=[];
public pinta:Array<Object>=[];
public alba:Array<Object>=[];
public manta4:Array<Object>=[];
datosPedido
constructor (public router: Router){
  this.pinta=[
    {'Codigo' : 1,'ProductName' : 'Muros','Precio'  : 50},
    {'Codigo' : 2,'ProductName' : 'Portones','Precio'  : 30},
    {'Codigo' : 3,'ProductName' : 'Techos','Precio'  : 10}
  ];
  this.alba=[
    {'Codigo' : 4,'ProductName' : 'Muros','Precio'  : 50},
    {'Codigo' : 5,'ProductName' : 'Parrilla','Precio'  : 30},
    {'Codigo' : 6,'ProductName' : 'Pisos','Precio'  : 10},
    {'Codigo' : 7,'ProductName' : 'Losas','Precio'  : 30}
  ];
  this.manta4=[
    {'Codigo' : 8,'ProductName' : 'Muros','Precio'  : 50},
    {'Codigo' : 9,'ProductName' : 'Parrilla','Precio'  : 30},
    {'Codigo' : 10,'ProductName' : 'Pisos','Precio'  : 10},
    {'Codigo' : 11,'ProductName' : 'Losas','Precio'  : 30}
  ];
}
 public enviacar(arreglo1,arreglo2,arreglo3){
  var contador = 0;
  for(var item in this.carro40) {    
    this.datosPedido.push({Codigo: arreglo1.Codigo, ProductName:arreglo1.ProductName,Precio:arreglo1.Precio });
  }
  for(var item in this.carro41) {
    this.datosPedido.push({Codigo: arreglo2.Codigo, ProductName:arreglo2.ProductName,Precio:arreglo2.Precio });
  }
  for(var item in this.carro42) {
    this.datosPedido.push({Codigo: arreglo3.Codigo, ProductName:arreglo3.ProductName,Precio:arreglo3.Precio });
  }  
  
  //this.router.navigate()
  //.subscribe(
  // (this.carro43)=>{this.datosPedido = this.carro43;},
  //(error)=>{console.log(error);
  //this.router.navigate('tab5')

  this.router.navigate(['tab5', JSON.stringify(this.carro43)]); //duda como pasar esto sin visualizarlo en la URL
 }
ngOnInit() {
}

getSum(){ 
  
  var sum = 0;    
  for(var item in this.carro40) {
    sum += this.carro40[item].Precio;   
  }
  for(var item in this.carro41) {
    sum += this.carro41[item].Precio;  
  }
  for(var item in this.carro42) {
    sum += this.carro42[item].Precio; 
  }
  
  return sum; 
} 
  
}
