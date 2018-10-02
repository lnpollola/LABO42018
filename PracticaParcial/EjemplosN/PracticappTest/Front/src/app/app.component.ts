import { Component } from '@angular/core';

import { Persona } from "./clases/persona";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Practica primer parcial';

  persona:Persona;

  constructor() { 

    this.persona = new Persona();

  }

  ngOnInit() {

  }

	mostrar($event){

  		this.persona = $event;
	
	}

}
