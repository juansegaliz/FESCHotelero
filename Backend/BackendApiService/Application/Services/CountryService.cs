using Application.DTOs.Countries;
using Application.DTOs.Response;
using Application.DTOs.Users;
using Application.Interfaces;
using AutoMapper;
using Infrastructure.Data.Interfaces;
using Infrastructure.Data.Repositories;
using Infrastructure.Data.Scaffold;
using Org.BouncyCastle.Asn1.Ocsp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services
{
    public class CountryService : ICountryService
    {
        private readonly IRepository<Country> _countryRepository;
        private readonly IMapper _mapper;

        public CountryService(IMapper mapper, IRepository<Country> countryRepository)
        {
            _mapper = mapper;
            _countryRepository = countryRepository;
        }

        public async Task<ResponseDTO<CountryDTO>> CreateAsync(CreateCountryDTO request)
        {
            var response = new ResponseDTO<CountryDTO>(System.Net.HttpStatusCode.BadRequest);

            var createCountry = _mapper.Map<Infrastructure.Data.Scaffold.Country>(request);
            var countryCreated = await _countryRepository.Create(createCountry);

            if (countryCreated is null)
            {
                response.AddMessage("Ocurrió un error al momento de crear un pais");
                return response;
            }

            response = new ResponseDTO<CountryDTO>(System.Net.HttpStatusCode.OK);
            response.Data = _mapper.Map<CountryDTO>(countryCreated);
            response.Messages.Add("Pais registrado con éxito");

            return response;
        }

        public async Task<ResponseDTO<bool>> UpdateAsync(int id, UpdateCountryDTO request)
        {
            ResponseDTO<bool> response = new ResponseDTO<bool>(HttpStatusCode.BadRequest);
            response.SetData(false);

            var country = await _countryRepository.Get(id);

            if (country == null)
            {
                response.AddMessage("Pais no existe");
            }

            if (response.Messages.Any())
            {
                return response;
            }

            country.Name = request.Name;
            country.Code = request.Code;

            await _countryRepository.Update(country);

            response.SetCode(HttpStatusCode.OK);
            response.SetData(true);
            response.AddMessage("Pais actualizado exitosamente");
            return response;
        }

        public async Task<ResponseDTO<bool>> DeleteAsync(int id)
        {
            ResponseDTO<bool> response = new ResponseDTO<bool>(HttpStatusCode.BadRequest);
            response.SetData(false);

            var country = await _countryRepository.Get(id);

            if (country == null)
            {
                response.AddMessage("Pais no existe");
            }

            if (response.Messages.Any())
            {
                return response;
            }

            await _countryRepository.Delete(id);

            response.SetCode(HttpStatusCode.OK);
            response.SetData(true);
            response.AddMessage("Pais eliminado exitosamente");
            return response;
        }

        public async Task<ResponseDTO<List<CountryDTO>>> GetAllAsync()
        {
            var response = new ResponseDTO<List<CountryDTO>>(HttpStatusCode.BadRequest);

            var countries = await _countryRepository.GetAll();

            var countriesReturn = new List<CountryDTO>();

            countries.ForEach(country =>
            {
                countriesReturn.Add(_mapper.Map<CountryDTO>(country));
            });

            response.SetCode(HttpStatusCode.OK);
            response.SetData(countriesReturn);

            return response;
        }
    }
}
