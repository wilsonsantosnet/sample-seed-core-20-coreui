using Common.Domain.Interfaces;
using Seed.Domain.Entitys;
using Seed.Domain.Filter;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Seed.Domain.Interfaces.Repository
{
    public interface IManySampleTypeRepository : IRepository<ManySampleType>
    {
        IQueryable<ManySampleType> GetBySimplefilters(ManySampleTypeFilter filters);

        Task<ManySampleType> GetById(ManySampleTypeFilter manysampletype);
		
        Task<IEnumerable<dynamic>> GetDataItem(ManySampleTypeFilter filters);

        Task<IEnumerable<dynamic>> GetDataListCustom(ManySampleTypeFilter filters);

		Task<PaginateResult<dynamic>> GetDataListCustomPaging(ManySampleTypeFilter filters);

        Task<dynamic> GetDataCustom(ManySampleTypeFilter filters);
    }
}
