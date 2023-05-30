import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {

  @Input() peliculas: { titulo: string; fecha: Date; precio: number; poster: string}[] | undefined;

  ngOnInit(): void {

  }

  remover(indice: number): void {
    this.peliculas?.splice(indice, 1);
  }

}
