using Common.Domain.Base;
using System;

namespace Seed.Domain.Filter
{
    public class ManySampleTypeFilterBase : FilterBase
    {

        public virtual int SampleId { get; set;} 
        public virtual int SampleTypeId { get; set;} 


    }
}
