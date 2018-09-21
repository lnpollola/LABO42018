import { Component } from '@angular/core';
import { PaisesService } from './servicios/paises.service';
import { GenericoService } from './servicios/generico.service';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public paises:any;
  
  
  constructor(private servicioPaises:PaisesService){}

  TraerPaises()
  { 
    this.servicioPaises.TraerPaises().subscribe(
      data=>{
        console.log(JSON.parse(data._body).filter(function(pais){return pais.name=="Argentina";}))   });

  }


}
