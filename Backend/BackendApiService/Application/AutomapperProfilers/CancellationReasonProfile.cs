using Application.DTOs.Agencies;
using Application.DTOs.CancellationReasons;
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
    public class CancellationReasonProfile : Profile
    {
        public CancellationReasonProfile()
        {
            CreateMap<CancellationReason, CancellationReasonDTO>();
            CreateMap<CreateCancellationReasonDTO, CancellationReason>()
                .ForMember(dest => dest.CancellationId, opt => opt.Ignore())
                .ForMember(dest => dest.CreatedAt, opt => opt.MapFrom(_ => DateTime.Now))
                .ForMember(dest => dest.UpdatedAt, opt => opt.MapFrom(_ => DateTime.Now))
                .ForMember(dest => dest.CreatedByUserId, opt => opt.MapFrom(_ => 0))
                .ForMember(dest => dest.UpdatedByUserId, opt => opt.MapFrom(_ => 0))
                .ForMember(dest => dest.StatusId, opt => opt.MapFrom(_ => 0));

            CreateMap<UpdateCancellationReasonDTO, CancellationReason>()
                .ForMember(dest => dest.CancellationId, opt => opt.Ignore())
                .ForMember(dest => dest.CreatedAt, opt => opt.MapFrom(_ => DateTime.Now))
                .ForMember(dest => dest.UpdatedAt, opt => opt.MapFrom(_ => DateTime.Now))
                .ForMember(dest => dest.CreatedByUserId, opt => opt.MapFrom(_ => 0))
                .ForMember(dest => dest.UpdatedByUserId, opt => opt.MapFrom(_ => 0))
                .ForMember(dest => dest.StatusId, opt => opt.MapFrom(_ => 0));

        }
    }
}
