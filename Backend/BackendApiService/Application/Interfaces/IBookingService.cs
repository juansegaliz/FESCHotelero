using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Application.DTOs.Bookings;
using Application.DTOs.Response;

namespace Application.Interfaces
{
    public interface IBookingService
    {
        Task<ResponseDTO<BookingDTO>> CreateAsync(CreateBookingDTO request);
        Task<ResponseDTO<bool>> DeleteAsync(int id);
        Task<ResponseDTO<List<BookingDTO>>> GetAllAsync();
        Task<ResponseDTO<BookingDTO>> GetAsync(int id);
        Task<ResponseDTO<bool>> UpdateAsync(int id, UpdateBookingDTO request);
    }
}
