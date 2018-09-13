import { Component, OnInit, Input } from '@angular/core';
import { PreguntaComponent } from '../pregunta/pregunta.component';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.css']
})
export class CuestionarioComponent implements OnInit {
  @Input()
  tema: string;

  public cuestionario="cuestionario";
 
  constructor() {

   }

  ngOnInit() {
  }

}
