
using LEApi.Entities;
using Microsoft.EntityFrameworkCore;

namespace LEApi.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
            
        }

        public DbSet<AppUser> Users { get; set; }
        
    }
}