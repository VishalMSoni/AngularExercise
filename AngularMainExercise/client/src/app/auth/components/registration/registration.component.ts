import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  registrationForm: FormGroup;
  submitted = false;
  data = null;

  ngOnInit() {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required]],
      // password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[#$^+=!*()@%&]).{8,10}$')]],
      // confpassword: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[#$^+=!*()@%&]).{8,10}$')]],
      mobile: ['', [Validators.required, Validators.pattern('^[6789]{1}[0-9]{9}$')]]
    }, { validator: MyAwesomeRangeValidator });
  }

  get control() {
    return this.registrationForm.controls;
  }

  onSubmit() {
    if (!(this.registrationForm.dirty && this.registrationForm.valid)) {
      return;
    } else {
      this.submitted = true;
      this.data = this.registrationForm.value;
    }
  }

}

const MyAwesomeRangeValidator: ValidatorFn = (fg: FormGroup) => {
  const password = fg.get('password');
  const regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,25}$/;
  if (password.value.length < 8) {
    password.setErrors({ notValid: 'Password must be atleast 8 character long.' });
  } else if (!regexp.test(password.value)) {
    password.setErrors({ notValid: 'Password is to weak.' });
  }
  // const confpassword = fg.get('confpassword');
  // if (password.value !== null && confpassword.value !== null && password.value !== confpassword.value) {
  //   confpassword.setErrors({ notEqual: true });
  // }
  return null;
};
