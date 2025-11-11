import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-formulaire',
  templateUrl: './formulaire.html',
  styleUrl: './formulaire.css',
  imports: [ReactiveFormsModule]
})
export class Formulaire {
  @Output() formSubmitted = new EventEmitter<{nom: string, prenom: string, ville: string}>();
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      ville: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.formSubmitted.emit(this.form.value);
      this.form.reset();
    }
  }
}
