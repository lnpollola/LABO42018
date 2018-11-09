export class Mascota {
    public id_mascota;
    public Nombre = '';
    public Tipo: string;
    public Fechadenacimiento;
    public Rutadefoto: string;
  
    constructor(id_mascota?: string, Nombre?: string,Tipo?:string, Fechadenacimiento?:string, Rutadefoto?:string) {
      
        this.id_mascota = id_mascota;

        this.Nombre = Nombre;

        this.Tipo=Tipo;
        
        this.Fechadenacimiento = Fechadenacimiento;

        this.Rutadefoto = Rutadefoto;

    }
  
  
    // public abstract verificar():boolean; 
    
    // public retornarAyuda() {
      
    //   return "NO hay Ayuda definida";
    // }
  }
  