import { Component } from '@angular/core';

import { mascota } from "./clases/mascota";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Practica primer parcial';
  tipo = 'gato'

  mascotas:Array<mascota>;

  constructor() { 

    this.mascotas = new Array<mascota>();

  }

  ngOnInit() {

  }

	mostrar($event){

  		this.mascotas = $event;
	
	}

}
