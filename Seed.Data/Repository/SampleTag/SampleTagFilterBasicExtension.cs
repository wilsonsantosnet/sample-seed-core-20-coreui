using Seed.Domain.Entitys;
using Seed.Domain.Filter;
using System.Linq;

namespace Seed.Data.Repository
{
    public static class SampleTagFilterBasicExtension
    {

        public static IQueryable<SampleTag> WithBasicFilters(this IQueryable<SampleTag> queryBase, SampleTagFilter filters)
        {
            var queryFilter = queryBase;

			if (filters.Ids.IsSent())
                queryFilter = queryFilter.Where(_ => filters.GetIds().Contains(_.SampletagId));

            if (filters.SampletagId.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.SampletagId == filters.SampletagId);
			}
            if (filters.SampleId.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.SampleId == filters.SampleId);
			}
            if (filters.Tag.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.Tag.Contains(filters.Tag));
			}


            return queryFilter;
        }

		
    }
}