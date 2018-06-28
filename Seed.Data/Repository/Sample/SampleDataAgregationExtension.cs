using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Query;
using Seed.Domain.Entitys;
using Seed.Domain.Filter;
using System.Linq;

namespace Seed.Data.Repository
{
    public static class SampleDataAgregationExtension
    {

        public static IIncludableQueryable<Sample, Sample> AndCpmplexAgregation(this IQueryable<Sample> source, SampleFilter filters)
        {
            return source
                    .Include(_ => _.CollectionSampleTag)
                    .ThenInclude(_ => _.Sample);
        }


    }
}