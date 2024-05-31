using System;
using System.Collections.Generic;

namespace Infrastructure.Data.Scaffold;

public partial class HotelPlanService
{
    public int HotelPlanServiceId { get; set; }

    public int HotelPlanId { get; set; }

    public int HotelServiceId { get; set; }

    public DateTime CreatedAt { get; set; }

    public DateTime UpdatedAt { get; set; }

    public int CreatedByUserId { get; set; }

    public int UpdatedByUserId { get; set; }

    public int StatusId { get; set; }

    public virtual HotelPlan HotelPlan { get; set; } = null!;

    public virtual HotelService HotelService { get; set; } = null!;
}
