using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.DTOs.BookingGroups
{
    public class BookingGroupDTO
    {
        public int BookingId { get; set; }

        public int HotelPlanId { get; set; }

        public string HotelPlanName { get; set; } = null!;

        public int CompanyId { get; set; }

        public string CompanyName { get; set; } = null!;

        public string CompanyAddress { get; set; } = null!;

        public string CompanyPhone { get; set; } = null!;

        public string CompanyEmail { get; set; } = null!;

        public string ContactName { get; set; } = null!;

        public string ContactWorkPosition { get; set; } = null!;

        public int ContactMethodId { get; set; }

        public string ContactMethodName { get; set; } = null!;

        public string Segment01 { get; set; } = null!;

        public string Segment02 { get; set; } = null!;

        public string Segment03 { get; set; } = null!;

        public string Transport { get; set; } = null!;

        public int AirlineId { get; set; }

        public string AirlineName { get; set; } = null!;

        public string Flight { get; set; } = null!;

        public int CountryId { get; set; }

        public string CountryName { get; set; } = null!;

        public int StateId { get; set; }

        public string StateName { get; set; } = null!;

        public int CityId { get; set; }

        public string CityName { get; set; } = null!;

        public bool Allot { get; set; }

        public bool Grp { get; set; }

        public DateTime QuotationDate { get; set; }

        public DateTime ArrivalDate { get; set; }

        public DateTime DepartureDate { get; set; }

        public int NumberOfNights { get; set; }

        public DateTime GuaranteeDate { get; set; }

        public int GuaranteeId { get; set; }

        public string GuaranteeName { get; set; } = null!;

        public int DepositId { get; set; }

        public string DepositName { get; set; } = null!;

        public int TravelPurposeId { get; set; }

        public string TravelPurposeName { get; set; } = null!;

        public int AgencyId { get; set; }

        public string AgencyName { get; set; } = null!;

        public bool Commissionable { get; set; }

        public int RateId { get; set; }

        public string RateName { get; set; } = null!;

        public int CurrencyId { get; set; }

        public string CurrencyName { get; set; } = null!;

        public int ReservationStatusId { get; set; }

        public string ReservationStatusName { get; set; } = null!;

        public int MasterFolio { get; set; }

        public bool HideRate { get; set; }

        public bool Discount { get; set; }

        public decimal RateToCharge { get; set; }

        public decimal PackageDiscount { get; set; }

        public int AccountingAccountId { get; set; }

        public string AccountingAccountName { get; set; } = null!;

        public string Complex { get; set; } = null!;

        public DateTime CreatedAt { get; set; }

        public DateTime UpdatedAt { get; set; }

        public int CreatedByUserId { get; set; }

        public int UpdatedByUserId { get; set; }

        public int StatusId { get; set; }

        public int HotelId { get; set; }
    }
}
