using Application.DTOs.Cities;
using Application.DTOs.Response;
using Application.DTOs.States;
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
    public class CityService : ICityService
    {
        private readonly IRepositoryCity _cityRepository;
        private readonly IMapper _mapper;

        public CityService(IMapper mapper, IRepositoryCity cityRepository)
        {
            _mapper = mapper;
            _cityRepository = cityRepository;
        }

        public async Task<ResponseDTO<CityDTO>> CreateAsync(CreateCityDTO request)
        {
            var response = new ResponseDTO<CityDTO>(System.Net.HttpStatusCode.BadRequest);

            var createCity = _mapper.Map<Infrastructure.Data.Scaffold.City>(request);
            var cityCreated = await _cityRepository.Create(createCity);

            if (cityCreated is null)
            {
                response.AddMessage("Ocurrió un error al momento de crear una ciudad");
                return response;
            }

            response = new ResponseDTO<CityDTO>(System.Net.HttpStatusCode.OK);
            response.Data = _mapper.Map<CityDTO>(cityCreated);
            response.Messages.Add("Ciudad registrada con éxito");

            return response;
        }

        public async Task<ResponseDTO<bool>> UpdateAsync(int id, UpdateCityDTO request)
        {
            ResponseDTO<bool> response = new ResponseDTO<bool>(HttpStatusCode.BadRequest);
            response.SetData(false);

            var City = await _cityRepository.Get(id);

            if (City == null)
            {
                response.AddMessage("Ciudad no existe");
            }

            if (response.Messages.Any())
            {
                return response;
            }

            City.Name = request.Name;
            City.CountryId = request.CountryId;

            await _cityRepository.Update(City);

            response.SetCode(HttpStatusCode.OK);
            response.SetData(true);
            response.AddMessage("Ciudad actualizada exitosamente");
            return response;
        }

        public async Task<ResponseDTO<bool>> DeleteAsync(int id)
        {
            ResponseDTO<bool> response = new ResponseDTO<bool>(HttpStatusCode.BadRequest);
            response.SetData(false);

            var City = await _cityRepository.Get(id);

            if (City == null)
            {
                response.AddMessage("Ciudad no existe");
            }

            if (response.Messages.Any())
            {
                return response;
            }

            await _cityRepository.Delete(id);

            response.SetCode(HttpStatusCode.OK);
            response.SetData(true);
            response.AddMessage("Ciudad eliminada exitosamente");
            return response;
        }

        public async Task<ResponseDTO<List<CityDTO>>> GetAllAsync()
        {
            var response = new ResponseDTO<List<CityDTO>>(HttpStatusCode.BadRequest);

            var cities = await _cityRepository.GetAll();

            var countriesReturn = new List<CityDTO>();

            cities.ForEach(City =>
            {
                countriesReturn.Add(_mapper.Map<CityDTO>(City));
            });

            response.SetCode(HttpStatusCode.OK);
            response.SetData(countriesReturn);

            return response;
        }

        public async Task<ResponseDTO<CityDTO>> GetAsync(int id)
        {
            var response = new ResponseDTO<CityDTO>(HttpStatusCode.BadRequest);

            var city = await _cityRepository.Get(id);

            if (city == null)
            {
                response.AddMessage("Ciudad no existe");
            }

            if (response.Messages.Any())
            {
                return response;
            }

            CityDTO cityReturn = _mapper.Map<CityDTO>(city);
            
            response.SetCode(HttpStatusCode.OK);
            response.SetData(cityReturn);

            return response;
        }

        public async Task<ResponseDTO<List<CityDTO>>> GetAllByStateIdAsync(int stateId)
        {
            var response = new ResponseDTO<List<CityDTO>>(HttpStatusCode.BadRequest);

            var data = await _cityRepository.GetCitiesByStateId(stateId);

            var toReturn = new List<CityDTO>();

            data.ForEach(d =>
            {
                toReturn.Add(_mapper.Map<CityDTO>(d));
            });

            response.SetCode(HttpStatusCode.OK);
            response.SetData(toReturn);

            return response;
        }
    }
}
