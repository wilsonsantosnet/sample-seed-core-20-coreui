using Common.Domain.Base;
using Common.Domain.Interfaces;
using Common.Dto;
using Seed.Application.Interfaces;
using Seed.Domain.Entitys;
using Seed.Domain.Filter;
using Seed.Domain.Interfaces.Services;
using Seed.Dto;
using System.Threading.Tasks;
using Common.Domain.Model;
using System.Collections.Generic;

namespace Seed.Application
{
    public class SampleTagApplicationServiceBase : ApplicationServiceBase<SampleTag, SampleTagDto, SampleTagFilter>, ISampleTagApplicationService
    {
        protected readonly ValidatorAnnotations<SampleTagDto> _validatorAnnotations;
        protected readonly ISampleTagService _service;
		protected readonly CurrentUser _user;

        public SampleTagApplicationServiceBase(ISampleTagService service, IUnitOfWork uow, ICache cache, CurrentUser user) :
            base(service, uow, cache)
        {
            base.SetTagNameCache("SampleTag");
            this._validatorAnnotations = new ValidatorAnnotations<SampleTagDto>();
            this._service = service;
			this._user = user;
        }

       protected override async Task<SampleTag> MapperDtoToDomain<TDS>(TDS dto)
        {
			return await Task.Run(() =>
            {
				var _dto = dto as SampleTagDtoSpecialized;
				this._validatorAnnotations.Validate(_dto);
				this._serviceBase.AddDomainValidation(this._validatorAnnotations.GetErros());
				var domain = this._service.GetNewInstance(_dto, this._user);
				return domain;
			});
        }

		protected override async Task<IEnumerable<SampleTag>> MapperDtoToDomain<TDS>(IEnumerable<TDS> dtos)
        {
			var domains = new List<SampleTag>();
			foreach (var dto in dtos)
			{
				var _dto = dto as SampleTagDtoSpecialized;
				this._validatorAnnotations.Validate(_dto);
				this._serviceBase.AddDomainValidation(this._validatorAnnotations.GetErros());
				var domain = await this._service.GetNewInstance(_dto, this._user);
				domains.Add(domain);
			}
			return domains;
			
        }


        protected override async Task<SampleTag> AlterDomainWithDto<TDS>(TDS dto)
        {
			return await Task.Run(() =>
            {
				var _dto = dto as SampleTagDto;
				var domain = this._service.GetUpdateInstance(_dto, this._user);
				return domain;
			});
        }



    }
}
