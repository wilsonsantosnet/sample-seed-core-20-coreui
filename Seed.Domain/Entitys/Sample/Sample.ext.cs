using Seed.Domain.Validations;
using System;
using Common.Domain.Model;
using System.Collections.Generic;

namespace Seed.Domain.Entitys
{
    public class Sample : SampleBase
    {
        public virtual ICollection<SampleTag> CollectionSampleTag { get; protected set; }
        public virtual ICollection<ManySampleType> CollectionManySampleType { get; protected set; }

        public Sample()
        {

        }

        public Sample(int sampleid, string name, int sampletypeid) :
            base(sampleid, name, sampletypeid)
        {

        }

		public class SampleFactory : SampleFactoryBase
        {
            public Sample GetDefaultInstance(dynamic data, CurrentUser user)
            {
                Sample result = GetDefaultInstanceBase(data, user);
                result.SetCollectionSampleTag(data.CollectionSampleTag);
                result.SetCollectionManySampleType(data.CollectionManySampleType);
                return result;
            }
        }

        public bool IsValid()
        {
            base._validationResult = new SampleEstaConsistenteValidation().Validate(this);
            return base._validationResult.IsValid;

        }

        public void SetCollectionSampleTag(dynamic data)
        {
            if (data != null)
            {
                var list = new List<SampleTag>();
                foreach (var item in data)
                    list.Add(new SampleTag(0, 0, item.Tag));

                this.CollectionSampleTag = list;
            }
        }

        public void SetCollectionManySampleType(dynamic data)
        {
            if (data != null)
            {
                var list = new List<ManySampleType>();
                foreach (var item in data)
                    list.Add(new ManySampleType(0, item.SampleTypeId));

                this.CollectionManySampleType = list;
            }
        }

    }
}
