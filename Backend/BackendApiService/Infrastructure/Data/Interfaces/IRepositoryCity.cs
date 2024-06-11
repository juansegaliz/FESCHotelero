using Infrastructure.Data.Scaffold;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Data.Interfaces
{
    public interface IRepositoryCity : IRepository<City>
    {
        public Task<List<City>> GetCitiesByStateId(int stateId);
    }
}
