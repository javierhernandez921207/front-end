import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landig-page',
  templateUrl: './landig-page.component.html',
  styleUrls: ['./landig-page.component.css']
})
export class LandigPageComponent implements OnInit {
  peliculasEnCine: { titulo: string; fecha: Date; precio: number; poster: string }[] | undefined;
  peliculasEstreno: { titulo: string; fecha: Date; precio: number; poster: string }[] | undefined;

  ngOnInit(): void {

    this.peliculasEnCine = [
      {
        titulo: "Spider-Man",
        fecha: new Date(),
        precio: 1400.99,
        poster: ""
      },
      {
        titulo: "Moana",
        fecha: new Date(),
        precio: 500.99,
        poster: ""
      },
      {
        titulo: "Titanic",
        fecha: new Date(),
        precio: 300.99,
        poster: ""
      }];
    this.peliculasEstreno = [
      {
        titulo: "Titanic",
        fecha: new Date(),
        precio: 300.99,
        poster: ""
      }];
  }
}
