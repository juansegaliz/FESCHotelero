﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Application.DTOs.Auth;
using Application.DTOs.Response;
using Application.DTOs.Users;

namespace Application.Interfaces
{
    public interface IAuthService
    {
        Task<ResponseDTO<ResponseLoginDTO>> Login(LoginDTO request);
    }
}
