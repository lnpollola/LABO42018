import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { PersonasService } from '../../servicios/personas.service';

import { Persona } from '../../clases/persona';

@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css']
})
export class ListadoPersonasComponent implements OnInit {

  @Output() enviarDato: EventEmitter<any> = new EventEmitter<any>(); //evento (delegado)
  persona:Persona;

  public listadoDePersonas: Array<Persona>;
  miServicioDePersonas:PersonasService;

  constructor( servicioPersonas:PersonasService ) {

    this.miServicioDePersonas = servicioPersonas;
    this.persona = new Persona();

   }

  ngOnInit() {

    this.traerPersonas();

    this.persona = new Persona();

  }

  mostrarForm($event){

    if($event.srcElement.checked){
      document.getElementById("formAlta").style.visibility = 'visible';
    } else {
      document.getElementById("formAlta").style.visibility = 'hidden';
    }

  }

  guardar(){

    let faltanDatos:boolean = false;

    if(this.persona.nombre === undefined){
      document.getElementById("nombrePersona").style.borderColor = 'red';
      faltanDatos = true;
    }

    if(this.persona.mail === undefined){
      document.getElementById("mailPersona").style.borderColor = 'red';
      faltanDatos = true;
    }

    if(this.persona.sexo === undefined){
      document.getElementById("sexoPersona").style.borderColor = 'red';
      faltanDatos = true;
    }

    if(this.persona.password === undefined){
      document.getElementById("passwordPersona").style.borderColor = 'red';
      faltanDatos = true;
    }

    if(!faltanDatos){

      var datos = "nombre=" + this.persona.nombre + 
            "&mail=" + this.persona.mail + 
            "&sexo=" + this.persona.sexo + 
            "&password=" + this.persona.password;
      
      this.miServicioDePersonas.nuevo(datos, 'application/x-www-form-urlencoded')
      .then( response => {

        if( response.hasOwnProperty('Estado') && response.Estado === "Error"){

          alert("Se rompio todo");

        } else {

          alert("Usuario dado de alta con exito!");
          this.persona = new Persona();

          this.traerPersonas();

        }

      });

    }

  }

  borrarUno(id){

      var datos = "id=" + id;
      
      this.miServicioDePersonas.borrar(datos, 'application/x-www-form-urlencoded')
      .then( response => {

        if( response.hasOwnProperty('Estado') && response.Estado === "Error"){

          alert("Se rompio todo");

        } else {

          alert("Usuario dado de baja con exito!");

          this.traerPersonas();

        }

      });

  }

  traerPersonas(){

    this.miServicioDePersonas.listar()
    .then(datos=>{
      this.listadoDePersonas = datos;
    });

  }

  enviar(persona){

    this.enviarDato.emit( persona );

  }

}
