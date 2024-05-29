using Application.DTOs.Agencies;
using Application.DTOs.CancellationReasons;
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
    public class CancellationReasonService : ICancellationReasonService
    {
        private readonly IRepository<CancellationReason> _cancellationReasonRepository;
        private readonly IMapper _mapper;

        public CancellationReasonService(IMapper mapper, IRepository<CancellationReason> cancellationReasonRepository)
        {
            _mapper = mapper;
            _cancellationReasonRepository = cancellationReasonRepository;
        }

        public async Task<ResponseDTO<CancellationReasonDTO>> CreateAsync(CreateCancellationReasonDTO request)
        {
            var response = new ResponseDTO<CancellationReasonDTO>(System.Net.HttpStatusCode.BadRequest);

            var createCancellationReason = _mapper.Map<Infrastructure.Data.Scaffold.CancellationReason>(request);
            var cancellationReasonCreated = await _cancellationReasonRepository.Create(createCancellationReason);

            if (cancellationReasonCreated is null)
            {
                response.AddMessage("Ocurrió un error al momento de crear una razón de cancelación");
                return response;
            }

            response = new ResponseDTO<CancellationReasonDTO>(System.Net.HttpStatusCode.OK);
            response.Data = _mapper.Map<CancellationReasonDTO>(cancellationReasonCreated);
            response.Messages.Add("Razón de cancelación registrada con éxito");

            return response;
        }

        public async Task<ResponseDTO<bool>> UpdateAsync(int id, UpdateCancellationReasonDTO request)
        {
            ResponseDTO<bool> response = new ResponseDTO<bool>(HttpStatusCode.BadRequest);
            response.SetData(false);

            var cancellationReason = await _cancellationReasonRepository.Get(id);

            if (cancellationReason == null)
            {
                response.AddMessage("Razón de cancelación no existe");
            }

            if (response.Messages.Any())
            {
                return response;
            }

            cancellationReason.Name = request.Name;
            cancellationReason.Description = request.Description;

            await _cancellationReasonRepository.Update(cancellationReason);

            response.SetCode(HttpStatusCode.OK);
            response.SetData(true);
            response.AddMessage("Razón de cancelación actualizada exitosamente");
            return response;
        }

        public async Task<ResponseDTO<bool>> DeleteAsync(int id)
        {
            ResponseDTO<bool> response = new ResponseDTO<bool>(HttpStatusCode.BadRequest);
            response.SetData(false);

            var cancellationReason = await _cancellationReasonRepository.Get(id);

            if (cancellationReason == null)
            {
                response.AddMessage("Razón de cancelación no existe");
            }

            if (response.Messages.Any())
            {
                return response;
            }

            await _cancellationReasonRepository.Delete(id);

            response.SetCode(HttpStatusCode.OK);
            response.SetData(true);
            response.AddMessage("Razón de cancelación eliminada exitosamente");
            return response;
        }

        public async Task<ResponseDTO<List<CancellationReasonDTO>>> GetAllAsync()
        {
            var response = new ResponseDTO<List<CancellationReasonDTO>>(HttpStatusCode.BadRequest);

            var cancellationReasons = await _cancellationReasonRepository.GetAll();

            var cancellationReasonReturn = new List<CancellationReasonDTO>();

            cancellationReasons.ForEach(cancellationReason =>
            {
                cancellationReasonReturn.Add(_mapper.Map<CancellationReasonDTO>(cancellationReason));
            });

            response.SetCode(HttpStatusCode.OK);
            response.SetData(cancellationReasonReturn);

            return response;
        }

        public async Task<ResponseDTO<CancellationReasonDTO>> GetAsync(int id)
        {
            var response = new ResponseDTO<CancellationReasonDTO>(HttpStatusCode.BadRequest);

            var cancellationReason = await _cancellationReasonRepository.Get(id);

            if (cancellationReason == null)
            {
                response.AddMessage("Razón de cancelación no existe");
            }

            if (response.Messages.Any())
            {
                return response;
            }

            CancellationReasonDTO cancellationReasonReturn = _mapper.Map<CancellationReasonDTO>(cancellationReason);
            
            response.SetCode(HttpStatusCode.OK);
            response.SetData(cancellationReasonReturn);

            return response;
        }
    }
}
