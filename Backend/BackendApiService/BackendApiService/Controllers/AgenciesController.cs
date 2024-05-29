using Application.DTOs.Agencies;
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
    public class AgenciesController : ControllerBase
    {
        private readonly IAgencyService _agencyService;

        public AgenciesController(IAgencyService agencyService)
        {
            _agencyService = agencyService;
        }

        [HttpPost]
        public async Task<IActionResult> Create(CreateAgencyDTO request)
        {
            ResponseDTO<AgencyDTO> response = await _agencyService.CreateAsync(request);
            return new ObjectResult(response) { StatusCode = response.Code };
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] UpdateAgencyDTO request)
        {
            ResponseDTO<bool> response = await _agencyService.UpdateAsync(id, request);
            return new ObjectResult(response) { StatusCode = response.Code };
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            ResponseDTO<bool> response = await _agencyService.DeleteAsync(id);
            return new ObjectResult(response) { StatusCode = response.Code };
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            ResponseDTO<List<AgencyDTO>> response = await _agencyService.GetAllAsync();
            return new ObjectResult(response) { StatusCode = response.Code };
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            ResponseDTO<AgencyDTO> response = await _agencyService.GetAsync(id);
            return new ObjectResult(response) { StatusCode = response.Code };
        }
    }
}
