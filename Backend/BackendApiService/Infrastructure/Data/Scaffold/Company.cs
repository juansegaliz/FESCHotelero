using System;
using System.Collections.Generic;

namespace Infrastructure.Data.Scaffold;

public partial class Company
{
    public int CompanyId { get; set; }

    public string Name { get; set; } = null!;

    public string Address { get; set; } = null!;

    public int CityId { get; set; }

    public int CountryId { get; set; }

    public string Phone { get; set; } = null!;

    public string Email { get; set; } = null!;

    public DateTime CreatedAt { get; set; }

    public DateTime UpdatedAt { get; set; }

    public int CreatedByUserId { get; set; }

    public int UpdatedByUserId { get; set; }

    public int StatusId { get; set; }

    public int HotelId { get; set; }
}
