using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Application.DTOs.Agencies;
using Application.DTOs.CancellationReasons;
using Application.DTOs.Response;

namespace Application.Interfaces
{
    public interface ICancellationReasonService
    {
        Task<ResponseDTO<CancellationReasonDTO>> CreateAsync(CreateCancellationReasonDTO request);
        Task<ResponseDTO<bool>> DeleteAsync(int id);
        Task<ResponseDTO<List<CancellationReasonDTO>>> GetAllAsync();
        Task<ResponseDTO<CancellationReasonDTO>> GetAsync(int id);
        Task<ResponseDTO<bool>> UpdateAsync(int id, UpdateCancellationReasonDTO request);
    }
}
