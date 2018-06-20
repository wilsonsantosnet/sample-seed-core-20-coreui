using Common.Validation;
using Seed.Domain.Entitys;

namespace Seed.Domain.Validations
{
    public class SampleTagEstaConsistenteValidation : ValidatorSpecification<SampleTag>
    {
        public SampleTagEstaConsistenteValidation()
        {
            //base.Add(Guid.NewGuid().ToString(), new Rule<SampleTag>(Instance of RuleClassName,"message for user"));
        }

    }
}
