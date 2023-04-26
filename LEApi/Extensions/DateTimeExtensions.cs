using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;

namespace LEApi.Extensions
{
    public static class DateTimeExtensions
    {

        public static int CalculateAge(this DateOnly dateOfBirth)
        {
            var today = DateOnly.FromDateTime(DateTime.UtcNow);
            var age = today.Year - dateOfBirth.Year;

            if(dateOfBirth > today.AddYears(-age)) age--;

            return age;
        }
    }
}