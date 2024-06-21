using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Application.DTOs.Response;
using Application.DTOs.Users;

namespace Application.Interfaces
{
    public interface IUserService
    {
        Task<ResponseDTO<UserDTO>> CreateUser(CreateUserDTO request);
    }
}
