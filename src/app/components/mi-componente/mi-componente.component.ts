import { Component } from "@angular/core";

@Component({
    selector:'mi-componente',
    templateUrl:`./mi-componente.component.html`
})
export class miComponente{

    public titulo:string;
    public comentario:string;
    public year:number;
    public mostrarPeliculas:boolean;



    constructor(){
        this.titulo='Hola mundo soy mi componente';
        this.comentario='este es el cuerpo';
        this.year=2022;
        this.mostrarPeliculas=true;
        console.log('mi componente esta cargado')
    }
    ocultarPeliculas(){
        this.mostrarPeliculas=false;
    }

}