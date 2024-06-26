﻿using Application.DTOs.States;
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
    public class CountriesController : ControllerBase
    {
        private readonly ICountryService _countryService;
        private readonly IStateService _stateService;

        public CountriesController(ICountryService countryService, IStateService stateService)
        {
            _countryService = countryService;
            _stateService = stateService;
        }

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

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            ResponseDTO<List<CountryDTO>> response = await _countryService.GetAllAsync();
            return new ObjectResult(response) { StatusCode = response.Code };
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            ResponseDTO<CountryDTO> response = await _countryService.GetAsync(id);
            return new ObjectResult(response) { StatusCode = response.Code };
        }

        [HttpGet("{id}/states")]
        public async Task<IActionResult> GetStates(int id)
        {
            ResponseDTO<List<StateDTO>> response = await _stateService.GetAllByCountryIdAsync(id);
            return new ObjectResult(response) { StatusCode = response.Code };
        }
    }
}
