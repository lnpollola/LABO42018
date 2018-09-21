import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponent } from './app.component';
import { GenericoService } from './servicios/generico.service';
import { PaisesService } from './servicios/paises.service';
import { Injectable } from '@angular/core';
import {HttpModule} from '@angular/http';
/*import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';*/

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
   

  ],
  providers: [GenericoService, PaisesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
