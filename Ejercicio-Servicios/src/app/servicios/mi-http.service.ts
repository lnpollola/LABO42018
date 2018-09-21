import { Injectable } from '@angular/core';

import {Http ,Response} from '@angular/http';

import { catchError, map, tap } from 'rxjs/operators';

import { Observable, Subject } from 'rxjs';


@Injectable()

export class MiHttpService {

  api="https://restcountries.eu/rest/v2/";
  //peticion:any;

  constructor(public http:Http) { }
  
  public httpGet(metodo:string, objeto:any):Observable<any>{


    return this.http
    .get(this.api + metodo)
    .pipe(tap(data => {return this.extraerDatos(data)}));
    
  }

  private extraerDatos(resp:Response) {

      return resp.json() || {};

  }
  private handleError(error:Response | any) {

      return error;
  }

  public httpGetO(apiRuta)
  {

  }
  




}
