import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
})
export class FormComponent implements OnInit {
  form: FormGroup;
  submitted: boolean;
  formValue;
  /**
   * assign the value of variables
   */
  constructor() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
    this.submitted = false;
    this.formValue = {
      name: '',
      age: '',
      email: '',
    };
  }

  ngOnInit(): void {}
  /**
   * access inputs from the form
   */
  get formControl() {
    return this.form.controls;
  }

  /**
   * set the value of the form to variable
   */
  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.formValue = {
      name: this.form.value.name,
      age: this.form.value.age,
      email: this.form.value.email,
    };
    this.submitted = true;
  }
}
