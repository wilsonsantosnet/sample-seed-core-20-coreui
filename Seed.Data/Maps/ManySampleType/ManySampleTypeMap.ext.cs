using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Seed.Domain.Entitys;

namespace Seed.Data.Map
{
    public class ManySampleTypeMap : ManySampleTypeMapBase
    {
        public ManySampleTypeMap(EntityTypeBuilder<ManySampleType> type) : base(type)
        {

        }

        protected override void CustomConfig(EntityTypeBuilder<ManySampleType> type)
        {

        }

    }
}