using Application.DTOs.Agencies;
using Application.DTOs.Airlines;
using Application.DTOs.BookingGroups;
using Application.DTOs.Cities;
using Application.DTOs.Countries;
using Application.DTOs.Response;
using Application.DTOs.Users;
using Application.Interfaces;
using Application.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BackendApiService.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BookingGroupsController : ControllerBase
    {
        private readonly IBookingGroupService _bookingGroupService;

        public BookingGroupsController(IBookingGroupService bookingGroupService)
        {
            _bookingGroupService = bookingGroupService;
        }

        [HttpPost]
        public async Task<IActionResult> Create(CreateBookingGroupDTO request)
        {
            ResponseDTO<BookingGroupDTO> response = await _bookingGroupService.CreateAsync(request);
            return new ObjectResult(response) { StatusCode = response.Code };
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] UpdateBookingGroupDTO request)
        {
            ResponseDTO<bool> response = await _bookingGroupService.UpdateAsync(id, request);
            return new ObjectResult(response) { StatusCode = response.Code };
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            ResponseDTO<bool> response = await _bookingGroupService.DeleteAsync(id);
            return new ObjectResult(response) { StatusCode = response.Code };
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            ResponseDTO<List<BookingGroupDTO>> response = await _bookingGroupService.GetAllAsync();
            return new ObjectResult(response) { StatusCode = response.Code };
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            ResponseDTO<BookingGroupDTO> response = await _bookingGroupService.GetAsync(id);
            return new ObjectResult(response) { StatusCode = response.Code };
        }

        [HttpGet("tableview")]
        public async Task<IActionResult> GetTableView()
        {
            ResponseDTO<List<BookingGroupDTO>> response = await _bookingGroupService.GetTableViewAsync();
            return new ObjectResult(response) { StatusCode = response.Code };
        }
    }
}
