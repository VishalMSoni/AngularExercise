import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidatorService } from '../custom-validator.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.sass']
})
export class ReactiveFormComponent implements OnInit {

  userForm: FormGroup;
  disableSubmit = true;

  constructor(private fb: FormBuilder, private customValidatorService: CustomValidatorService) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [this.customValidatorService.passwordValidator]],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^[0-9]\d{9}$/)]]
    });
  }

  onSubmit() {
    console.log(this.userForm.value);
  }
}
