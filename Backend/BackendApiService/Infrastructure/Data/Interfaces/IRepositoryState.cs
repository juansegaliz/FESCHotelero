using Infrastructure.Data.Scaffold;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Data.Interfaces
{
    public interface IRepositoryState : IRepository<State>
    {
        public Task<List<State>> GetStatesByCountryId(int countryId);
    }
}
