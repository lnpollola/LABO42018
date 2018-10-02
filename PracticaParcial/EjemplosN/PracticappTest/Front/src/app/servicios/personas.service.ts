import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http/mi-http.service'; 

import { Persona } from '../clases/persona'; 

@Injectable()
export class PersonasService { 

  constructor(public miHttp: MiHttpService ) { }

  public listar():Promise<Array<Persona>> {
       return   this.miHttp.httpGetP("/personas")
          .then( data => {
            return data;
          })
          .catch( err => {
            return null;
          });
          //return null;
    }

  public nuevo(params, contentType):Promise<any> {
   return this.miHttp.httpPostData("/personas/alta", params, contentType)
      .then( data => {
        return data;
      })
      .catch( err => {
        console.log( err );
        return null;
      });
  }

    public borrar(params, contentType):Promise<any> {
   return this.miHttp.httpPostData("/personas/borrar", params, contentType)
      .then( data => {
        return data;
      })
      .catch( err => {
        console.log( err );
        return null;
      });
  }



}
