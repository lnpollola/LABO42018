import { Injectable } from '@angular/core';

import {Http ,Response, Headers, RequestOptions, RequestOptionsArgs, URLSearchParams} from '@angular/http';

import { catchError, map, tap } from 'rxjs/operators';

import { Observable, Subject } from 'rxjs';


@Injectable()

export class HttpGenericoService {

  //api="https://restcountries.eu/rest/v2/";
    api="http://localhost:8080/api/Helados/"
  

  constructor(public http:Http) { }
  

  public httpGet(metodo:string, objeto?:any):Observable<any>{

    
    return this.http
    .get(this.api + metodo)
    .pipe(tap(data => {return this.extraerDatos(data)}));
    
  }
/*
 
  public httpPost(metodo:string, objeto:any)
  {
    return this.http.post(this.api + metodo,objeto)
    .pipe(catchError(this.handleError));
  }
*/
  
  private extraerDatos(resp:Response) {

      return resp.json() || {};

  }
  private handleError(error:Response | any):Observable<any>{

      return error;
  }

 
  //Con header
  public httpPost(metodo:string, objeto:any)
  {
    return this.http.post(this.api + metodo,objeto)
    .toPromise()
    .then((data)=>console.log(data))
    .catch((data)=>console.log(data))
   // .pipe(catchError(this.handleError));

  }



  // Codigo de Mati
  /*
  public httpPostO(url: string, objeto): Observable<Response> {
    return this.http.post(this.api + url, objeto)
      .map((res: Response) => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }*/




 




}
