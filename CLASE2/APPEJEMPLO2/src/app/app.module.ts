import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { LoginComponent } from './componentes/login/login.component';
// RUTEO
import { Routes, RouterModule} from '@angular/router';

// RUTEO
const miRuteo = [
  {path:'bienvenida', component:BienvenidaComponent},
  {path:'login', component:LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    // RUTEO
    RouterModule.forRoot(miRuteo)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
