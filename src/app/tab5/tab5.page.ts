import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
  argumento=null;
  @Input() datos:string[];
  constructor (public argumento:ActivatedRoute) {}
   
  ngOnInit() {
    
    this.argumento = JSON.parse(this.activateRoute.snapshot.paramMap.get('id'));
    //OK this.argumento = this.activateRoute.snapshot.params;
    //this.argumento = this.activateRoute.snapshot.data;
   // console.log(this.argumento);

  }
}
