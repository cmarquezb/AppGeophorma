import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})

export class Tab4Page {
  
  pinta=[{
    'Codigo' : 1,
    'ProductName' : 'Muros',
    'Precio'  : 50
  },
  {
    'Codigo' : 2,
    'ProductName' : 'Portones',
    'Precio'  : 30
  },
  {
    'Codigo' : 3,
    'ProductName' : 'Techos',    
    'Precio'  : 10
  }];
  alba=[{
    'Codigo' : 1,
    'ProductName' : 'Muros',
    'Precio'  : 50
  },
  {
    'Codigo' : 2,
    'ProductName' : 'Parrilla',
    'Precio'  : 30
  },
  {
    'Codigo' : 3,
    'ProductName' : 'Pisos',    
    'Precio'  : 10
  },
  {
    'Codigo' : 4,
    'ProductName' : 'Losas',
    'Precio'  : 30
  }];

  manta4=[{
    'Codigo' : 1,
    'ProductName' : 'Muros',
    'Precio'  : 50
  },
  {
    'Codigo' : 2,
    'ProductName' : 'Parrilla',
    'Precio'  : 30
  },
  {
    'Codigo' : 3,
    'ProductName' : 'Pisos',    
    'Precio'  : 10
  },
  {
    'Codigo' : 4,
    'ProductName' : 'Losas',
    'Precio'  : 30
  }];
  carro40=[{
    'ProductName' : null,
    'Precio'  : null
  }];
  carro41=[{
    'ProductName' : null,
    'Precio'  : null
  }];
  carro42=[{
    'ProductName' : null,
    'Precio'  : null
  }];
  
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
  this.router.navigate(['tab5']); 
 }
}
