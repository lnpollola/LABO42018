import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http.service';
import { Observable } from 'rxjs';
import  {map, catchError} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})


@Injectable()
export class MascotasService {

  metodo: string;
  handleError:any;
  filtrado:any;

  constructor( public miHttp: MiHttpService ) {
  }


  public ServiceTraerTodasLasMascotas():Observable<any> {
    return this.miHttp.httpGet("TraerTodasLasMascotas", {})
      .pipe(data => { return data; });
    }

    public borrar(id)
    { 
      // console.info("Estoy en borrar service",id);
      return this.miHttp.httpPost("borrarMascota/"+id,{})
      .pipe((data)=>{return data}, catchError(this.handleError));
    }

  public ServiceAltamascota(mascota):Observable<any> {
    return this.miHttp.httpPost("altaMascota",mascota)
        .pipe(data =>{ return data;}); 

  }

  // public ServiceTraerGanadores():Observable<any> {
  //   return this.miHttp.httpGet("TraerTodosLosUsuarios", {} )
  //     .pipe( map( data => { 
  //       console.log(JSON.parse(data._body));
  //       return JSON.parse(data._body).filter(
  //                           jugador => jugador.id_usuario == 1 
  //                         ); 
  //                         }));

  //   }

  // public ServiceTraerTodosLosJugadores():Observable<any> {
  //   return this.miHttp.httpGet("TraerTodosLosUsuarios", {})
  //     .pipe(data => { return data; });
  //   }


  // public ServiceTraerUnvehiculo(idvehiculo):Observable<any> {
  //   return this.miHttp.httpGet("TraerUnvehiculo/"+idvehiculo, {})
  //     .pipe(data => { return data; });
  // }

  // public ServiceTraerUnvehiculoSabor(sabor):Observable<any> {
  //   return this.miHttp.httpGet("TraerUnvehiculoSabor/"+sabor, {})
  //     .pipe(data => { return data; });
  // }


  // public Borrar(id)
  // { 
  //   console.info("Estoy en borrar service",id);
  //   return this.miHttp.httpPost("borrarHel/"+id,{})
  //   .pipe((data)=>{return data}, catchError(this.handleError));
  // }





}
