using System.Threading.Tasks;
using Common.Domain.Interfaces;
using Common.Domain.Model;
using Seed.Domain.Entitys;
using Seed.Domain.Interfaces.Repository;
using Seed.Domain.Interfaces.Services;

namespace Seed.Domain.Services
{
    public class SampleService : SampleServiceBase, ISampleService
    {
        private ISampleTagRepository _repSampleTag;

        public SampleService(ISampleRepository rep, ISampleTagRepository repSampleTag, ICache cache, CurrentUser user) 
            : base(rep, cache, user)
        {

            this._repSampleTag = repSampleTag;
        }

        public override Task<Sample> DomainOrchestration(Sample entity, Sample entityOld)
        {
            if (entity.AttributeBehavior == "ComplexSave")
            {
                this._repSampleTag.RemoveRange(entityOld.CollectionSampleTag);
            }

            return base.DomainOrchestration(entity, entityOld);
        }

    }
}
