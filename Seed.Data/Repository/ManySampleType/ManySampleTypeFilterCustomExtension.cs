using Common.Domain.Model;
using Seed.Domain.Entitys;
using Seed.Domain.Filter;
using System.Linq;

namespace Seed.Data.Repository
{
    public static class ManySampleTypeFilterCustomExtension
    {

        public static IQueryable<ManySampleType> WithCustomFilters(this IQueryable<ManySampleType> queryBase, ManySampleTypeFilter filters)
        {
            var queryFilter = queryBase;


            return queryFilter;
        }

		public static IQueryable<ManySampleType> WithLimitTenant(this IQueryable<ManySampleType> queryBase, CurrentUser user)
        {
            var tenantId = user.GetTenantId<int>();
			var queryFilter = queryBase;

            return queryFilter;
        }

    }
}

