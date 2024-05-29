using Application.DTOs.Agencies;
using Application.DTOs.CancellationReasons;
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
    public class CancellationReasonsController : ControllerBase
    {
        private readonly ICancellationReasonService _cancellationReasonService;

        public CancellationReasonsController(ICancellationReasonService cancellationReasonService)
        {
            _cancellationReasonService = cancellationReasonService;
        }

        [HttpPost]
        public async Task<IActionResult> Create(CreateCancellationReasonDTO request)
        {
            ResponseDTO<CancellationReasonDTO> response = await _cancellationReasonService.CreateAsync(request);
            return new ObjectResult(response) { StatusCode = response.Code };
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] UpdateCancellationReasonDTO request)
        {
            ResponseDTO<bool> response = await _cancellationReasonService.UpdateAsync(id, request);
            return new ObjectResult(response) { StatusCode = response.Code };
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            ResponseDTO<bool> response = await _cancellationReasonService.DeleteAsync(id);
            return new ObjectResult(response) { StatusCode = response.Code };
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            ResponseDTO<List<CancellationReasonDTO>> response = await _cancellationReasonService.GetAllAsync();
            return new ObjectResult(response) { StatusCode = response.Code };
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            ResponseDTO<CancellationReasonDTO> response = await _cancellationReasonService.GetAsync(id);
            return new ObjectResult(response) { StatusCode = response.Code };
        }
    }
}
