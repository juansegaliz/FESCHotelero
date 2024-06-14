using Application.DTOs.Agencies;
using Application.DTOs.Airlines;
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
    public class AirlineService : IAirlineService
    {
        private readonly IRepository<Airline> _repository;
        private readonly IMapper _mapper;

        public AirlineService(IMapper mapper, IRepository<Airline> repository)
        {
            _mapper = mapper;
            _repository = repository;
        }

        public async Task<ResponseDTO<AirlineDTO>> CreateAsync(CreateAirlineDTO request)
        {
            var response = new ResponseDTO<AirlineDTO>(System.Net.HttpStatusCode.BadRequest);

            var create = _mapper.Map<Infrastructure.Data.Scaffold.Airline>(request);
            var created = await _repository.Create(create);

            if (created is null)
            {
                response.AddMessage("Ocurrió un error al momento de crear una aerolinea");
                return response;
            }

            response = new ResponseDTO<AirlineDTO>(System.Net.HttpStatusCode.OK);
            response.Data = _mapper.Map<AirlineDTO>(created);
            response.Messages.Add("Aerolinea registrada con éxito");

            return response;
        }

        public async Task<ResponseDTO<bool>> UpdateAsync(int id, UpdateAirlineDTO request)
        {
            ResponseDTO<bool> response = new ResponseDTO<bool>(HttpStatusCode.BadRequest);
            response.SetData(false);

            var data = await _repository.Get(id);

            if (data == null)
            {
                response.AddMessage("Aerolinea no existe");
            }

            if (response.Messages.Any())
            {
                return response;
            }

            data.Name = request.Name;
            data.Description = request.Description;
            data.Email = request.Email;
            data.Phone = request.Phone;
            data.Address = request.Address;
            data.CountryId = request.CountryId;
            data.CityId = request.CityId;
            data.Zip = request.Zip;

            await _repository.Update(data);

            response.SetCode(HttpStatusCode.OK);
            response.SetData(true);
            response.AddMessage("Aerolinea actualizada exitosamente");
            return response;
        }

        public async Task<ResponseDTO<bool>> DeleteAsync(int id)
        {
            ResponseDTO<bool> response = new ResponseDTO<bool>(HttpStatusCode.BadRequest);
            response.SetData(false);

            var data = await _repository.Get(id);

            if (data == null)
            {
                response.AddMessage("Aerolinea no existe");
            }

            if (response.Messages.Any())
            {
                return response;
            }

            await _repository.Delete(id);

            response.SetCode(HttpStatusCode.OK);
            response.SetData(true);
            response.AddMessage("Aerolinea eliminada exitosamente");
            return response;
        }

        public async Task<ResponseDTO<List<AirlineDTO>>> GetAllAsync()
        {
            var response = new ResponseDTO<List<AirlineDTO>>(HttpStatusCode.BadRequest);

            var info = await _repository.GetAll();

            var toReturn = new List<AirlineDTO>();

            info.ForEach(data =>
            {
                toReturn.Add(_mapper.Map<AirlineDTO>(data));
            });

            response.SetCode(HttpStatusCode.OK);
            response.SetData(toReturn);

            return response;
        }

        public async Task<ResponseDTO<AirlineDTO>> GetAsync(int id)
        {
            var response = new ResponseDTO<AirlineDTO>(HttpStatusCode.BadRequest);

            var data = await _repository.Get(id);

            if (data == null)
            {
                response.AddMessage("Aerolinea no existe");
            }

            if (response.Messages.Any())
            {
                return response;
            }

            AirlineDTO toReturn = _mapper.Map<AirlineDTO>(data);
            
            response.SetCode(HttpStatusCode.OK);
            response.SetData(toReturn);

            return response;
        }
    }
}
