import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http/mi-http.service'; 

import { mascota } from '../clases/mascota'; 

@Injectable()
export class mascotasService { 

  constructor(public miHttp: MiHttpService ) { }

  public listar():Promise<Array<mascota>> {
       return   this.miHttp.httpGetP("/mascotas")
          .then( data => {
            return data;
          })
          .catch( err => {
            return null;
          });
          //return null;
    }

      public traerUnoPorNombre(nombre):Promise<Array<mascota>> {
       return   this.miHttp.httpGetP("/mascotas/"+nombre)
          .then( data => {
            return data;
          })
          .catch( err => {
            return null;
          });
          //return null;
    }

  public nuevo(params, contentType):Promise<any> {
   return this.miHttp.httpPostData("/mascotas/alta", params, contentType)
      .then( data => {
        return data;
      })
      .catch( err => {
        console.log( err );
        return null;
      });
  }

    public borrar(params, contentType):Promise<any> {
   return this.miHttp.httpPostData("/mascotas/borrar", params, contentType)
      .then( data => {
        return data;
      })
      .catch( err => {
        console.log( err );
        return null;
      });
  }



}
