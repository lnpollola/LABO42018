import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { mascotasService } from '../../servicios/mascotas.service';

import { mascota } from '../../clases/mascota';

@Component({
  selector: 'app-listado-mascotas',
  templateUrl: './listado-mascotas.component.html',
  styleUrls: ['./listado-mascotas.component.css']
})
export class ListadomascotasComponent implements OnInit {

  //@Output() enviarDato: EventEmitter<any> = new EventEmitter<any>(); //evento (delegado)
  mascota:mascota;

  public listadoDemascotas: Array<mascota>;
  miServicioDemascotas:mascotasService;

  constructor( serviciomascotas:mascotasService ) {

    this.miServicioDemascotas = serviciomascotas;
    this.mascota = new mascota();

   }

  ngOnInit() {

    this.traermascotas();

    this.mascota = new mascota();

  }

  mostrarForm($event){

    if($event.srcElement.checked){
      document.getElementById("formAlta").style.visibility = 'visible';
    } else {
      document.getElementById("formAlta").style.visibility = 'hidden';
    }

  }

  guardar(){
    /*
    let faltanDatos:boolean = false;

    if(this.mascota.nombre === undefined){
      document.getElementById("nombremascota").style.borderColor = 'red';
      faltanDatos = true;
    }

    if(this.mascota.sexo === undefined){
      document.getElementById("sexomascota").style.borderColor = 'red';
      faltanDatos = true;
    }

    if(this.mascota.fechaDeNacimiento === undefined){
      document.getElementById("fechaDeNacimiento").style.borderColor = 'red';
      faltanDatos = true;
    }

    if(!faltanDatos){
    */
    var datos = "nombre=" + this.mascota.nombre + 
          "&tipo=" + this.mascota.tipo + 
          "&fechaDeNacimiento=" + this.mascota.fechaDeNacimiento;
    
    this.miServicioDemascotas.nuevo(datos, 'application/x-www-form-urlencoded')
    .then( response => {

      console.log(response);

      if( response.hasOwnProperty('Estado') && response.Estado === "Error"){

        alert("Se rompio todo");

      } else {

        alert("Usuario dado de alta con exito!");
        this.mascota = new mascota();

        this.traermascotas();

      }

      });

    //}

  }
  /*
  borrarUno(id){

      var datos = "id=" + id;
      
      this.miServicioDemascotas.borrar(datos, 'application/x-www-form-urlencoded')
      .then( response => {

        if( response.hasOwnProperty('Estado') && response.Estado === "Error"){

          alert("Se rompio todo");

        } else {

          alert("Usuario dado de baja con exito!");

          this.traermascotas();

        }

      });

  }
  */
  traermascotas(){

    this.miServicioDemascotas.listar()
    .then(datos=>{
      this.listadoDemascotas = datos;
    });

  }

  /*enviar(mascota){

    this.enviarDato.emit( mascota );

  }*/

}
