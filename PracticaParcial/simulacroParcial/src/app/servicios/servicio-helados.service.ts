
import { Injectable } from '@angular/core';
import { HttpGenericoService } from './http-generico.service';
import { Observable } from 'rxjs';
import { URLSearchParams } from "@angular/http";
import { Helado } from '../clases/helado';

@Injectable()

export class ServicioHeladosService {

  constructor(public miServicioGenerico: HttpGenericoService) {

   }

   TraerHelados():Observable<any>{
     return this.miServicioGenerico.httpGet("TraerTodos","").pipe(data=>{return data});
     
   }

   public GuardarHelado(helado) {
    return this.miServicioGenerico.httpPost("CargarUno",helado)
    .then((data)=>{return data})
    .catch((data)=>{return data})

  }

  public TraerUnHelado(sabor){
    return this.miServicioGenerico.httpGet("TraerUno/"+sabor).pipe(data=>{return data});
  }

  public Borrar(id)
  { 
    return this.miServicioGenerico.httpPost("BorrarUno",id)
    .then((data)=>{return data})
    .catch((data)=>{return data})

  }
   
}






