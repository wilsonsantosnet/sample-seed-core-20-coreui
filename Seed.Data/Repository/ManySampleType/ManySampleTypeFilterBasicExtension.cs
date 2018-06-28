using Seed.Domain.Entitys;
using Seed.Domain.Filter;
using System.Linq;

namespace Seed.Data.Repository
{
    public static class ManySampleTypeFilterBasicExtension
    {

        public static IQueryable<ManySampleType> WithBasicFilters(this IQueryable<ManySampleType> queryBase, ManySampleTypeFilter filters)
        {
            var queryFilter = queryBase;

			if (filters.Ids.IsSent())
                queryFilter = queryFilter.Where(_ => filters.GetIds().Contains(_.SampleId));

            if (filters.SampleId.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.SampleId == filters.SampleId);
			}
            if (filters.SampleTypeId.IsSent()) 
			{ 
				
				queryFilter = queryFilter.Where(_=>_.SampleTypeId == filters.SampleTypeId);
			}


            return queryFilter;
        }

		
    }
}