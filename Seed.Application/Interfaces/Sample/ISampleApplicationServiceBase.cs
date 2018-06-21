using Common.Domain.Interfaces;
using Seed.Dto;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace Seed.Application.Interfaces
{
    public interface ISampleApplicationServiceBase : IApplicationServiceBase<SampleDto>
    {
		Task<System.Collections.Generic.List<SampleDto>> ImportNew(SampleDto model);



    }
}
