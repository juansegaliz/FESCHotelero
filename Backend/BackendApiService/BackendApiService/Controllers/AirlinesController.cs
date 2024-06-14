using Application.DTOs.Agencies;
using Application.DTOs.Airlines;
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
    public class AirlinesController : ControllerBase
    {
        private readonly IAirlineService _airlineService;

        public AirlinesController(IAirlineService airlineService)
        {
            _airlineService = airlineService;
        }

        [HttpPost]
        public async Task<IActionResult> Create(CreateAirlineDTO request)
        {
            ResponseDTO<AirlineDTO> response = await _airlineService.CreateAsync(request);
            return new ObjectResult(response) { StatusCode = response.Code };
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] UpdateAirlineDTO request)
        {
            ResponseDTO<bool> response = await _airlineService.UpdateAsync(id, request);
            return new ObjectResult(response) { StatusCode = response.Code };
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            ResponseDTO<bool> response = await _airlineService.DeleteAsync(id);
            return new ObjectResult(response) { StatusCode = response.Code };
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            ResponseDTO<List<AirlineDTO>> response = await _airlineService.GetAllAsync();
            return new ObjectResult(response) { StatusCode = response.Code };
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            ResponseDTO<AirlineDTO> response = await _airlineService.GetAsync(id);
            return new ObjectResult(response) { StatusCode = response.Code };
        }
    }
}
