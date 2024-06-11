using Infrastructure.Data.DbContexts;
using Infrastructure.Data.Interfaces;
using Infrastructure.Data.Scaffold;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Security.Principal;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Data.Repositories
{
    public class RepositoryCity : IRepositoryCity
    {
        private readonly IRepository<City> _repository;
        public RepositoryCity(IRepository<City> repository) 
        {
            _repository = repository;
        }

        public async Task<Scaffold.City?> Create(Scaffold.City entity)
        {
            return await _repository.Create(entity);
        }

        public async Task Delete(int id)
        {
            await _repository.Delete(id);
        }

        public async Task<Scaffold.City> Get(int id)
        {
            return await _repository.Get(id);
        }

        public async Task<List<Scaffold.City>> GetAll()
        {
            return await _repository.GetAll();
        }

        public async Task<List<Scaffold.City>> GetByCondition(Expression<Func<Scaffold.City, bool>> predicate)
        {
            return await _repository.GetByCondition(predicate);
        }

        public async Task<List<City>> GetCitiesByStateId(int stateId)
        {
            return (await _repository.GetByCondition(r => r.StateId == stateId));
        }

        public async Task<bool> Update(Scaffold.City entity)
        {
            return await _repository.Update(entity);
        }
    }
}
