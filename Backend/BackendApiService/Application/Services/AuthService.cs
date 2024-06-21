using Application.DTOs.Auth;
using Application.DTOs.Response;
using Application.DTOs.Users;
using Application.Interfaces;
using AutoMapper;
using Infrastructure.Data.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services
{
    public class AuthService : IAuthService
    {
        private readonly IRepositoryUser _userRepository;
        private readonly IMapper _mapper;

        public AuthService(IMapper mapper, IRepositoryUser userRepository)
        {
            _mapper = mapper;
            _userRepository = userRepository;
        }

        public async Task<ResponseDTO<ResponseLoginDTO>> Login(LoginDTO request)
        {
            var response = new ResponseDTO<ResponseLoginDTO>(System.Net.HttpStatusCode.BadRequest);

            bool exists = (await _userRepository.GetByCondition(r => r.Email == request.Email && r.Password == r.Password)).Any();

            if (!exists)
            {
                response.AddMessage("Correo o contraseña incorrectos");
                return response;
            }

            response = new ResponseDTO<ResponseLoginDTO>(System.Net.HttpStatusCode.OK);
            response.Messages.Add("Login exitoso");

            return response;
        }
    }
}
