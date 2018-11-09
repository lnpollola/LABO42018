import { Directive, Input, Renderer, OnInit, ElementRef  } from '@angular/core';

@Directive({
  selector: '[appDirectivaTipos]'
})
export class DirectivaTiposDirective {
  @Input() tipoMascota : string;
  constructor(private element : ElementRef, private renderer : Renderer) { }


  ngOnInit(): void {
    if(this.tipoMascota == 'perro') {
      this.renderer.setElementStyle(this.element.nativeElement, 'color', 'red');
    } else {
      this.renderer.setElementStyle(this.element.nativeElement, 'color', 'blue');
    }
    
  }
}
