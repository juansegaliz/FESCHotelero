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
    public class CountryProfile : Profile
    {
        public CountryProfile()
        {
            CreateMap<Country, CountryDTO>();
            CreateMap<CreateCountryDTO, Country>()
                .ForMember(dest => dest.CountryId, opt => opt.Ignore())
                .ForMember(dest => dest.CreatedAt, opt => opt.MapFrom(_ => DateTime.Now))
                .ForMember(dest => dest.UpdatedAt, opt => opt.MapFrom(_ => DateTime.Now))
                .ForMember(dest => dest.CreatedByUserId, opt => opt.MapFrom(_ => 0))
                .ForMember(dest => dest.UpdatedByUserId, opt => opt.MapFrom(_ => 0))
                .ForMember(dest => dest.StatusId, opt => opt.MapFrom(_ => 0));

            CreateMap<UpdateCountryDTO, Country>()
                .ForMember(dest => dest.CountryId, opt => opt.Ignore())
                .ForMember(dest => dest.CreatedAt, opt => opt.MapFrom(_ => DateTime.Now))
                .ForMember(dest => dest.UpdatedAt, opt => opt.MapFrom(_ => DateTime.Now))
                .ForMember(dest => dest.CreatedByUserId, opt => opt.MapFrom(_ => 0))
                .ForMember(dest => dest.UpdatedByUserId, opt => opt.MapFrom(_ => 0))
                .ForMember(dest => dest.StatusId, opt => opt.MapFrom(_ => 0));

        }
    }
}
