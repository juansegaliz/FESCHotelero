import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { isBefore } from 'date-fns';

export function validateDateRange(controlName: string, minDateControlName: string) : ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
        const currentDateControl = formGroup.get(controlName);
        const minDateControl = formGroup.get(minDateControlName);

        if (!currentDateControl || !minDateControl) {
            return null;
        }

        const currentDateValue = new Date(currentDateControl.value);
        const minDateValue = new Date(minDateControl.value);
                
        if (isBefore(currentDateValue, minDateValue)) {
            currentDateControl.setErrors({ dateRange: true });
            return { dateRange: true };
        } else {
            currentDateControl.setErrors(null);
            return null;
        }
    };
}