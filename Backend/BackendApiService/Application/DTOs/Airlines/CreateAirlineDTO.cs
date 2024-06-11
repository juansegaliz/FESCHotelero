using Domain.Validations;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.DTOs.Airlines
{
    public class CreateAirlineDTO
    {
        [Required]
        public string Name { get; set; } = null!;

        public string? Description { get; set; }

        public string? Email { get; set; }

        [PhoneValidation]
        public string? Phone { get; set; }

        public string? Address { get; set; }

        [Required]
        public int CountryId { get; set; }

        [Required]
        public int CityId { get; set; }

        public string? Zip { get; set; }
    }
}
