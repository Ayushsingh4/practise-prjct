import { ValidationErrors , AbstractControl , ValidatorFn } from "@angular/forms";


export function ageValidator(minAge: number, maxAge: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
  
      // Check if value is a number and is within the range
      if (isNaN(value) || value < minAge || value > maxAge) {
        // Return error if validation fails
        return { ageInvalid: { valid: false, minAge, maxAge } };
      }
  
      // Return null if validation passes
      return null;
    };
  }
  