using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Validations
{
    [AttributeUsage(AttributeTargets.Property | AttributeTargets.Field | AttributeTargets.Parameter, AllowMultiple = false)]
    public class PhoneValidation : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            if (value != null)
            {
                string phone = value.ToString();
                // Aquí puedes implementar tu lógica de validación para números de teléfono internacionales
                if (!IsPhoneValid(phone))
                {
                    return new ValidationResult("Phone numbre is not valid.");
                }
            }

            return ValidationResult.Success;
        }

        private bool IsPhoneValid(string phone)
        {
            // Aquí puedes implementar la lógica para validar el número de teléfono, como usar expresiones regulares
            return System.Text.RegularExpressions.Regex.IsMatch(phone, @"^\+(?:[0-9]●?){6,14}[0-9]$");
        }
    }
}
