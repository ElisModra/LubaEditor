
using LEApi.Entities;

namespace LEApi.Interfaces
{
    public interface IPersonsCardRepository
    {
        void Update(PersonsCard person);

        Task<bool> SaveAllAsync();
        Task<IEnumerable<PersonsCard>> GetAllAsync();

        Task<PersonsCard> GetByIdAsync(int id);
    }
}