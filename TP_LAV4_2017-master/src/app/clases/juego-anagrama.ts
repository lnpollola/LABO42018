import { Juego } from './juego';

export class JuegoAnagrama extends Juego {

listaPalabras:Array<string>;
palabraUsada:string;
palabraUsuario:string;
arrayDeLetras:Array<string>;

    constructor(jugador){

        super("Anagrama",false,jugador);

        this.listaPalabras=new Array("ARGENTINA", "BASIL", "ALEMANIA", "COMPUTADORA", "RATON", "SILLA", "MESA", "PELOTA", "CASA", "VACA");
        this.palabraUsada=this.SeleccionarPalabra();
        this.arrayDeLetras=this.DesarmarPalabra();
        console.log(this.palabraUsada);
        console.log(this.arrayDeLetras);
    }

    SeleccionarPalabra():string
    {
       let indice= Math.round(Math.random()*10);
       return this.listaPalabras[indice];
    }

    DesarmarPalabra()
    {

       let array= this.palabraUsada.split("");

       let arrayAux = array.sort(function() {return Math.random() - 0.5});

       return arrayAux;
    }



    verificar(){


        if(this.palabraUsuario.toUpperCase()==this.palabraUsada)
        {
            this.gano=true;
            return true;
        }
        else{
            return false;
        }
    }


}
