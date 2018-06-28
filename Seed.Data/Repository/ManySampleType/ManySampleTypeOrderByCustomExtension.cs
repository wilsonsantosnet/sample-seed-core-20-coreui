using Common.Domain.Model;
using Seed.Domain.Entitys;
using Seed.Domain.Filter;
using System.Linq;

namespace Seed.Data.Repository
{
    public static class ManySampleTypeOrderCustomExtension
    {

        public static IQueryable<ManySampleType> OrderByDomain(this IQueryable<ManySampleType> queryBase, ManySampleTypeFilter filters)
        {
            return queryBase;
        }

    }
}

