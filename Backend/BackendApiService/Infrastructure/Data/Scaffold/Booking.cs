using System;
using System.Collections.Generic;

namespace Infrastructure.Data.Scaffold;

public partial class Booking
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
