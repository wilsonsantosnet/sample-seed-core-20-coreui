using Common.Domain.Model;
using Seed.Domain.Entitys;
using Seed.Domain.Filter;
using System.Linq;

namespace Seed.Data.Repository
{
    public static class SampleTagFilterCustomExtension
    {

        public static IQueryable<SampleTag> WithCustomFilters(this IQueryable<SampleTag> queryBase, SampleTagFilter filters)
        {
            var queryFilter = queryBase;


            return queryFilter;
        }

		public static IQueryable<SampleTag> WithLimitTenant(this IQueryable<SampleTag> queryBase, CurrentUser user)
        {
            var tenantId = user.GetTenantId<int>();
			var queryFilter = queryBase;

            return queryFilter;
        }

    }
}

