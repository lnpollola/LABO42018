import { Injectable } from '@angular/core';

import {Http ,Response, Headers} from '@angular/http';

import { catchError, map, tap } from 'rxjs/operators';

import { Observable, Subject } from 'rxjs';


@Injectable()

export class MiHttpService {

  //api="https://restcountries.eu/rest/v2/";
    api="http://localhost/Back/"
  

  constructor(public http:Http) { }
  

  public httpGet(metodo:string, objeto:any):Observable<any>{

    return this.http
    .get(this.api + metodo)
    .pipe(tap(data => {return this.extraerDatos(data)}));
    
  }

 
  public httpPost(metodo:string, objeto:any)
  {
    return this.http.post(this.api + metodo,objeto)
    .pipe(catchError(this.handleError));
  }

  
  private extraerDatos(resp:Response) {

      return resp.json() || {};

  }
  private handleError(error:Response | any) {

      return error;
  }

 /* 
  //Con header
  public httpPost(metodo:string, objeto:any)
  {
    return this.http.post(
                          this.api + metodo,objeto,{
                            headers : new Headers({
                              'Content-Type' : 'application/json'
                              }
                            )
    })
    .pipe(catchError(this.handleError));
  }
*/

/*
  // Codigo de Mati
  public httpPostO(url: string, objeto): Observable<Response> {
    return this.http.post(this.api + url, objeto)
      .map((res: Response) => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }
*/



 




}
