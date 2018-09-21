import { log } from 'util';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import { map, tap, catchError } from 'rxjs/operators';
/*import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';*/


@Injectable({
  providedIn: 'root'
})
export class GenericoService {

api:string="https://restcountries.eu/rest/v2/all";

  constructor(public http:Http) { }

/*
  public httpPostP( url: string, objeto: any )
  {
    return this.http
    .get( url )
    .subscribe( data => {
      console.log( data );
      return data;
    });
  }*/

  public httpGet ( metodo:string, objeto:any): Observable<any>
  {
    return this.http.get(this.api+metodo )
      .pipe( tap(data=>{return this.extractData(data)}));
     
  }


  private extractData ( res: Response )
  {
    return res.json() || {};
  }

  private handleError ( error: Response | any )
  {
    return error;
  }
}
