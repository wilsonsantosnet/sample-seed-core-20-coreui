using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Seed.Domain.Entitys;

namespace Seed.Data.Map
{
    public abstract class ManySampleTypeMapBase 
    {
        protected abstract void CustomConfig(EntityTypeBuilder<ManySampleType> type);

        public ManySampleTypeMapBase(EntityTypeBuilder<ManySampleType> type)
        {
            
            type.ToTable("ManySampleType");
            type.Property(t => t.SampleId).HasColumnName("SampleId");
            type.Property(t => t.SampleTypeId).HasColumnName("SampleTypeId");
           



            type.HasKey(d => new { d.SampleId,d.SampleTypeId, }); 

			CustomConfig(type);
        }
		
    }
}