using Common.Domain.Model;
using Seed.Domain.Entitys;
using Seed.Domain.Filter;
using System.Linq;

namespace Seed.Data.Repository
{
    public static class SampleTagOrderCustomExtension
    {

        public static IQueryable<SampleTag> OrderByDomain(this IQueryable<SampleTag> queryBase, SampleTagFilter filters)
        {
            return queryBase.OrderBy(_ => _.SampletagId);
        }

    }
}

