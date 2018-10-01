import {Casilla} from './casilla';
import {Juego} from './juego';

export class BuscaMinas extends Juego  {

    public tablero:Casilla[][];
    public cantidadMinas: number;
    public minasEncontradas:number;
    public nivel:number;
    public final:boolean;

public constructor(nivel:number, nombre?: string, gano?: boolean, jugador?:string)
{    
    super("Buscaminas",gano,jugador)
    this.cantidadMinas=0;
    this.minasEncontradas=0;
    this.tablero=[];
    this.nivel=nivel;
    this.final=false;
  
    for(let i:number=0; i< this.nivel ;i++)
    {
         this.tablero[i]=[];

        for(let j:number=0; j< this.nivel; j++ )
        {
             let coor=Array<number>(i,j);

           this.tablero[i][j]=new Casilla(coor);
            
        } 
    }
    this.PonerMinas();
  
}

public verificar():boolean
{ 
    var flag=0;
    
for(let i=0; i<this.nivel; i++)
{
    for(let j=0; j<this.nivel; j++)
    {
        if(!(this.tablero[i][j].seleccion||this.tablero[i][j].marcada) )
        {
            return false;
        }
        if(this.tablero[i][j].seleccion && this.tablero[i][j].tieneMina )
        {
            this.gano=false;
            return false;
        }
    }
    
}
this.gano=true;
this.final=true;
return true;
}



    public DescubrirCasilla(coor:Array<number>)
    {
        if(!this.tablero[coor[0]][coor[1]].marcada)
        {

        
        if(!this.tablero[coor[0]][coor[1]].seleccion)
        {
        let retorno = this.tablero[coor[0]][coor[1]].SeleccionarMina();
        if(retorno)
        {
            //this.minasEncontradas++;
            this.tablero[coor[0]][coor[1]].minasCerca=true;
           this.TerminarJuego();
                
        }
        else
        {
             this.tablero[coor[0]][coor[1]].minasCerca=0;

            for (let i=-1 ; i<2 ; i++)
            {
                for (let j=-1 ; j<2 ;j++)
                {
                   
                    if(  (coor[0]+i >= 0 && coor[1]+j >= 0)   &&   (coor[0]+i <= this.nivel-1 && coor[1]+j <= this.nivel-1)   )
                    {
                         
                        if(this.tablero[coor[0]+i][coor[1]+j].tieneMina)
                        {
                            this.tablero[coor[0]][coor[1]].minasCerca++;
                        }

                    }
                    
                }
            }
            if(this.tablero[coor[0]][coor[1]].minasCerca==0)
            {                           /////////////////////////////////////////////
                    
                 for (let i=-1 ; i<2 ; i++)
                 {
                    for (let j=-1 ; j<2 ;j++)
                    {
                   
                    if(  (coor[0]+i >= 0 && coor[1]+j >= 0)   &&   (coor[0]+i <= this.nivel-1 && coor[1]+j <= this.nivel-1)   )
                         {
                         let newArray:Array<number>=new Array(coor[0]+i,coor[1]+j);
                         this.DescubrirCasilla(newArray);
                        
                         }
                    
                    }
                 }

            }                           ////////////////////////////////////////////
        }
        this.verificar();
         return retorno;
        }
    }
    
    }


/*private PonerNumeros(coor:Array<number>)
{

    for (var i=-1 ; i<2 ; i++)
    {

        for (var j=-1 ; j<2 ;j++)
        {
            
               if(this.tablero[coor[0]+i][coor[1]+j].tieneMina==true)
                {
                    this.tablero[coor[0]+i][coor[1]+j].minasCerca++;
                }
                
            
        }//for j

    }//for i

    
}*/

public MarcarCasilla(coor:Array<number>)
{
    if(!this.tablero[coor[0]][coor[1]].seleccion)
    {   
        if(!this.tablero[coor[0]][coor[1]].marcada)
        {
           this.minasEncontradas++; 
        }
        else
        {
            this.minasEncontradas--;
        }
        this.tablero[coor[0]][coor[1]].marcada= !this.tablero[coor[0]][coor[1]].marcada;
        this.verificar();
    }
    
}

private TerminarJuego()
{
    for(let i=0;i<this.nivel; i++)
    {
        for(let j=0;j<this.nivel; j++)
        {   let coor=Array<number>(i,j);
            this.DescubrirCasilla(coor);    
        }        
    }
    this.final=true;
}

private PonerMinas()
{
    var canMinas:number=0;

    do {
        let fila=(Math.round(Math.random()*10));
        let columna=(Math.round(Math.random()*10));

        if(fila < this.nivel && columna < this.nivel)
        {

        if(this.tablero[fila][columna].tieneMina==false)
        {
            this.tablero[fila][columna].tieneMina=true;
            this.cantidadMinas++;
            canMinas++;
        }
        }
        
    } while (canMinas<10);

    
}
                      
    



}///FINAL CLASE

