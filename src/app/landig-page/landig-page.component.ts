import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landig-page',
  templateUrl: './landig-page.component.html',
  styleUrls: ['./landig-page.component.css']
})
export class LandigPageComponent implements OnInit {
  peliculasEnCine!: {
    titulo: string;
    fecha: Date;
    precio: number;
    poster: string,
    enCines: boolean,
    proximosEstrenos: boolean,
    generos: Array<number>
  }[];

  peliculasEstreno!: {
    titulo: string;
    fecha: Date;
    precio: number;
    poster: string,
    enCines: boolean,
    proximosEstrenos: boolean,
    generos: Array<number>
  }[];

  ngOnInit(): void {

    this.peliculasEnCine = [
      {
        titulo: "Spider-Man",
        fecha: new Date(),
        precio: 1400.99,
        poster: "",
        enCines: false,
        proximosEstrenos: false,
        generos: [1,2]
      },
      {
        titulo: "Moana",
        fecha: new Date(),
        precio: 1400.99,
        poster: "",
        enCines: false,
        proximosEstrenos: false,
        generos: [2]
      },
      {
        titulo: "Titanic",
        fecha: new Date(),
        precio: 1400.99,
        poster: "",
        enCines: false,
        proximosEstrenos: false,
        generos: [1,3]
      }];

    this.peliculasEstreno = [
      {
        titulo: "Spider-Man",
        fecha: new Date(),
        precio: 1400.99,
        poster: "",
        enCines: false,
        proximosEstrenos: false,
        generos: [3]
      }];
  }
}
