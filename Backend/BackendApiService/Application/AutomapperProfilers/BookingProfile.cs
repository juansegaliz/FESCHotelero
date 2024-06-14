using Application.DTOs.Agencies;
using Application.DTOs.Airlines;
using Application.DTOs.Bookings;
using Application.DTOs.Countries;
using AutoMapper;
using Infrastructure.Data.Scaffold;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.AutomapperProfilers
{
    public class BookingProfile : Profile
    {
        public BookingProfile()
        {
            CreateMap<Booking, BookingDTO>();
            CreateMap<CreateBookingDTO, Booking>()
                .ForMember(dest => dest.BookingId, opt => opt.Ignore())
                .ForMember(dest => dest.CreatedAt, opt => opt.MapFrom(_ => DateTime.Now))
                .ForMember(dest => dest.UpdatedAt, opt => opt.MapFrom(_ => DateTime.Now))
                .ForMember(dest => dest.CreatedByUserId, opt => opt.MapFrom(_ => 0))
                .ForMember(dest => dest.UpdatedByUserId, opt => opt.MapFrom(_ => 0))
                .ForMember(dest => dest.StatusId, opt => opt.MapFrom(_ => 0));

            CreateMap<UpdateBookingDTO, Booking>()
                .ForMember(dest => dest.BookingId, opt => opt.Ignore())
                .ForMember(dest => dest.CreatedAt, opt => opt.MapFrom(_ => DateTime.Now))
                .ForMember(dest => dest.UpdatedAt, opt => opt.MapFrom(_ => DateTime.Now))
                .ForMember(dest => dest.CreatedByUserId, opt => opt.MapFrom(_ => 0))
                .ForMember(dest => dest.UpdatedByUserId, opt => opt.MapFrom(_ => 0))
                .ForMember(dest => dest.StatusId, opt => opt.MapFrom(_ => 0));

        }
    }
}
