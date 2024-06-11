using Application.DTOs.Companies;
using Application.DTOs.Countries;
using Application.DTOs.HotelPlans;
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
    public class CompanyService : ICompanyService
    {
        private readonly IRepository<Company> _repository;
        private readonly IMapper _mapper;

        public CompanyService(IMapper mapper, IRepository<Company> repository)
        {
            _mapper = mapper;
            _repository = repository;
        }

        public async Task<ResponseDTO<CompanyDTO>> CreateAsync(CreateCompanyDTO request)
        {
            throw new NotImplementedException();
            /*
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
            */
        }

        public async Task<ResponseDTO<bool>> UpdateAsync(int id, UpdateCompanyDTO request)
        {
            throw new NotImplementedException();
            /*
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
            */
        }

        public async Task<ResponseDTO<bool>> DeleteAsync(int id)
        {
            throw new NotImplementedException();
            /*
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
            */
        }

        public async Task<ResponseDTO<List<CompanyDTO>>> GetAllAsync()
        {            
            var response = new ResponseDTO<List<CompanyDTO>>(HttpStatusCode.BadRequest);

            var getData = await _repository.GetAll();

            var listReturn = new List<CompanyDTO>();

            getData.ForEach(data =>
            {
                listReturn.Add(_mapper.Map<CompanyDTO>(data));
            });

            response.SetCode(HttpStatusCode.OK);
            response.SetData(listReturn);

            return response;
        }

        public async Task<ResponseDTO<CompanyDTO>> GetAsync(int id)
        {
            var response = new ResponseDTO<CompanyDTO>(HttpStatusCode.BadRequest);

            var data = await _repository.Get(id);

            if (data == null)
            {
                response.AddMessage("Empresa no existe");
            }

            if (response.Messages.Any())
            {
                return response;
            }

            CompanyDTO dataReturn = _mapper.Map<CompanyDTO>(data);
            
            response.SetCode(HttpStatusCode.OK);
            response.SetData(dataReturn);

            return response;            
        }
    }
}
