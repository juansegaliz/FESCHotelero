using Application.DTOs.Response;
using Application.DTOs.Users;
using Application.Interfaces;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BackendApiService.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserService _userService;

        public UsersController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        public async Task<IActionResult> CreateUser(CreateUserDTO request)
        {
            ResponseDTO<UserDTO> response = await _userService.RegisterUser(request);
            return new ObjectResult(response) { StatusCode = response.Code };
        }
    }
}
