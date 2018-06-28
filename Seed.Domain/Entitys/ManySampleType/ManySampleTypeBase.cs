using Common.Domain.Base;
using Common.Domain.Model;
using System;

namespace Seed.Domain.Entitys
{
    public class ManySampleTypeBase : DomainBase
    {
        public ManySampleTypeBase()
        {

        }
        public ManySampleTypeBase(int sampleid, int sampletypeid)
        {
            this.SampleId = sampleid;
            this.SampleTypeId = sampletypeid;

        }

		public class ManySampleTypeFactoryBase
        {
            public virtual ManySampleType GetDefaultInstanceBase(dynamic data, CurrentUser user)
            {
                var construction = new ManySampleType(data.SampleId,
                                        data.SampleTypeId);



				construction.SetConfirmBehavior(data.ConfirmBehavior);
				construction.SetAttributeBehavior(data.AttributeBehavior);
        		return construction;
            }

        }

        public virtual int SampleId { get; protected set; }
        public virtual int SampleTypeId { get; protected set; }



    }
}
