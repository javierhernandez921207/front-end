import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cineCreacionDTO } from '../cine';
import { CoordandaDTO } from 'src/app/utiles/mapa/coordenada';

@Component({
  selector: 'app-formulario-cine',
  templateUrl: './formulario-cine.component.html',
  styleUrls: ['./formulario-cine.component.css']
})
export class FormularioCineComponent implements OnInit {
  form!: FormGroup
  @Input() modelo?: cineCreacionDTO;
  @Output() submit: EventEmitter<cineCreacionDTO> = new EventEmitter<cineCreacionDTO>();
  coordenadaInicial?: CoordandaDTO;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', { validators: [Validators.required] }],
      latitud: ['',{ validators: [Validators.required] }],
      longitud: ['',{ validators: [Validators.required] }]
    });
    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
      this.coordenadaInicial = {latitud: this.modelo.latitud, longitud: this.modelo.longitud};
    }
  }

  OnSubmit() {
    this.submit.emit(this.form.value);
  }

  coordenadaSeleccionda(coordenada: CoordandaDTO) {
    this.form.patchValue(coordenada);
  }

}
