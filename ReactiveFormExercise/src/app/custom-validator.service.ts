import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorService {

  constructor() { }

  passwordValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value) {
      const pattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,}$/;
      let validPassword = pattern.test(control.value);
      return validPassword ? null : { 'passwordValidation': false };
    } else {
      return { 'passwordValidation': false }
    }
  }
}

