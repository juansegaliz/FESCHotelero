using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Application.DTOs.Agencies;
using Application.DTOs.Airlines;
using Application.DTOs.Response;

namespace Application.Interfaces
{
    public interface IAirlineService
    {
        Task<ResponseDTO<AirlineDTO>> CreateAsync(CreateAirlineDTO request);
        Task<ResponseDTO<bool>> DeleteAsync(int id);
        Task<ResponseDTO<List<AirlineDTO>>> GetAllAsync();
        Task<ResponseDTO<AirlineDTO>> GetAsync(int id);
        Task<ResponseDTO<bool>> UpdateAsync(int id, UpdateAirlineDTO request);
    }
}
