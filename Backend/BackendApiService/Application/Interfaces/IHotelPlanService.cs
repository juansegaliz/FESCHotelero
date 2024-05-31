using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Application.DTOs.HotelPlans;
using Application.DTOs.Response;

namespace Application.Interfaces
{
    public interface IHotelPlanService
    {
        Task<ResponseDTO<HotelPlanDTO>> CreateAsync(CreateHotelPlanDTO request);
        Task<ResponseDTO<bool>> DeleteAsync(int id);
        Task<ResponseDTO<List<HotelPlanDTO>>> GetAllAsync();
        Task<ResponseDTO<HotelPlanDTO>> GetAsync(int id);
        Task<ResponseDTO<bool>> UpdateAsync(int id, UpdateHotelPlanDTO request);
    }
}
