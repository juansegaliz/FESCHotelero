using Domain.Entities;
using Infrastructure.Data.DbContexts;
using Infrastructure.Data.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Data.Repositories
{
    public class Repository<T> : IRepository<T> where T : class
    {
        private readonly MySQLDbContext _context;
        private readonly DbSet<T> _dbSet;

        public Repository(MySQLDbContext context) 
        {
            _context = context;
            _dbSet = _context.Set<T>();
        }

        public async Task<T?> Create(T entity)
        {
            await _dbSet.AddAsync(entity);
            return (await _context.SaveChangesAsync() > 0) ? entity : null;
        }

        public async Task Delete(int id)
        {
            var data = await _dbSet.FindAsync(id);
            if (data == null) return;
            _context.Entry(data).State = EntityState.Deleted;
            await _context.SaveChangesAsync();
        }

        public async Task<List<T>> GetByCondition(Expression<Func<T, bool>> predicate)
        {
            return await _dbSet.Where(predicate).ToListAsync();
        }

        public async Task<bool> Update(T entity)
        {
            _context.Entry(entity).State = EntityState.Modified;
            return (await _context.SaveChangesAsync() > 0);
        }

        public async Task<T?> Get(int id)
        {
            return await _dbSet.FindAsync(id);
        }

        public async Task<List<T>> GetAll()
        {
            return await _dbSet.ToListAsync();
        }
    }
}
