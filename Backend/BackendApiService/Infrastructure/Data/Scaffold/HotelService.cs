using System;
using System.Collections.Generic;

namespace Infrastructure.Data.Scaffold;

public partial class HotelService
{
    public int HotelServiceId { get; set; }

    public string Name { get; set; } = null!;

    public decimal Value { get; set; }

    public bool ApplyAdditionalNight { get; set; }

    public int Periodicity { get; set; }

    public int FromNightNumber { get; set; }

    public int FromAdditionalNightNumber { get; set; }

    public bool MandatoryPerPerson { get; set; }

    public DateTime CreatedAt { get; set; }

    public DateTime UpdatedAt { get; set; }

    public int CreatedByUserId { get; set; }

    public int UpdatedByUserId { get; set; }

    public int StatusId { get; set; }

    public int HotelId { get; set; }

    public virtual ICollection<HotelPlanService> HotelPlanServices { get; set; } = new List<HotelPlanService>();
}
