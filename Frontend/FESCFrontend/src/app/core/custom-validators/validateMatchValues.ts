import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function validateMatchValues(controlName: string, matchControlName: string) : ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
        const control = formGroup.get(controlName);
        const matchControl = formGroup.get(matchControlName);

        if (!control || !matchControl) {
            return null;
        }

        if (control.value !== matchControl.value) {
            matchControl.setErrors({ ...matchControl.errors, mismatch: true });
            return { mismatch: true };
        } else {
            if (matchControl.errors) {
                const { mismatch, ...otherErrors } = matchControl.errors;
                matchControl.setErrors(Object.keys(otherErrors).length ? otherErrors : null);
            }
            return null;
        }
    };
}