import { Injectable } from '@angular/core';
import { MiHttpService } from './mi-http.service';

@Injectable({
  providedIn: 'root'
})
export class MesasService {

  token;

  constructor(private http: MiHttpService) {
    this.token= localStorage.getItem('token');
   }

   TraerMesas()
   {
     return this.http.httpGet("Mesas/TraerTodas").pipe(data=>{return data});
   }

   ServirMesa(idMesa)
   {
    return this.http.httpPost("Mesas/ServirMesa",{"idMesa": idMesa})
    .then((data)=>{return data})
    .catch((data)=>{return data})
   }

   CerrarMesa(idMesa)
   {
    return this.http.httpPost("Mesas/Cerrar",{"idMesa": idMesa})
    .then((data)=>{return data})
    .catch((data)=>{return data})
   }

   CobrarMesa(idMesa)
   {
    return this.http.httpPost("Mesas/Cobrar",{"idMesa": idMesa})
    .then((data)=>{return data})
    .catch((data)=>{return data})
   }
}
