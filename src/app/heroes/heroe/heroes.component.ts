import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})


export class HeroeComponent {
    public nombre: string = 'Santiago';
    public edad: number = 21;

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }


    obtenerNombre(): string {
        return `Hola mi nombre es ${this.nombre} y ${this.edad}`;
    }

    cambiarHeroe(nombre: string): void {
        this.nombre = nombre;
    }
    cambiarEdad(edad: number): void {
        this.edad = edad;
    }

}