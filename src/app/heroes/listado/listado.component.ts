import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent implements OnInit {

  public heroes: string[] = ['Santiago', 'Cristina', 'Ironman', 'Thor', 'Spiderman'];
  public heroeBorrado: string = ''

  constructor() {

    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngOnInit');


  }

  agregarNuevoHeroe(heroe: string): void {
    if (!this.heroes.find(heroeInArray => heroeInArray === heroe)) {
      this.heroes = [...this.heroes, heroe]

    }
  }

  borrarHeroe(heroe: string): void {
    this.heroes = this.heroes.filter(heroeInArray => heroeInArray !== heroe)

    this.heroeBorrado = heroe
  }




}
