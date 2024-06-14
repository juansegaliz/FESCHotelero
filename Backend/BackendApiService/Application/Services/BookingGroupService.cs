using Application.DTOs.Agencies;
using Application.DTOs.Airlines;
using Application.DTOs.BookingGroups;
using Application.DTOs.Bookings;
using Application.DTOs.Response;
using Application.DTOs.Users;
using Application.Interfaces;
using AutoMapper;
using Domain.Enums;
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
    public class BookingGroupService : IBookingGroupService
    {
        private readonly IRepository<BookingGroup> _repository;
        private readonly IBookingService _bookingService;
        private readonly IMapper _mapper;

        public BookingGroupService(IMapper mapper, IBookingService bookingService, IRepository<BookingGroup> repository)
        {
            _mapper = mapper;
            _bookingService = bookingService;
            _repository = repository;
        }

        public async Task<ResponseDTO<BookingGroupDTO>> CreateAsync(CreateBookingGroupDTO request)
        {
            var response = new ResponseDTO<BookingGroupDTO>(System.Net.HttpStatusCode.BadRequest);

            var responseBooking = await _bookingService.CreateAsync(new CreateBookingDTO { BookingType = BookingType.Group.ToString().ToLower() });

            if (responseBooking.Code != (int)HttpStatusCode.OK) 
            {
                response.AddMessage("Error al crear la reserva");
                return response;
            }

            var create = _mapper.Map<Infrastructure.Data.Scaffold.BookingGroup>(request);
            create.BookingId = responseBooking.Data.BookingId;

            var created = await _repository.Create(create);
            if (created is null)
            {
                response.AddMessage("Ocurrió un error al momento de crear una reserva de grupo");
                return response;
            }

            response = new ResponseDTO<BookingGroupDTO>(System.Net.HttpStatusCode.OK);
            response.Data = _mapper.Map<BookingGroupDTO>(created);
            response.Messages.Add("Reserva de grupo registrada con éxito");

            return response;
        }

        public async Task<ResponseDTO<bool>> UpdateAsync(int id, UpdateBookingGroupDTO request)
        {
            ResponseDTO<bool> response = new ResponseDTO<bool>(HttpStatusCode.BadRequest);
            response.SetData(false);

            var data = await _repository.Get(id);

            if (data is null)
            {
                response.AddMessage("Reserva de grupo no existe");
            }

            if (response.Messages.Any())
            {
                return response;
            }

            data.HotelPlanId = request.HotelPlanId;
            data.HotelPlanName = request.HotelPlanName;
            data.CompanyId = request.CompanyId;
            data.CompanyName = request.CompanyName;
            data.CompanyAddress = request.CompanyAddress;
            data.CompanyPhone = request.CompanyPhone;
            data.CompanyEmail = request.CompanyEmail;
            data.ContactName = request.ContactName;
            data.ContactWorkPosition = request.ContactWorkPosition;
            data.ContactMethodId = request.ContactMethodId;
            data.ContactMethodName = request.ContactMethodName;
            data.Segment01 = request.Segment01;
            data.Segment02 = request.Segment02;
            data.Segment03 = request.Segment03;
            data.Transport = request.Transport;
            data.AirlineId = request.AirlineId;
            data.AirlineName = request.AirlineName;
            data.CountryId = request.CountryId;
            data.CountryName = request.CountryName;
            data.StateId = request.StateId;
            data.StateName = request.StateName;
            data.CityId = request.CityId;
            data.CityName = request.CityName;
            data.Allot = request.Allot;
            data.Grp = request.Grp;
            data.QuotationDate = request.QuotationDate;
            data.ArrivalDate = request.ArrivalDate;
            data.DepartureDate = request.DepartureDate;
            data.NumberOfNights = request.NumberOfNights;
            data.GuaranteeDate = request.GuaranteeDate;
            data.GuaranteeId = request.GuaranteeId;
            data.GuaranteeName = request.GuaranteeName;
            data.DepositId = request.DepositId;
            data.DepositName = request.DepositName;
            data.TravelPurposeId = request.TravelPurposeId;
            data.TravelPurposeName = request.TravelPurposeName;
            data.AgencyId = request.AgencyId;
            data.AgencyName = request.AgencyName;
            data.Commissionable = request.Commissionable;
            data.RateId = request.RateId;
            data.RateName = request.RateName;
            data.CurrencyId = request.CurrencyId;
            data.CurrencyName = request.CurrencyName;
            data.ReservationStatusId = request.ReservationStatusId;
            data.ReservationStatusName = request.ReservationStatusName;
            data.MasterFolio = request.MasterFolio;
            data.HideRate = request.HideRate;
            data.Discount = request.Discount;
            data.RateToCharge = request.RateToCharge;
            data.PackageDiscount = request.PackageDiscount;
            data.AccountingAccountId = request.AccountingAccountId;
            data.AccountingAccountName = request.AccountingAccountName;
            data.Complex = request.Complex;

            await _repository.Update(data);

            response.SetCode(HttpStatusCode.OK);
            response.SetData(true);
            response.AddMessage("Reserva de grupo actualizada exitosamente");

            return response;
        }

        public async Task<ResponseDTO<bool>> DeleteAsync(int id)
        {
            ResponseDTO<bool> response = new ResponseDTO<bool>(HttpStatusCode.BadRequest);
            response.SetData(false);

            var data = await _repository.Get(id);

            if (data == null)
            {
                response.AddMessage("Reserva de grupo no existe");
            }

            if (response.Messages.Any())
            {
                return response;
            }

            var responseBookingDeleted = await _bookingService.DeleteAsync(id);

            if (responseBookingDeleted.Code != (int)HttpStatusCode.OK)
            {
                response.AddMessage("Error al borrar reserva");
                return response;
            }

            await _repository.Delete(id);

            response.SetCode(HttpStatusCode.OK);
            response.SetData(true);
            response.AddMessage("Reserva de grupo eliminada exitosamente");
            return response;
        }

        public async Task<ResponseDTO<List<BookingGroupDTO>>> GetAllAsync()
        {
            var response = new ResponseDTO<List<BookingGroupDTO>>(HttpStatusCode.BadRequest);

            var info = await _repository.GetAll();

            var toReturn = new List<BookingGroupDTO>();

            info.ForEach(data =>
            {
                toReturn.Add(_mapper.Map<BookingGroupDTO>(data));
            });

            response.SetCode(HttpStatusCode.OK);
            response.SetData(toReturn);

            return response;
        }

        public async Task<ResponseDTO<BookingGroupDTO>> GetAsync(int id)
        {
            var response = new ResponseDTO<BookingGroupDTO>(HttpStatusCode.BadRequest);

            var data = await _repository.Get(id);

            if (data == null)
            {
                response.AddMessage("Reserva de grupo no existe");
            }

            if (response.Messages.Any())
            {
                return response;
            }

            BookingGroupDTO toReturn = _mapper.Map<BookingGroupDTO>(data);

            response.SetCode(HttpStatusCode.OK);
            response.SetData(toReturn);

            return response;
        }

        public async Task<ResponseDTO<List<BookingGroupDTO>>> GetTableViewAsync()
        {
            var response = new ResponseDTO<List<BookingGroupDTO>>(HttpStatusCode.BadRequest);

            var info = (await _repository.GetAll()).OrderByDescending(r => r.UpdatedAt).ToList();

            var toReturn = new List<BookingGroupDTO>();

            info.ForEach(data =>
            {
                toReturn.Add(_mapper.Map<BookingGroupDTO>(data));
            });

            response.SetCode(HttpStatusCode.OK);
            response.SetData(toReturn);

            return response;
        }
    }
}
