import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `

<h1>Hola Mundo</h1>

<p>{{title}}</p>

<p>{{title.length}}</p>


<p>{{1 + 1}}</p>


<span>{{bases}}</span>
<hr>
<span>{{numero}}</span>


<button (click)="acumular( bases )"> +{{bases}} </button>

<!-- <button (click)="numero = numero -1;"> -1 </button> -->
<button (click)="acumular(-bases)"> -{{bases}}</button>

<button (click)="hola(1)">Dame Click!</button>
    
    `
})


export class ContadorComponent {
    public title: string = 'Holaaaa';
    public numero: number = 10;
    public bases: number = 5;


    hola = (lol: any) => {
        console.log('click')
        console.log(lol)
        console.log(this.numero)
    }

    acumular(valor: number) {
        this.numero += valor;
    }
}