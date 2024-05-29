using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Application.DTOs.Agencies;
using Application.DTOs.Response;

namespace Application.Interfaces
{
    public interface IAgencyService
    {
        Task<ResponseDTO<AgencyDTO>> CreateAsync(CreateAgencyDTO request);
        Task<ResponseDTO<bool>> DeleteAsync(int id);
        Task<ResponseDTO<List<AgencyDTO>>> GetAllAsync();
        Task<ResponseDTO<AgencyDTO>> GetAsync(int id);
        Task<ResponseDTO<bool>> UpdateAsync(int id, UpdateAgencyDTO request);
    }
}
