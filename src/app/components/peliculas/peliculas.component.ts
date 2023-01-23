import { Component, OnInit, DoCheck} from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculaService } from 'src/app/services/pelicula.service'; 

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit, DoCheck{

  public titulo: string;
  public peliculas:Pelicula[];
  public favorita:Pelicula | undefined;


  constructor(
    private _peliculaService: PeliculaService
  ){
    this.titulo='Peliculas';

    this.peliculas= this._peliculaService.getPeliculas();

  }
  ngOnInit() {
    console.log(this._peliculaService.holamundo)
    
  }
  ngDoCheck(){

  }

  cambiarTitulo(){
    this.titulo='Movies';
  }

  mostrarFavorita(event:any){
    console.log(event);
    this.favorita= event.pelicula;
  }


}
