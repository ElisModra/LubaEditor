using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LEApi.Enums;

namespace LEApi.DTOs
{
    public class PersonsCardDto
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public ItemAudienceEnum Audience { get; set; }

        public List<PersonDto> Persons { get; set; }
    }
}