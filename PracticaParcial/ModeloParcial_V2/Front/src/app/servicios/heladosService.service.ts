import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http.service';
import { Observable } from 'rxjs';
import  {map, catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HeladosService {

  metodo: string;
  handleError:any;

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


  public Borrar(id)
  { 
    console.info("Estoy en borrar service",id);
    return this.miHttp.httpPost("borrarHel/"+id,{})
    .pipe((data)=>{return data}, catchError(this.handleError));
  }

}
