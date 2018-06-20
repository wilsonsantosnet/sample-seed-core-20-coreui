using Common.Domain.Interfaces;
using Seed.Domain.Entitys;
using Seed.Domain.Filter;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Seed.Domain.Interfaces.Repository
{
    public interface ISampleTagRepository : IRepository<SampleTag>
    {
        IQueryable<SampleTag> GetBySimplefilters(SampleTagFilter filters);

        Task<SampleTag> GetById(SampleTagFilter sampletag);
		
        Task<IEnumerable<dynamic>> GetDataItem(SampleTagFilter filters);

        Task<IEnumerable<dynamic>> GetDataListCustom(SampleTagFilter filters);

		Task<PaginateResult<dynamic>> GetDataListCustomPaging(SampleTagFilter filters);

        Task<dynamic> GetDataCustom(SampleTagFilter filters);
    }
}
