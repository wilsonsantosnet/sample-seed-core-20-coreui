using Common.Domain.Base;
using Common.Domain.Model;
using System;

namespace Seed.Domain.Entitys
{
    public class SampleTagBase : DomainBase
    {
        public SampleTagBase()
        {

        }
        public SampleTagBase(int sampletagid, int sampleid, string tag)
        {
            this.SampletagId = sampletagid;
            this.SampleId = sampleid;
            this.Tag = tag;

        }

		public class SampleTagFactoryBase
        {
            public virtual SampleTag GetDefaultInstanceBase(dynamic data, CurrentUser user)
            {
                var construction = new SampleTag(data.SampletagId,
                                        data.SampleId,
                                        data.Tag);



				construction.SetConfirmBehavior(data.ConfirmBehavior);
				construction.SetAttributeBehavior(data.AttributeBehavior);
        		return construction;
            }

        }

        public virtual int SampletagId { get; protected set; }
        public virtual int SampleId { get; protected set; }
        public virtual string Tag { get; protected set; }



    }
}
