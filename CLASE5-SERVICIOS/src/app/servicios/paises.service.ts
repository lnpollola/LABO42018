import { Injectable } from '@angular/core';
import{ GenericoService } from './generico.service';
import { Observable } from 'rxjs';

@Injectable()
export class PaisesService {

  constructor(public miServicioGenerico: GenericoService) {

   }

   TraerPaises():Observable<any>{
     return this.miServicioGenerico.httpGet("","").pipe(data=>{return data});
     
   }
}
