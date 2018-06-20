using Common.Validation;
using Seed.Domain.Entitys;
using Seed.Domain.Interfaces.Repository;

namespace Seed.Domain.Validations
{
    public class SampleTagAptoParaCadastroValidation : ValidatorSpecification<SampleTag>
    {
        public SampleTagAptoParaCadastroValidation(ISampleTagRepository rep)
        {
            //base.Add(Guid.NewGuid().ToString(), new Rule<SampleTag>(Instance of RuleClassName,"message for user"));
        }

    }
}
