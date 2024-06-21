import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function validatePhoneNumber(controlName: string): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const control = formGroup.get(controlName);
  
      if (!control) {
        return null;
      }
  
      const phone = control.value;
      let isValid = /^\+\d{12,}$/.test(phone);
  
      if (!isValid) {
        control.setErrors({ ...control.errors, invalidPhone: true });
        return { invalidPhone: true };
      } else {
        if (control.errors) {
          const { invalidPhone, ...otherErrors } = control.errors;
          control.setErrors(Object.keys(otherErrors).length ? otherErrors : null);
        }
        return null;
      }
    };
  }