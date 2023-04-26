using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LEApi.Enums;

namespace LEApi.DTOs
{
    public class PersonDto
    {
         public int Id { get; set; }

         public string FirstName { get; set; }

         public string LastName { get; set; }

         public DateOnly DateOfBirth { get; set; }


         public string Gender { get; set; }

         public string Address { get; set; }

         public ItemAudienceEnum Audience { get; set; }

         public List<PersonsCardDto> PersonsCards { get; set; }

        public int Age { get; set; }



    }
}