using Application.DTOs.States;
using Application.DTOs.Countries;
using Application.DTOs.Response;
using Application.DTOs.Users;
using Application.Interfaces;
using Application.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Application.DTOs.Cities;

namespace BackendApiService.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class StatesController : ControllerBase
    {
        private readonly IStateService _stateService;
        private readonly ICityService _cityService;

        public StatesController(IStateService stateService, ICityService cityService)
        {
            _stateService = stateService;
            _cityService = cityService;
        }

        [HttpPost]
        public async Task<IActionResult> Create(CreateStateDTO request)
        {
            ResponseDTO<StateDTO> response = await _stateService.CreateAsync(request);
            return new ObjectResult(response) { StatusCode = response.Code };
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] UpdateStateDTO request)
        {
            ResponseDTO<bool> response = await _stateService.UpdateAsync(id, request);
            return new ObjectResult(response) { StatusCode = response.Code };
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            ResponseDTO<bool> response = await _stateService.DeleteAsync(id);
            return new ObjectResult(response) { StatusCode = response.Code };
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            ResponseDTO<List<StateDTO>> response = await _stateService.GetAllAsync();
            return new ObjectResult(response) { StatusCode = response.Code };
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            ResponseDTO<StateDTO> response = await _stateService.GetAsync(id);
            return new ObjectResult(response) { StatusCode = response.Code };
        }


        [HttpGet("{id}/cities")]
        public async Task<IActionResult> GetCities(int id)
        {
            ResponseDTO<List<CityDTO>> response = await _cityService.GetAllByStateIdAsync(id);
            return new ObjectResult(response) { StatusCode = response.Code };
        }
    }
}
