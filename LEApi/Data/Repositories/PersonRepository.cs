
using LEApi.Entities;
using LEApi.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace LEApi.Data.Repositories
{
    public class PersonRepository : RepositoryBase<Person>, IPersonRepository
    {

        public PersonRepository(DataContext context) : base(context)
        {

        }

        public async Task<Person> GetByIdAsync(int id)
        {
            return await _context.Persons.FindAsync(id);
        }

        public async Task<IEnumerable<Person>> GetAllAsync()
        {
            return await _context.Persons.ToListAsync();
        }

    }
}