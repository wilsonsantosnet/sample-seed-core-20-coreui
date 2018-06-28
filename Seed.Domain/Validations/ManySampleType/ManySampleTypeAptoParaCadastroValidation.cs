using Common.Validation;
using Seed.Domain.Entitys;
using Seed.Domain.Interfaces.Repository;

namespace Seed.Domain.Validations
{
    public class ManySampleTypeAptoParaCadastroValidation : ValidatorSpecification<ManySampleType>
    {
        public ManySampleTypeAptoParaCadastroValidation(IManySampleTypeRepository rep)
        {
            //base.Add(Guid.NewGuid().ToString(), new Rule<ManySampleType>(Instance of RuleClassName,"message for user"));
        }

    }
}
