import { Component, OnInit, Input } from '@angular/core';
import { CuestionarioComponent } from '../cuestionario/cuestionario.component';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})

export class TemaComponent implements OnInit {

  constructor() { }

  public tema="temadeinicio";
  
  ngOnInit() {
  }

}
