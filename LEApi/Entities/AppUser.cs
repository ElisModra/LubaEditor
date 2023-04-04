
using System.ComponentModel.DataAnnotations;


namespace LEApi.Entities
{
    public class AppUser
    {
        public int Id { get; set; }

        [Required]
        public string UserName { get; set; }

        public string FirstName { get; set; }   

        public string LastName { get; set; }    

        [Required]
        public byte[] PasswordHash { get; set; }

        [Required]
        public byte[] PasswordSalt { get; set; }


    }
}