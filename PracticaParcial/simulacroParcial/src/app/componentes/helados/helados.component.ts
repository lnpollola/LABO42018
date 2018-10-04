import { Component, OnInit } from '@angular/core';
import { ServicioHeladosService} from '../../servicios/servicio-helados.service';
import { Injectable } from '@angular/core';
import { FormAltaComponent} from '../form-alta/form-alta.component';
import {FormsModule} from '@angular/forms';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-helados',
  templateUrl: './helados.component.html',
  styleUrls: ['./helados.component.css']
})
export class HeladosComponent implements OnInit {

  listaHelados:any;
  respuesta:any;
  sabor:string;
  tipo:string;
  kilo:any;
  constructor(private miServicioHelados:ServicioHeladosService) {

   }

   TraerHelados()
   { 
     this.miServicioHelados.TraerHelados().subscribe(data=>{
       this.listaHelados= JSON.parse(data._body);
       console.log(this.listaHelados);
    });
 
 
   }

   GuardarHelado()
   {
     let obj=
     {
       "sabor":this.sabor,
       "tipo":this.tipo,
       "kilo": this.kilo

     }/*
    this.miServicioHelados.GuardarHelado(obj).subscribe(data=>{
      this.respuesta= JSON.parse(data._body);
      console.log(this.respuesta);
   });*/

   }

  ngOnInit() {
  }

}
