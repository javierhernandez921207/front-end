import { Component, OnInit } from '@angular/core';
import { cineCreacionDTO } from '../cine';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css']
})
export class EditarCineComponent implements OnInit {
  modelo!: cineCreacionDTO
  constructor() { }
  ngOnInit(): void {
    this.modelo = { nombre: "America", latitud: 22.49037510952713, longitud: -79.55474853515626 };
  }
}
