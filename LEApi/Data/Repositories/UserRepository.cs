
using LEApi.Entities;
using LEApi.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace LEApi.Data.Repositories
{
    public class UserRepository : RepositoryBase<AppUser>, IUserRepository
    {

        public UserRepository(DataContext context) : base(context)
        {
        }
        public async Task<AppUser> GetUserByIdAsync(int id)
        {
            return await _context.Users.FindAsync(id);
        }

        public async Task<AppUser> GetUserByUsername(string username)
        {
            return await _context.Users.SingleOrDefaultAsync(x => x.UserName == username);
        }

        public async Task<IEnumerable<AppUser>> GetUsersAsync()
        {
            return await _context.Users.ToListAsync();
        }

    }
}