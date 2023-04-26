
using System.Collections;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using LEApi.Enums;
using LEApi.Extensions;

namespace LEApi.Entities
{
    public class Person : InfoStampBase
    {
        public int Id { get; set; }

        [Required]
         public string FirstName { get; set; }

        [Required]
         public string LastName { get; set; }

        [Required]
         public DateOnly DateOfBirth { get; set; }


         public string Gender { get; set; }

         public string Address { get; set; }

         public ItemAudienceEnum Audience { get; set; }

         public ICollection<PersonsCard> PersonsCards { get; set; }

         public int GetAge()
         {
            return DateOfBirth.CalculateAge();
         }




    }
}