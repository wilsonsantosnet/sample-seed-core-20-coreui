using Common.Validation;
using Seed.Domain.Entitys;
using Seed.Domain.Interfaces.Repository;

namespace Seed.Domain.Validations
{
    public class SampleTagAptoParaCadastroWarning : WarningSpecification<SampleTag>
    {
        public SampleTagAptoParaCadastroWarning(ISampleTagRepository rep)
        {
            //base.Add(Guid.NewGuid().ToString(), new Rule<SampleTag>(Instance of RuleClassName,"message for user"));
        }

    }
}
