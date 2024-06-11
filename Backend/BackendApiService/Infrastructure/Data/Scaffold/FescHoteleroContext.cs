using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data.Scaffold;

public partial class FescHoteleroContext : DbContext
{
    public FescHoteleroContext()
    {
    }

    public FescHoteleroContext(DbContextOptions<FescHoteleroContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Agency> Agencies { get; set; }

    public virtual DbSet<Airline> Airlines { get; set; }

    public virtual DbSet<Booking> Bookings { get; set; }

    public virtual DbSet<BookingGroup> BookingGroups { get; set; }

    public virtual DbSet<CancellationReason> CancellationReasons { get; set; }

    public virtual DbSet<City> Cities { get; set; }

    public virtual DbSet<Company> Companies { get; set; }

    public virtual DbSet<Country> Countries { get; set; }

    public virtual DbSet<Guest> Guests { get; set; }

    public virtual DbSet<Hotel> Hotels { get; set; }

    public virtual DbSet<HotelEvent> HotelEvents { get; set; }

    public virtual DbSet<HotelPlan> HotelPlans { get; set; }

    public virtual DbSet<HotelPlanService> HotelPlanServices { get; set; }

    public virtual DbSet<HotelService> HotelServices { get; set; }

    public virtual DbSet<State> States { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseMySQL("server=localhost;database=fesc_hotelero;user=root;password=Root-Password-1234-$;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Agency>(entity =>
        {
            entity.HasKey(e => e.AgencyId).HasName("PRIMARY");

            entity.Property(e => e.Address).HasMaxLength(250);
            entity.Property(e => e.CreatedAt).HasColumnType("datetime");
            entity.Property(e => e.Description).HasColumnType("text");
            entity.Property(e => e.Email).HasMaxLength(100);
            entity.Property(e => e.Name).HasMaxLength(250);
            entity.Property(e => e.Phone).HasMaxLength(20);
            entity.Property(e => e.UpdatedAt).HasColumnType("datetime");
            entity.Property(e => e.Zip)
                .HasMaxLength(20)
                .HasColumnName("ZIP");
        });

        modelBuilder.Entity<Airline>(entity =>
        {
            entity.HasKey(e => e.AirlineId).HasName("PRIMARY");

            entity.Property(e => e.Address).HasMaxLength(250);
            entity.Property(e => e.CreatedAt).HasColumnType("datetime");
            entity.Property(e => e.Description).HasColumnType("text");
            entity.Property(e => e.Email).HasMaxLength(100);
            entity.Property(e => e.Name).HasMaxLength(250);
            entity.Property(e => e.Phone).HasMaxLength(20);
            entity.Property(e => e.UpdatedAt).HasColumnType("datetime");
            entity.Property(e => e.Zip)
                .HasMaxLength(20)
                .HasColumnName("ZIP");
        });

        modelBuilder.Entity<Booking>(entity =>
        {
            entity.HasKey(e => e.BookingId).HasName("PRIMARY");

            entity.Property(e => e.BookingId).HasColumnName("bookingId");
            entity.Property(e => e.BookingType)
                .HasColumnType("enum('individual','group')")
                .HasColumnName("bookingType");
            entity.Property(e => e.CreatedAt)
                .HasColumnType("datetime")
                .HasColumnName("createdAt");
            entity.Property(e => e.CreatedByUserId).HasColumnName("createdByUserId");
            entity.Property(e => e.HotelId).HasColumnName("hotelId");
            entity.Property(e => e.StatusId).HasColumnName("statusId");
            entity.Property(e => e.UpdatedAt)
                .HasColumnType("datetime")
                .HasColumnName("updatedAt");
            entity.Property(e => e.UpdatedByUserId).HasColumnName("updatedByUserId");
        });

        modelBuilder.Entity<BookingGroup>(entity =>
        {
            entity.HasKey(e => e.BookingId).HasName("PRIMARY");

            entity.Property(e => e.BookingId).HasColumnName("bookingId");
            entity.Property(e => e.AccountingAccountId).HasColumnName("accountingAccountId");
            entity.Property(e => e.AccountingAccountName)
                .HasMaxLength(250)
                .HasColumnName("accountingAccountName");
            entity.Property(e => e.AgencyId).HasColumnName("agencyId");
            entity.Property(e => e.AgencyName)
                .HasMaxLength(250)
                .HasColumnName("agencyName");
            entity.Property(e => e.AirlineId).HasColumnName("airlineId");
            entity.Property(e => e.AirlineName)
                .HasMaxLength(250)
                .HasColumnName("airlineName");
            entity.Property(e => e.Allot).HasColumnName("allot");
            entity.Property(e => e.ArrivalDate)
                .HasColumnType("datetime")
                .HasColumnName("arrivalDate");
            entity.Property(e => e.CityId).HasColumnName("cityId");
            entity.Property(e => e.CityName)
                .HasMaxLength(250)
                .HasColumnName("cityName");
            entity.Property(e => e.Commissionable).HasColumnName("commissionable");
            entity.Property(e => e.CompanyAddress)
                .HasMaxLength(250)
                .HasColumnName("companyAddress");
            entity.Property(e => e.CompanyEmail)
                .HasMaxLength(250)
                .HasColumnName("companyEmail");
            entity.Property(e => e.CompanyId).HasColumnName("companyId");
            entity.Property(e => e.CompanyName)
                .HasMaxLength(250)
                .HasColumnName("companyName");
            entity.Property(e => e.CompanyPhone)
                .HasMaxLength(15)
                .HasColumnName("companyPhone");
            entity.Property(e => e.Complex)
                .HasMaxLength(250)
                .HasColumnName("complex");
            entity.Property(e => e.ContactMethodId).HasColumnName("contactMethodId");
            entity.Property(e => e.ContactMethodName)
                .HasMaxLength(100)
                .HasColumnName("contactMethodName");
            entity.Property(e => e.ContactName)
                .HasMaxLength(250)
                .HasColumnName("contactName");
            entity.Property(e => e.ContactWorkPosition)
                .HasMaxLength(250)
                .HasColumnName("contactWorkPosition");
            entity.Property(e => e.CountryId).HasColumnName("countryId");
            entity.Property(e => e.CountryName)
                .HasMaxLength(250)
                .HasColumnName("countryName");
            entity.Property(e => e.CreatedAt)
                .HasColumnType("datetime")
                .HasColumnName("createdAt");
            entity.Property(e => e.CreatedByUserId).HasColumnName("createdByUserId");
            entity.Property(e => e.CurrencyId).HasColumnName("currencyId");
            entity.Property(e => e.CurrencyName)
                .HasMaxLength(250)
                .HasColumnName("currencyName");
            entity.Property(e => e.DepartureDate)
                .HasColumnType("datetime")
                .HasColumnName("departureDate");
            entity.Property(e => e.DepositId).HasColumnName("depositId");
            entity.Property(e => e.DepositName)
                .HasMaxLength(100)
                .HasColumnName("depositName");
            entity.Property(e => e.Discount).HasColumnName("discount");
            entity.Property(e => e.Grp).HasColumnName("grp");
            entity.Property(e => e.GuaranteeDate)
                .HasColumnType("date")
                .HasColumnName("guaranteeDate");
            entity.Property(e => e.GuaranteeId).HasColumnName("guaranteeId");
            entity.Property(e => e.GuaranteeName)
                .HasMaxLength(150)
                .HasColumnName("guaranteeName");
            entity.Property(e => e.HideRate).HasColumnName("hideRate");
            entity.Property(e => e.HotelId).HasColumnName("hotelId");
            entity.Property(e => e.HotelPlanId).HasColumnName("hotelPlanId");
            entity.Property(e => e.HotelPlanName)
                .HasMaxLength(250)
                .HasColumnName("hotelPlanName");
            entity.Property(e => e.MasterFolio).HasColumnName("masterFolio");
            entity.Property(e => e.NumberOfNights).HasColumnName("numberOfNights");
            entity.Property(e => e.PackageDiscount)
                .HasPrecision(10)
                .HasColumnName("packageDiscount");
            entity.Property(e => e.QuotationDate)
                .HasColumnType("datetime")
                .HasColumnName("quotationDate");
            entity.Property(e => e.RateId).HasColumnName("rateId");
            entity.Property(e => e.RateName)
                .HasMaxLength(250)
                .HasColumnName("rateName");
            entity.Property(e => e.RateToCharge)
                .HasPrecision(10)
                .HasColumnName("rateToCharge");
            entity.Property(e => e.ReservationStatusId).HasColumnName("reservationStatusId");
            entity.Property(e => e.ReservationStatusName)
                .HasMaxLength(100)
                .HasColumnName("reservationStatusName");
            entity.Property(e => e.Segment01)
                .HasMaxLength(250)
                .HasColumnName("segment01");
            entity.Property(e => e.Segment02)
                .HasMaxLength(250)
                .HasColumnName("segment02");
            entity.Property(e => e.Segment03)
                .HasMaxLength(250)
                .HasColumnName("segment03");
            entity.Property(e => e.StateId).HasColumnName("stateId");
            entity.Property(e => e.StateName)
                .HasMaxLength(250)
                .HasColumnName("stateName");
            entity.Property(e => e.StatusId).HasColumnName("statusId");
            entity.Property(e => e.Transport)
                .HasMaxLength(250)
                .HasColumnName("transport");
            entity.Property(e => e.TravelPurposeId).HasColumnName("travelPurposeId");
            entity.Property(e => e.TravelPurposeName)
                .HasMaxLength(100)
                .HasColumnName("travelPurposeName");
            entity.Property(e => e.UpdatedAt)
                .HasColumnType("datetime")
                .HasColumnName("updatedAt");
            entity.Property(e => e.UpdatedByUserId).HasColumnName("updatedByUserId");
        });

        modelBuilder.Entity<CancellationReason>(entity =>
        {
            entity.HasKey(e => e.CancellationId).HasName("PRIMARY");

            entity.Property(e => e.CreatedAt).HasColumnType("datetime");
            entity.Property(e => e.Description).HasColumnType("text");
            entity.Property(e => e.Name).HasMaxLength(100);
            entity.Property(e => e.UpdatedAt).HasColumnType("datetime");
        });

        modelBuilder.Entity<City>(entity =>
        {
            entity.HasKey(e => e.CityId).HasName("PRIMARY");

            entity.Property(e => e.CreatedAt).HasColumnType("datetime");
            entity.Property(e => e.Name).HasMaxLength(100);
            entity.Property(e => e.UpdatedAt).HasColumnType("datetime");
        });

        modelBuilder.Entity<Company>(entity =>
        {
            entity.HasKey(e => e.CompanyId).HasName("PRIMARY");

            entity.Property(e => e.Address).HasMaxLength(250);
            entity.Property(e => e.CreatedAt).HasColumnType("datetime");
            entity.Property(e => e.Email).HasMaxLength(100);
            entity.Property(e => e.Name).HasMaxLength(250);
            entity.Property(e => e.Phone).HasMaxLength(20);
            entity.Property(e => e.UpdatedAt).HasColumnType("datetime");
        });

        modelBuilder.Entity<Country>(entity =>
        {
            entity.HasKey(e => e.CountryId).HasName("PRIMARY");

            entity.Property(e => e.Code)
                .HasMaxLength(3)
                .IsFixedLength();
            entity.Property(e => e.CreatedAt).HasColumnType("datetime");
            entity.Property(e => e.Name).HasMaxLength(100);
            entity.Property(e => e.PriorityOrder).HasDefaultValueSql("'0'");
            entity.Property(e => e.UpdatedAt).HasColumnType("datetime");
        });

        modelBuilder.Entity<Guest>(entity =>
        {
            entity.HasKey(e => e.GuestId).HasName("PRIMARY");

            entity.HasIndex(e => e.Email, "Email_UNIQUE").IsUnique();

            entity.Property(e => e.Address).HasMaxLength(200);
            entity.Property(e => e.CreatedAt).HasColumnType("datetime");
            entity.Property(e => e.Email).HasMaxLength(100);
            entity.Property(e => e.Lastname).HasMaxLength(100);
            entity.Property(e => e.Name).HasMaxLength(100);
            entity.Property(e => e.Phone).HasMaxLength(20);
            entity.Property(e => e.UpdatedAt).HasColumnType("datetime");
        });

        modelBuilder.Entity<Hotel>(entity =>
        {
            entity.HasKey(e => e.HotelId).HasName("PRIMARY");

            entity.Property(e => e.Address).HasMaxLength(250);
            entity.Property(e => e.CreatedAt).HasColumnType("datetime");
            entity.Property(e => e.Email).HasMaxLength(100);
            entity.Property(e => e.Name).HasMaxLength(250);
            entity.Property(e => e.Phone).HasMaxLength(20);
            entity.Property(e => e.UpdatedAt).HasColumnType("datetime");
        });

        modelBuilder.Entity<HotelEvent>(entity =>
        {
            entity.HasKey(e => e.HotelEventId).HasName("PRIMARY");

            entity.Property(e => e.CreatedAt).HasColumnType("datetime");
            entity.Property(e => e.Description).HasColumnType("text");
            entity.Property(e => e.EndDate).HasColumnType("date");
            entity.Property(e => e.EndTime).HasColumnType("time");
            entity.Property(e => e.Location).HasMaxLength(100);
            entity.Property(e => e.Name).HasMaxLength(150);
            entity.Property(e => e.Price).HasPrecision(10);
            entity.Property(e => e.StartDate).HasColumnType("date");
            entity.Property(e => e.StartTime).HasColumnType("time");
            entity.Property(e => e.UpdatedAt).HasColumnType("datetime");
        });

        modelBuilder.Entity<HotelPlan>(entity =>
        {
            entity.HasKey(e => e.HotelPlanId).HasName("PRIMARY");

            entity.Property(e => e.CreatedAt).HasColumnType("datetime");
            entity.Property(e => e.Name).HasMaxLength(250);
            entity.Property(e => e.UpdatedAt).HasColumnType("datetime");
        });

        modelBuilder.Entity<HotelPlanService>(entity =>
        {
            entity.HasKey(e => e.HotelPlanServiceId).HasName("PRIMARY");

            entity.HasIndex(e => e.HotelPlanId, "HotelPlanId");

            entity.HasIndex(e => e.HotelServiceId, "HotelServiceId");

            entity.Property(e => e.CreatedAt).HasColumnType("datetime");
            entity.Property(e => e.UpdatedAt).HasColumnType("datetime");

            entity.HasOne(d => d.HotelPlan).WithMany(p => p.HotelPlanServices)
                .HasForeignKey(d => d.HotelPlanId)
                .HasConstraintName("HotelPlanServices_ibfk_1");

            entity.HasOne(d => d.HotelService).WithMany(p => p.HotelPlanServices)
                .HasForeignKey(d => d.HotelServiceId)
                .HasConstraintName("HotelPlanServices_ibfk_2");
        });

        modelBuilder.Entity<HotelService>(entity =>
        {
            entity.HasKey(e => e.HotelServiceId).HasName("PRIMARY");

            entity.Property(e => e.CreatedAt).HasColumnType("datetime");
            entity.Property(e => e.Name).HasMaxLength(250);
            entity.Property(e => e.UpdatedAt).HasColumnType("datetime");
            entity.Property(e => e.Value).HasPrecision(10);
        });

        modelBuilder.Entity<State>(entity =>
        {
            entity.HasKey(e => e.StateId).HasName("PRIMARY");

            entity.Property(e => e.CreatedAt).HasColumnType("datetime");
            entity.Property(e => e.Name).HasMaxLength(100);
            entity.Property(e => e.UpdatedAt).HasColumnType("datetime");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.UserId).HasName("PRIMARY");

            entity.Property(e => e.CreatedAt).HasColumnType("datetime");
            entity.Property(e => e.DepartmentId).HasDefaultValueSql("'0'");
            entity.Property(e => e.Email).HasMaxLength(150);
            entity.Property(e => e.FullName).HasMaxLength(200);
            entity.Property(e => e.Password).HasColumnType("text");
            entity.Property(e => e.Phone).HasMaxLength(20);
            entity.Property(e => e.RoleId).HasDefaultValueSql("'0'");
            entity.Property(e => e.UpdatedAt).HasColumnType("datetime");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
