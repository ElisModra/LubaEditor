using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace LEApi.Data.Repositories
{
    public abstract class RepositoryBase<T>
    {
        protected readonly DataContext _context;
        public RepositoryBase(DataContext context)
        {
            this._context = context;
            
        }

        public async Task<bool> SaveAllAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public void Update(T item)
        {
            _context.Entry(item).State = EntityState.Modified;
        }
    }
}