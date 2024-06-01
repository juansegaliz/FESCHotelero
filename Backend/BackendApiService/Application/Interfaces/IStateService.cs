using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Application.DTOs.States;
using Application.DTOs.Countries;
using Application.DTOs.Response;
using Infrastructure.Data.Interfaces;

namespace Application.Interfaces
{
    public interface IStateService
    {
        Task<ResponseDTO<StateDTO>> CreateAsync(CreateStateDTO request);
        Task<ResponseDTO<bool>> DeleteAsync(int id);
        Task<ResponseDTO<List<StateDTO>>> GetAllAsync();
        Task<ResponseDTO<List<StateDTO>>> GetAllByCountryIdAsync(int countryId);
        Task<ResponseDTO<StateDTO>> GetAsync(int id);
        Task<ResponseDTO<bool>> UpdateAsync(int id, UpdateStateDTO request);
    }
}
