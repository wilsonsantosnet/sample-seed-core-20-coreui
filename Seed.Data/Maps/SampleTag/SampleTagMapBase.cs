using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Seed.Domain.Entitys;

namespace Seed.Data.Map
{
    public abstract class SampleTagMapBase 
    {
        protected abstract void CustomConfig(EntityTypeBuilder<SampleTag> type);

        public SampleTagMapBase(EntityTypeBuilder<SampleTag> type)
        {
            
            type.ToTable("SampleTag");
            type.Property(t => t.SampletagId).HasColumnName("SampletagId");
           

            type.Property(t => t.SampleId).HasColumnName("SampleId");
            type.Property(t => t.Tag).HasColumnName("Tag").HasColumnType("varchar(50)");


            type.HasKey(d => new { d.SampletagId, }); 

			CustomConfig(type);
        }
		
    }
}