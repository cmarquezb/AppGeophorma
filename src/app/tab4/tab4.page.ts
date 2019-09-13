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
  pinta=[
    {'Codigo' : 1,'ProductName' : 'Muros','Precio'  : 50},
    {'Codigo' : 2,'ProductName' : 'Portones','Precio'  : 30},
    {'Codigo' : 3,'ProductName' : 'Techos','Precio'  : 10}
  ];
  alba=[
    {'Codigo' : 4,'ProductName' : 'Muros','Precio'  : 50},
    {'Codigo' : 5,'ProductName' : 'Parrilla','Precio'  : 30},
    {'Codigo' : 6,'ProductName' : 'Pisos','Precio'  : 10},
    {'Codigo' : 7,'ProductName' : 'Losas','Precio'  : 30}
  ];
  manta4=[
    {'Codigo' : 8,'ProductName' : 'Muros','Precio'  : 50},
    {'Codigo' : 9,'ProductName' : 'Parrilla','Precio'  : 30},
    {'Codigo' : 10,'ProductName' : 'Pisos','Precio'  : 10},
    {'Codigo' : 11,'ProductName' : 'Losas','Precio'  : 30}
  ];
 
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
  

constructor (public router: Router){}
 enviacar(){
  var contador = 0;
  for(var item in this.carro40) {    
    this.carro43.push({Codigo: this.carro40[item].Codigo, ProductName:this.carro40[item].ProductName,Precio:this.carro40[item].Precio });
  }
  for(var item in this.carro41) {
    this.carro43.push({Codigo: this.carro41[item].Codigo, ProductName:this.carro41[item].ProductName,Precio:this.carro41[item].Precio });
  }
  for(var item in this.carro42) {
    this.carro43.push({Codigo: this.carro42[item].Codigo, ProductName:this.carro42[item].ProductName,Precio:this.carro42[item].Precio });
  }  
//console.log(JSON.stringify(this.carro43));
 this.router.navigate(['tab5', JSON.stringify(this.carro43)]);
 }
}
