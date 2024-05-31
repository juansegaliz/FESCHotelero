using System;
using System.Collections.Generic;

namespace Infrastructure.Data.Scaffold;

public partial class HotelPlan
{
    public int HotelPlanId { get; set; }

    public string Name { get; set; } = null!;

    public DateTime CreatedAt { get; set; }

    public DateTime UpdatedAt { get; set; }

    public int CreatedByUserId { get; set; }

    public int UpdatedByUserId { get; set; }

    public int StatusId { get; set; }

    public int HotelId { get; set; }

    public virtual ICollection<HotelPlanService> HotelPlanServices { get; set; } = new List<HotelPlanService>();
}
