using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LEApi.Entities
{
    public abstract class InfoStampBase
    {
        public DateTime Created { get; set; }

        public DateTime LastUpdate { get; set; }

        public AppUser LastUpdateBy { get; set; }
    }
}