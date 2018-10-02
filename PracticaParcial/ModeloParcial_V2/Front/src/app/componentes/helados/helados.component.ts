import { Component, OnInit } from '@angular/core';
import { GenericoService } from '../../servicios/generico.service';
import { Helado } from '../../clases/helado';
//import { InputGroup  } from 'primeng/inputtext';

@Component({
  selector: 'app-helados',
  templateUrl: './helados.component.html',
  styleUrls: ['./helados.component.css']
})
export class HeladosComponent implements OnInit {

  listaHelados: any;

  unHelado: Helado;

  helado : any;

  resultado : any;

  mostrarHelados: boolean = false;

  constructor(private _servicio:GenericoService) {
    
    this._servicio.ServiceTraerHelados().subscribe(data => {   
      this.listaHelados = JSON.parse(data._body);
    })
    
  }

  ngOnInit() {
    
  }

  AltaHelado(){

    this.helado = new Helado('Mascarpoe','Crema',1);

    console.log(this.helado);

    this._servicio.ServiceAltaHelado(this.helado)
    .subscribe(
     // data => { this.resultado = data._body;}
    )
    ;
  
  }

  MostrarUnHelado(idHelado){
    this._servicio.ServiceTraerUnHelado(idHelado).subscribe(data =>{
      this.unHelado = JSON.parse(data._body);
    });

    console.log(this.unHelado);

  }


  MostrarHelados(){
    if(this.mostrarHelados == false){ 
      
      this.mostrarHelados = true;
    
    }  
    else{

      this.mostrarHelados = false;
    
    }
  
  
  }


  
}
