export class Casilla {

public coordenada:Array<number>;
public tieneMina:boolean;
public seleccion:boolean;
public minasCerca:any;
public marcada:boolean=false;


 public constructor(coordenadas:Array<number>)
 {
     this.coordenada=coordenadas;
     this.tieneMina=false;
     this.seleccion=false;

 }

 public SeleccionarMina():boolean
 {
     this.seleccion=true;

     if(this.tieneMina)
     {
         return true;
     }
     else{
         return false;
     }
 }
}

