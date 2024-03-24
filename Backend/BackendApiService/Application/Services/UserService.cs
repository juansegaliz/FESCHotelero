using Application.DTOs.Response;
using Application.DTOs.Users;
using Application.Interfaces;
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
        private readonly IRepository<User> _userRepository;

        public UserService(IRepository<User> userRepository)
        {
            _userRepository = userRepository;
        }

        public Task<ResponseDTO<UserDTO>> CreateUser(CreateUserDTO request)
        {
            throw new NotImplementedException();
        }
    }
}
