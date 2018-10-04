import { Component, OnInit } from '@angular/core';
import { ServicioHeladosService } from '../../servicios/servicio-helados.service';
import {FormsModule} from '@angular/forms';
import {NgForm} from '@angular/forms';
import { Helado } from '../../clases/helado';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-form-alta',
  templateUrl: './form-alta.component.html',
  styleUrls: ['./form-alta.component.css']
})
export class FormAltaComponent implements OnInit {

  helado:Helado;
  sabor:string;
  tipo:string;
  kilo:number;
respuesta:any;
  constructor( private miServicioHelados:ServicioHeladosService) { }

  GuardarHelado(){

    this.helado = new Helado('Mascarpoe','Crema',"1");
   let datos= {
     "sabor": this.sabor,
     "tipo": this.tipo,
     "kilos": this.kilo
   }

   
     this.miServicioHelados.GuardarHelado(datos)
     .then((data)=>{console.log(data)})
     .catch((data)=>{console.log(data)})
         /*.subscribe(
      (data) => { console.log(data)},
      (error) => { console.log(error)}
    );*/
  
  
  
  }

  ngOnInit() {
  }

}
