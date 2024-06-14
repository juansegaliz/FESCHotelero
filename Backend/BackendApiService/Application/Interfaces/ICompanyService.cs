using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Application.DTOs.Companies;
using Application.DTOs.HotelPlans;
using Application.DTOs.Response;

namespace Application.Interfaces
{
    public interface ICompanyService
    {
        Task<ResponseDTO<CompanyDTO>> CreateAsync(CreateCompanyDTO request);
        Task<ResponseDTO<bool>> DeleteAsync(int id);
        Task<ResponseDTO<List<CompanyDTO>>> GetAllAsync();
        Task<ResponseDTO<CompanyDTO>> GetAsync(int id);
        Task<ResponseDTO<bool>> UpdateAsync(int id, UpdateCompanyDTO request);
    }
}
