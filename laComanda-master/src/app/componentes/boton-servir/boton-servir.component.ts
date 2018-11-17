import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PedidoService } from '../../servicios/pedido.service';

@Component({
  selector: 'app-boton-servir',
  templateUrl: './boton-servir.component.html',
  styleUrls: ['./boton-servir.component.css']
})
export class BotonServirComponent implements OnInit {


  @Input() idDetalle:number;
 
  @Output() lanzador=new EventEmitter();

  constructor(private httpPedido: PedidoService) { }

  Servir()
  {
    this.httpPedido.ServirPedido(this.idDetalle).then((data)=>{
      this.lanzador.emit();
    })
    .catch((data)=>{
      console.log(data);
    })

  }

  ngOnInit() {
  }

}
