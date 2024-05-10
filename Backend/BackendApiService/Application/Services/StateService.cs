using Application.DTOs.Cities;
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
    public class StateService : IStateService
    {
        private readonly IRepository<State> _stateRepository;
        private readonly IMapper _mapper;

        public StateService(IMapper mapper, IRepository<State> stateRepository)
        {
            _mapper = mapper;
            _stateRepository = stateRepository;
        }

        public async Task<ResponseDTO<StateDTO>> CreateAsync(CreateStateDTO request)
        {
            var response = new ResponseDTO<StateDTO>(System.Net.HttpStatusCode.BadRequest);

            var createState = _mapper.Map<Infrastructure.Data.Scaffold.State>(request);
            var stateCreated = await _stateRepository.Create(createState);

            if (stateCreated is null)
            {
                response.AddMessage("Ocurrió un error al momento de crear un departamento/estado");
                return response;
            }

            response = new ResponseDTO<StateDTO>(System.Net.HttpStatusCode.OK);
            response.Data = _mapper.Map<StateDTO>(stateCreated);
            response.Messages.Add("Departamento/Estado registrado con éxito");

            return response;
        }

        public async Task<ResponseDTO<bool>> UpdateAsync(int id, UpdateStateDTO request)
        {
            ResponseDTO<bool> response = new ResponseDTO<bool>(HttpStatusCode.BadRequest);
            response.SetData(false);

            var state = await _stateRepository.Get(id);

            if (state == null)
            {
                response.AddMessage("Departamento/Estado no existe");
            }

            if (response.Messages.Any())
            {
                return response;
            }

            state.Name = request.Name;
            state.CountryId = request.CountryId;

            await _stateRepository.Update(state);

            response.SetCode(HttpStatusCode.OK);
            response.SetData(true);
            response.AddMessage("Departamento/Estado actualizado exitosamente");
            return response;
        }

        public async Task<ResponseDTO<bool>> DeleteAsync(int id)
        {
            ResponseDTO<bool> response = new ResponseDTO<bool>(HttpStatusCode.BadRequest);
            response.SetData(false);

            var state = await _stateRepository.Get(id);

            if (state == null)
            {
                response.AddMessage("Departamento/Estado no existe");
            }

            if (response.Messages.Any())
            {
                return response;
            }

            await _stateRepository.Delete(id);

            response.SetCode(HttpStatusCode.OK);
            response.SetData(true);
            response.AddMessage("Departamento/Estado eliminado exitosamente");
            return response;
        }

        public async Task<ResponseDTO<List<StateDTO>>> GetAllAsync()
        {
            var response = new ResponseDTO<List<StateDTO>>(HttpStatusCode.BadRequest);

            var countries = await _stateRepository.GetAll();

            var countriesReturn = new List<StateDTO>();

            countries.ForEach(state =>
            {
                countriesReturn.Add(_mapper.Map<StateDTO>(state));
            });

            response.SetCode(HttpStatusCode.OK);
            response.SetData(countriesReturn);

            return response;
        }

        public async Task<ResponseDTO<StateDTO>> GetAsync(int id)
        {
            var response = new ResponseDTO<StateDTO>(HttpStatusCode.BadRequest);

            var state = await _stateRepository.Get(id);

            if (state == null)
            {
                response.AddMessage("Departamento/Estado no existe");
            }

            if (response.Messages.Any())
            {
                return response;
            }

            StateDTO stateReturn = _mapper.Map<StateDTO>(state);
            
            response.SetCode(HttpStatusCode.OK);
            response.SetData(stateReturn);

            return response;
        }
    }
}
