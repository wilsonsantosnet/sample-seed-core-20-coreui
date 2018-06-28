using Common.Validation;
using Seed.Domain.Entitys;

namespace Seed.Domain.Validations
{
    public class ManySampleTypeEstaConsistenteValidation : ValidatorSpecification<ManySampleType>
    {
        public ManySampleTypeEstaConsistenteValidation()
        {
            //base.Add(Guid.NewGuid().ToString(), new Rule<ManySampleType>(Instance of RuleClassName,"message for user"));
        }

    }
}
