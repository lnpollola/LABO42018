import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import {Observable} from 'rxjs/Observable';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { MiHttpService } from './servicios/mi-http.service';
import { GenericoService } from './servicios/generico.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
    
  ],
  providers: [
    MiHttpService,
    GenericoService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
