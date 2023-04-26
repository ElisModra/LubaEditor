using AutoMapper;
using LEApi.DTOs;
using LEApi.Entities;

namespace LEApi.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<AppUser, AppUserDto>();
            CreateMap<Person, PersonDto>();
            CreateMap<PersonsCard,PersonsCardDto>();
        }
    }
}