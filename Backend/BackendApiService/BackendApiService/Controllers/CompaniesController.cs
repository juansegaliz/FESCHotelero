using Application.DTOs.Companies;
using Application.DTOs.Countries;
using Application.DTOs.HotelPlans;
using Application.DTOs.Response;
using Application.DTOs.States;
using Application.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BackendApiService.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class CompaniesController : ControllerBase
    {
        private readonly ICompanyService _companiesService;

        public CompaniesController(ICompanyService companiesService)
        {
            _companiesService = companiesService;
        }
        /*
        [HttpPost]
        public async Task<IActionResult> Create(CreateCountryDTO request)
        {
            ResponseDTO<CountryDTO> response = await _countryService.CreateAsync(request);
            return new ObjectResult(response) { StatusCode = response.Code };
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] UpdateCountryDTO request)
        {
            ResponseDTO<bool> response = await _countryService.UpdateAsync(id, request);
            return new ObjectResult(response) { StatusCode = response.Code };
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            ResponseDTO<bool> response = await _countryService.DeleteAsync(id);
            return new ObjectResult(response) { StatusCode = response.Code };
        }
        */
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            ResponseDTO<List<CompanyDTO>> response = await _companiesService.GetAllAsync();
            return new ObjectResult(response) { StatusCode = response.Code };
        }
        
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            ResponseDTO<CompanyDTO> response = await _companiesService.GetAsync(id);
            return new ObjectResult(response) { StatusCode = response.Code };
        }
        /*
        [HttpGet("{id}/states")]
        public async Task<IActionResult> GetStates(int id)
        {
            ResponseDTO<List<StateDTO>> response = await _stateService.GetAllByCountryIdAsync(id);
            return new ObjectResult(response) { StatusCode = response.Code };
        }
        */
    }
}
