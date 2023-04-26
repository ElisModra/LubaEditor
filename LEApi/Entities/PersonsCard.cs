
using LEApi.Enums;

namespace LEApi.Entities
{
    public class PersonsCard : InfoStampBase
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public ItemAudienceEnum Audience { get; set; }

        public ICollection<Person> Persons { get; set; }
    }
}