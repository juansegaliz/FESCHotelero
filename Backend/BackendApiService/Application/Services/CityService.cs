using Application.DTOs.Agencies;
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
    public class AgencyService : IAgencyService
    {
        private readonly IRepository<Agency> _agencyRepository;
        private readonly IMapper _mapper;

        public AgencyService(IMapper mapper, IRepository<Agency> agencyRepository)
        {
            _mapper = mapper;
            _agencyRepository = agencyRepository;
        }

        public async Task<ResponseDTO<AgencyDTO>> CreateAsync(CreateAgencyDTO request)
        {
            var response = new ResponseDTO<AgencyDTO>(System.Net.HttpStatusCode.BadRequest);

            var createAgency = _mapper.Map<Infrastructure.Data.Scaffold.Agency>(request);
            var agencyCreated = await _agencyRepository.Create(createAgency);

            if (agencyCreated is null)
            {
                response.AddMessage("Ocurrió un error al momento de crear una agencia");
                return response;
            }

            response = new ResponseDTO<AgencyDTO>(System.Net.HttpStatusCode.OK);
            response.Data = _mapper.Map<AgencyDTO>(agencyCreated);
            response.Messages.Add("Agencia registrada con éxito");

            return response;
        }

        public async Task<ResponseDTO<bool>> UpdateAsync(int id, UpdateAgencyDTO request)
        {
            ResponseDTO<bool> response = new ResponseDTO<bool>(HttpStatusCode.BadRequest);
            response.SetData(false);

            var Agency = await _agencyRepository.Get(id);

            if (Agency == null)
            {
                response.AddMessage("Agencia no existe");
            }

            if (response.Messages.Any())
            {
                return response;
            }

            Agency.Name = request.Name;
            Agency.Description = request.Description;
            Agency.Email = request.Email;
            Agency.Phone = request.Phone;
            Agency.Address = request.Address;
            Agency.CountryId = request.CountryId;
            Agency.CityId = request.CityId;
            Agency.Zip = request.Zip;

            await _agencyRepository.Update(Agency);

            response.SetCode(HttpStatusCode.OK);
            response.SetData(true);
            response.AddMessage("Agencia actualizada exitosamente");
            return response;
        }

        public async Task<ResponseDTO<bool>> DeleteAsync(int id)
        {
            ResponseDTO<bool> response = new ResponseDTO<bool>(HttpStatusCode.BadRequest);
            response.SetData(false);

            var Agency = await _agencyRepository.Get(id);

            if (Agency == null)
            {
                response.AddMessage("Agencia no existe");
            }

            if (response.Messages.Any())
            {
                return response;
            }

            await _agencyRepository.Delete(id);

            response.SetCode(HttpStatusCode.OK);
            response.SetData(true);
            response.AddMessage("Agencia eliminada exitosamente");
            return response;
        }

        public async Task<ResponseDTO<List<AgencyDTO>>> GetAllAsync()
        {
            var response = new ResponseDTO<List<AgencyDTO>>(HttpStatusCode.BadRequest);

            var agencies = await _agencyRepository.GetAll();

            var countriesReturn = new List<AgencyDTO>();

            agencies.ForEach(Agency =>
            {
                countriesReturn.Add(_mapper.Map<AgencyDTO>(Agency));
            });

            response.SetCode(HttpStatusCode.OK);
            response.SetData(countriesReturn);

            return response;
        }

        public async Task<ResponseDTO<AgencyDTO>> GetAsync(int id)
        {
            var response = new ResponseDTO<AgencyDTO>(HttpStatusCode.BadRequest);

            var agency = await _agencyRepository.Get(id);

            if (agency == null)
            {
                response.AddMessage("Agencia no existe");
            }

            if (response.Messages.Any())
            {
                return response;
            }

            AgencyDTO agencyReturn = _mapper.Map<AgencyDTO>(agency);
            
            response.SetCode(HttpStatusCode.OK);
            response.SetData(agencyReturn);

            return response;
        }
    }
}
