using Infrastructure.Data.Scaffold;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Data.Interfaces
{
    public interface IRepositoryUser : IRepository<User>
    {
        public Task<User?> GetUserByEmail(string email);
    }
}
