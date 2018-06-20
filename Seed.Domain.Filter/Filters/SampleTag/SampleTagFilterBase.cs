using Common.Domain.Base;
using System;

namespace Seed.Domain.Filter
{
    public class SampleTagFilterBase : FilterBase
    {

        public virtual int SampletagId { get; set;} 
        public virtual int SampleId { get; set;} 
        public virtual string Tag { get; set;} 


    }
}
