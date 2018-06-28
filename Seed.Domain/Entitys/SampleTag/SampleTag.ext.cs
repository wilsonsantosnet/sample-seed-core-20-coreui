using Seed.Domain.Validations;
using Common.Domain.Model;
using System.Collections.Generic;

namespace Seed.Domain.Entitys
{
    public class SampleTag : SampleTagBase
    {

        public virtual Sample Sample { get; set; }

        public SampleTag()
        {

        }

        public SampleTag(int sampletagid, int sampleid, string tag) :
            base(sampletagid, sampleid, tag)
        {

        }

        public class SampleTagFactory : SampleTagFactoryBase
        {
            public SampleTag GetDefaultInstance(dynamic data, CurrentUser user)
            {
                return GetDefaultInstanceBase(data, user);
            }
        }

        public bool IsValid()
        {
            base._validationResult = new SampleTagEstaConsistenteValidation().Validate(this);
            return base._validationResult.IsValid;

        }



    }
}
