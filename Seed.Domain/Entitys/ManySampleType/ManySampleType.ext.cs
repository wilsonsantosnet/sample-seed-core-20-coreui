using Seed.Domain.Validations;
using System;
using Common.Domain.Model;

namespace Seed.Domain.Entitys
{
    public class ManySampleType : ManySampleTypeBase
    {

        public ManySampleType()
        {

        }

        public ManySampleType(int sampleid, int sampletypeid) :
            base(sampleid, sampletypeid)
        {

        }

		public class ManySampleTypeFactory : ManySampleTypeFactoryBase
        {
            public ManySampleType GetDefaultInstance(dynamic data, CurrentUser user)
            {
				return GetDefaultInstanceBase(data, user);
            }
        }

        public bool IsValid()
        {
            base._validationResult = new ManySampleTypeEstaConsistenteValidation().Validate(this);
            return base._validationResult.IsValid;

        }
        
    }
}
