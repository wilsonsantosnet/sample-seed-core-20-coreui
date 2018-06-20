using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Seed.Domain.Entitys;

namespace Seed.Data.Map
{
    public class SampleTagMap : SampleTagMapBase
    {
        public SampleTagMap(EntityTypeBuilder<SampleTag> type) : base(type)
        {

        }

        protected override void CustomConfig(EntityTypeBuilder<SampleTag> type)
        {

        }

    }
}