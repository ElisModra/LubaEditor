using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LEApi.DTOs
{
    public class AppUserDto
    {
         public int Id { get; set; }

        public string UserName { get; set; }

        public string FirstName { get; set; }   

        public string LastName { get; set; }    

        public DateTime LastActive { get; set; }
    }
}