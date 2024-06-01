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
    public class RepositoryState : IRepositoryState
    {
        private readonly IRepository<State> _repository;
        public RepositoryState(IRepository<State> repository) 
        {
            _repository = repository;
        }

        public async Task<Scaffold.State?> Create(Scaffold.State entity)
        {
            return await _repository.Create(entity);
        }

        public async Task Delete(int id)
        {
            await _repository.Delete(id);
        }

        public async Task<Scaffold.State> Get(int id)
        {
            return await _repository.Get(id);
        }

        public async Task<List<Scaffold.State>> GetAll()
        {
            return await _repository.GetAll();
        }

        public async Task<List<Scaffold.State>> GetByCondition(Expression<Func<Scaffold.State, bool>> predicate)
        {
            return await _repository.GetByCondition(predicate);
        }

        public async Task<List<State>> GetStatesByCountryId(int countryId)
        {
            return (await _repository.GetByCondition(r => r.CountryId == countryId));
        }

        public async Task<bool> Update(Scaffold.State entity)
        {
            return await _repository.Update(entity);
        }
    }
}
