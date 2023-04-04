using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LEApi.DTOs
{
    public class UserDto
    {
        public string Username { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Token { get; set; }
    }
}