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
    public class RepositoryUser : IRepositoryUser
    {
        private readonly IRepository<User> _repository;
        public RepositoryUser(IRepository<User> repository) 
        {
            _repository = repository;
        }

        public async Task<Scaffold.User?> Create(Scaffold.User entity)
        {
            return await _repository.Create(entity);
        }

        public async Task Delete(int id)
        {
            await _repository.Delete(id);
        }

        public async Task<Scaffold.User> Get(int id)
        {
            return await _repository.Get(id);
        }

        public async Task<List<Scaffold.User>> GetAll()
        {
            return await _repository.GetAll();
        }

        public async Task<List<Scaffold.User>> GetByCondition(Expression<Func<Scaffold.User, bool>> predicate)
        {
            return await _repository.GetByCondition(predicate);
        }

        public async Task<Scaffold.User> GetUserByEmail(string email)
        {
            return (await _repository.GetByCondition(r => r.Email == email)).FirstOrDefault();
        }

        public async Task<bool> Update(Scaffold.User entity)
        {
            return await _repository.Update(entity);
        }
    }
}
