using Domain.Validations;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.DTOs.Bookings
{
    public class CreateBookingDTO
    {
        [Required]

        public string BookingType { get; set; } = null!;
    }
}
