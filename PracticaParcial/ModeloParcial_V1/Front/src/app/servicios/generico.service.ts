import { Injectable } from '@angular/core';
//import { Http, Response } from '@angular/http';
import { MiHttpService } from './mi-http.service';


import { Observable } from 'rxjs';
//import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GenericoService {

  metodo: string;

  constructor(public miHttp: MiHttpService) {

  }

  /*
  public traerJugadores():Observable<any> {
    return this.miHttp.httpGet("ReportLogEmpleados", {})
      .pipe(data => { return data; });

  }
*/
  
  public ServiceTraerHelados():Observable<any> {
    return this.miHttp.httpGet("TraerTodosLosHelados", {})
      .pipe(data => { return data; });

  }

  public ServiceAltaHelado(helado):Observable<any> {
    return this.miHttp.httpPost("altaHelado",helado)
        .pipe(data =>{ return data;}); 

  }

  public ServiceTraerUnHelado(idHelado):Observable<any> {
    return this.miHttp.httpGet("TraerUnHelado/"+idHelado, {})
      .pipe(data => { return data; });

  }


}
