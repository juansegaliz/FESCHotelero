using Application.DTOs.Agencies;
using Application.DTOs.Airlines;
using Application.DTOs.Bookings;
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
    public class BookingService : IBookingService
    {
        private readonly IRepository<Booking> _repository;
        private readonly IMapper _mapper;

        public BookingService(IMapper mapper, IRepository<Booking> repository)
        {
            _mapper = mapper;
            _repository = repository;
        }

        public async Task<ResponseDTO<BookingDTO>> CreateAsync(CreateBookingDTO request)
        {
            var response = new ResponseDTO<BookingDTO>(System.Net.HttpStatusCode.BadRequest);

            var create = _mapper.Map<Infrastructure.Data.Scaffold.Booking>(request);
            var created = await _repository.Create(create);

            if (created is null)
            {
                response.AddMessage("Ocurrió un error al momento de crear una reserva");
                return response;
            }

            response = new ResponseDTO<BookingDTO>(System.Net.HttpStatusCode.OK);
            response.Data = _mapper.Map<BookingDTO>(created);
            response.Messages.Add("Reserva registrada con éxito");

            return response;
        }

        public async Task<ResponseDTO<bool>> UpdateAsync(int id, UpdateBookingDTO request)
        {
            ResponseDTO<bool> response = new ResponseDTO<bool>(HttpStatusCode.BadRequest);
            response.SetData(false);

            var data = await _repository.Get(id);

            if (data == null)
            {
                response.AddMessage("Reserva no existe");
            }

            if (response.Messages.Any())
            {
                return response;
            }

            data.BookingType = request.BookingType;

            await _repository.Update(data);

            response.SetCode(HttpStatusCode.OK);
            response.SetData(true);
            response.AddMessage("Reserva actualizada exitosamente");
            return response;
        }

        public async Task<ResponseDTO<bool>> DeleteAsync(int id)
        {
            ResponseDTO<bool> response = new ResponseDTO<bool>(HttpStatusCode.BadRequest);
            response.SetData(false);

            var data = await _repository.Get(id);

            if (data == null)
            {
                response.AddMessage("Reserva no existe");
            }

            if (response.Messages.Any())
            {
                return response;
            }

            await _repository.Delete(id);

            response.SetCode(HttpStatusCode.OK);
            response.SetData(true);
            response.AddMessage("Reserva eliminada exitosamente");
            return response;
        }

        public async Task<ResponseDTO<List<BookingDTO>>> GetAllAsync()
        {
            var response = new ResponseDTO<List<BookingDTO>>(HttpStatusCode.BadRequest);

            var info = await _repository.GetAll();

            var toReturn = new List<BookingDTO>();

            info.ForEach(data =>
            {
                toReturn.Add(_mapper.Map<BookingDTO>(data));
            });

            response.SetCode(HttpStatusCode.OK);
            response.SetData(toReturn);

            return response;
        }

        public async Task<ResponseDTO<BookingDTO>> GetAsync(int id)
        {
            var response = new ResponseDTO<BookingDTO>(HttpStatusCode.BadRequest);

            var data = await _repository.Get(id);

            if (data == null)
            {
                response.AddMessage("Reserva no existe");
            }

            if (response.Messages.Any())
            {
                return response;
            }

            BookingDTO toReturn = _mapper.Map<BookingDTO>(data);
            
            response.SetCode(HttpStatusCode.OK);
            response.SetData(toReturn);

            return response;
        }
    }
}
