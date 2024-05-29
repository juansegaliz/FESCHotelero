using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Application.DTOs.Cities;
using Application.DTOs.Countries;
using Application.DTOs.Response;

namespace Application.Interfaces
{
    public interface ICityService
    {
        Task<ResponseDTO<CityDTO>> CreateAsync(CreateCityDTO request);
        Task<ResponseDTO<bool>> DeleteAsync(int id);
        Task<ResponseDTO<List<CityDTO>>> GetAllAsync();
        Task<ResponseDTO<CityDTO>> GetAsync(int id);
        Task<ResponseDTO<bool>> UpdateAsync(int id, UpdateCityDTO request);
    }
}
