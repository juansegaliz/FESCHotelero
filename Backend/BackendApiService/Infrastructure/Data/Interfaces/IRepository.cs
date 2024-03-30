using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Data.Interfaces
{
    public interface IRepository<T>
    {
        Task<T?> Create(T entity);
        Task Delete(int id);
        Task<T?> Get(int id);
        Task<List<T>> GetAll();
        Task<List<T>> GetByCondition(Expression<Func<T, bool>> predicate);
        Task<bool> Update(T entity);
    }
}
