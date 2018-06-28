using Common.Validation;
using Seed.Domain.Entitys;
using Seed.Domain.Interfaces.Repository;

namespace Seed.Domain.Validations
{
    public class ManySampleTypeAptoParaCadastroWarning : WarningSpecification<ManySampleType>
    {
        public ManySampleTypeAptoParaCadastroWarning(IManySampleTypeRepository rep)
        {
            //base.Add(Guid.NewGuid().ToString(), new Rule<ManySampleType>(Instance of RuleClassName,"message for user"));
        }

    }
}
