using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Application.DTOs.BookingGroups;
using Application.DTOs.Response;

namespace Application.Interfaces
{
    public interface IBookingGroupService
    {
        Task<ResponseDTO<BookingGroupDTO>> CreateAsync(CreateBookingGroupDTO request);
        Task<ResponseDTO<bool>> DeleteAsync(int id);
        Task<ResponseDTO<List<BookingGroupDTO>>> GetAllAsync();
        Task<ResponseDTO<BookingGroupDTO>> GetAsync(int id);
        Task<ResponseDTO<bool>> UpdateAsync(int id, UpdateBookingGroupDTO request);
    }
}
