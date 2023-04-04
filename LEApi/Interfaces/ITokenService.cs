
using LEApi.Entities;

namespace LEApi.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(AppUser user);
    }
}