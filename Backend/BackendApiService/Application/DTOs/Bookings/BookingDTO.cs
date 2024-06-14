using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.DTOs.Bookings
{
    public class BookingDTO
    {
        public int BookingId { get; set; }

        public string BookingType { get; set; } = null!;

        public DateTime CreatedAt { get; set; }

        public DateTime UpdatedAt { get; set; }

        public int CreatedByUserId { get; set; }

        public int UpdatedByUserId { get; set; }

        public int StatusId { get; set; }

        public int HotelId { get; set; }
    }
}
