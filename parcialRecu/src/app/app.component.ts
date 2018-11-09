import { Component } from '@angular/core';
import { MiHttpService } from './servicios/mi-http.service';
import { MascotasService } from './servicios/mascotas.service';
import { Mascota} from '../clases/mascota';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parcialRecu';

  private mascotaBuscada : Mascota;
  public listado;
  public mascotaAlta: Mascota;
  public AltaNombre:string;
  public AltaTipo:string;

  mascota : Mascota;
  private array : Array<Mascota>;

  constructor(public masSrv : MascotasService) {
    this.getMascotas();
  }

  getMascotas() {
    this.masSrv.ServiceTraerTodasLasMascotas().subscribe(data => {   
      this.listado = JSON.parse(data._body);
  });
  }

  ngOnInit(): void {
    //throw new Error("Method not implemented.");
    this.mascotaAlta = new Mascota();
  }

  refreshGrid(needRefresh) {
    // if(needRefresh) {
      this.getMascotas();
    // }
  }

  mostrarEncontro(mascota) {
    this.mascotaBuscada = mascota;
  }


  guardarMascota() {

    console.log(this.mascotaAlta);

      if(this.AltaTipo == 'perro') {
        this.mascotaAlta.Tipo = 'Perro';
      } else {
        this.mascotaAlta.Tipo = 'Gato';
      }

      this.mascotaAlta.Nombre = this.AltaNombre;


      console.log(this.mascotaAlta,"MASCOTA DSP");
      this.masSrv.ServiceAltamascota(this.mascotaAlta)
      .subscribe(data => {   
        // this.mascotaAlta = null;
        this.getMascotas();
      })
    }
  


}


