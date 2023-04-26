
using LEApi.Entities;

namespace LEApi.Interfaces
{
    public interface IPersonRepository
    {
        void Update(Person person);

        Task<bool> SaveAllAsync();
        Task<IEnumerable<Person>> GetAllAsync();

        Task<Person> GetByIdAsync(int id);

    }
}