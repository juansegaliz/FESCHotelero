using Application.DTOs.Response;
using Application.DTOs.Users;
using Application.Interfaces;
using AutoMapper;
using Infrastructure.Data.Interfaces;
using Infrastructure.Data.Repositories;
using Infrastructure.Data.Scaffold;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services
{
    public class UserService : IUserService
    {
        private readonly IRepositoryUser _userRepository;
        private readonly IMapper _mapper;

        public UserService(IMapper mapper, IRepositoryUser userRepository)
        {
            _mapper = mapper;
            _userRepository = userRepository;
        }

        public async Task<ResponseDTO<UserDTO>> CreateUser(CreateUserDTO request)
        {
            var response = new ResponseDTO<UserDTO>(System.Net.HttpStatusCode.BadRequest);

            var userCheckExist = await _userRepository.GetUserByEmail(request.Email);

            if (userCheckExist != null)
            {
                response.Messages.Add("Ya existe un usuario registrado con ese correo electrónico");
                return response;
            }

            var createUser = _mapper.Map<Infrastructure.Data.Scaffold.User>(request);
            var userCreated = await _userRepository.Create(createUser);

            if (userCreated is null)
            {
                response.Messages.Add("Ocurrió un error al momento de crear el usuario");
                return response;
            }

            response = new ResponseDTO<UserDTO>(System.Net.HttpStatusCode.OK);
            response.Data = _mapper.Map<UserDTO>(userCreated);
            response.Messages.Add("Usuario registrado con éxito");

            return response;
        }
    }
}
