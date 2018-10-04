import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeladosService {

  metodo: string;

  constructor(public miHttp: MiHttpService) {

  }
 
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
