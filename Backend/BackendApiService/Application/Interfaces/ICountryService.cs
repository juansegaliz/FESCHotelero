using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Application.DTOs.Countries;
using Application.DTOs.Response;

namespace Application.Interfaces
{
    public interface ICountryService
    {
        Task<ResponseDTO<CountryDTO>> CreateAsync(CreateCountryDTO request);
        Task<ResponseDTO<bool>> DeleteAsync(int id);
        Task<ResponseDTO<List<CountryDTO>>> GetAllAsync();
        Task<ResponseDTO<CountryDTO>> GetAsync(int id);
        Task<ResponseDTO<bool>> UpdateAsync(int id, UpdateCountryDTO request);
    }
}
