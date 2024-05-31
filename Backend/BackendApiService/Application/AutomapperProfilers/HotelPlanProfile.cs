using Application.DTOs.Countries;
using Application.DTOs.HotelPlans;
using AutoMapper;
using Infrastructure.Data.Scaffold;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.AutomapperProfilers
{
    public class HotelPlanProfile : Profile
    {
        public HotelPlanProfile()
        {
            CreateMap<HotelPlan, HotelPlanDTO>();
            CreateMap<CreateHotelPlanDTO, HotelPlan>()
                .ForMember(dest => dest.HotelPlanId, opt => opt.Ignore())
                .ForMember(dest => dest.CreatedAt, opt => opt.MapFrom(_ => DateTime.Now))
                .ForMember(dest => dest.UpdatedAt, opt => opt.MapFrom(_ => DateTime.Now))
                .ForMember(dest => dest.CreatedByUserId, opt => opt.MapFrom(_ => 0))
                .ForMember(dest => dest.UpdatedByUserId, opt => opt.MapFrom(_ => 0))
                .ForMember(dest => dest.StatusId, opt => opt.MapFrom(_ => 0));

        CreateMap<UpdateHotelPlanDTO, HotelPlan>()
                .ForMember(dest => dest.HotelPlanId, opt => opt.Ignore())
                .ForMember(dest => dest.CreatedAt, opt => opt.MapFrom(_ => DateTime.Now))
                .ForMember(dest => dest.UpdatedAt, opt => opt.MapFrom(_ => DateTime.Now))
                .ForMember(dest => dest.CreatedByUserId, opt => opt.MapFrom(_ => 0))
                .ForMember(dest => dest.UpdatedByUserId, opt => opt.MapFrom(_ => 0))
                .ForMember(dest => dest.StatusId, opt => opt.MapFrom(_ => 0));

        }
    }
}
