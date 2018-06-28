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
        private IManySampleTypeRepository _repManySampleType;

        public SampleService(ISampleRepository rep, ISampleTagRepository repSampleTag, IManySampleTypeRepository repManySampleType, ICache cache, CurrentUser user) 
            : base(rep, cache, user)
        {

            this._repManySampleType = repManySampleType;
            this._repSampleTag = repSampleTag;
        }

        public override async Task<Sample> DomainOrchestration(Sample entity, Sample entityOld)
        {
            if (entity.AttributeBehavior == "ComplexSave")
            {
                this._repSampleTag.RemoveRange(entityOld.CollectionSampleTag);
                this._repManySampleType.RemoveRange(entityOld.CollectionManySampleType);

                await this._repSampleTag.CommitAsync();
            }

            return await base.DomainOrchestration(entity, entityOld);
        }

    }
}
