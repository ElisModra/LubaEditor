
using System.ComponentModel.DataAnnotations;

namespace LEApi.DTOs
{
    public class RegisterDto
    {

        [Required]
         [StringLength(256, MinimumLength = 5)]
        public string Username { get; set; }

        [Required]
        [StringLength(256, MinimumLength = 8)]
        public string Password { get; set; }

        [Required]
         [StringLength(256, MinimumLength = 2)]
        public string FirstName { get; set; }

        [Required]
         [StringLength(256, MinimumLength = 2)]
        public string LastName { get; set; }
    }
}