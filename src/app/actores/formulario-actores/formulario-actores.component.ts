import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actorCreacionDTO, actorDTO } from '../actores';

@Component({
  selector: 'app-formulario-actores',
  templateUrl: './formulario-actores.component.html',
  styleUrls: ['./formulario-actores.component.css']
})
export class FormularioActoresComponent implements OnInit {
  form!: FormGroup;
  @Input() modelo?: actorDTO;
  @Output() submit: EventEmitter<actorCreacionDTO> = new EventEmitter<actorCreacionDTO>();
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', { validators: [Validators.required] }],
      fechaNacimiento: '',
      foto: ''
    });
    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }

  onSubmit() {
    this.submit.emit(this.form.value);
  }

  archivoSeleccionado(file: File) {
    this.form.get('foto')?.setValue(file);
  }
}


