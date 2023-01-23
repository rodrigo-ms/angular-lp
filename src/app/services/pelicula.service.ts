import { Injectable } from "@angular/core";
import { Pelicula } from "../models/pelicula";

@Injectable()
export class PeliculaService{

    public peliculas: Pelicula[];

    constructor(){
        this.peliculas=[
            new Pelicula ("El club de la pelea",2000,'https://catalogo.artium.eus/sites/default/files/imagenesbody/12/2014/el_club_de_la_lucha_cast.jpg'),
            new Pelicula("V de venganza",2005,'https://i.pinimg.com/originals/ec/e7/0b/ece70b005ccadf538878359139c852c2.jpg'),
            new Pelicula("Spiderman 4",2017,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkdFdW2rw14eQR57Z8iwd3y5wbtDknEA3iwQ&usqp=CAU')
          ]
    }

    holamundo(){
        return'hola mundo desde un servicio en angular';
    }
    getPeliculas(){
        return this.peliculas;
    }
}