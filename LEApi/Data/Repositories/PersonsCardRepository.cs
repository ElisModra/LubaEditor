

using LEApi.Entities;
using LEApi.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace LEApi.Data.Repositories
{
    public class PersonsCardRepository : RepositoryBase<PersonsCard>, IPersonsCardRepository
    {

        public PersonsCardRepository(DataContext context) : base(context)
        {

        } 
        public async Task<IEnumerable<PersonsCard>> GetAllAsync()
        {
            return await _context.PersonsCards.ToListAsync();
        }

        public async Task<PersonsCard> GetByIdAsync(int id)
        {
            return await _context.PersonsCards.FindAsync(id);
        }

    }
}