using Common.Domain.Base;
using Common.Domain.Interfaces;
using Common.Domain.Model;
using Seed.Domain.Entitys;
using Seed.Domain.Filter;
using Seed.Domain.Interfaces.Repository;
using Seed.Domain.Validations;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Seed.Domain.Services
{
    public class SampleTagServiceBase : ServiceBase<SampleTag>
    {
        protected readonly ISampleTagRepository _rep;

        public SampleTagServiceBase(ISampleTagRepository rep, ICache cache, CurrentUser user)
            : base(cache)
        {
            this._rep = rep;
			this._user = user;
        }

        public virtual async Task<SampleTag> GetOne(SampleTagFilter filters)
        {
            return await this._rep.GetById(filters);
        }

        public virtual async Task<IEnumerable<SampleTag>> GetByFilters(SampleTagFilter filters)
        {
            var queryBase = this._rep.GetBySimplefilters(filters);
            return await this._rep.ToListAsync(queryBase);
        }

        public virtual Task<PaginateResult<SampleTag>> GetByFiltersPaging(SampleTagFilter filters)
        {
            var queryBase = this._rep.GetBySimplefilters(filters);
            return this._rep.PagingAndDefineFields(filters, queryBase);
        }

        public override void Remove(SampleTag sampletag)
        {
            this._rep.Remove(sampletag);
        }

        public virtual Summary GetSummary(PaginateResult<SampleTag> paginateResult)
        {
            return new Summary
            {
                Total = paginateResult.TotalCount,
				PageSize = paginateResult.PageSize,
            };
        }

        public virtual ValidationSpecificationResult GetDomainValidation(FilterBase filters = null)
        {
            return this._validationResult;
        }

        public virtual ConfirmEspecificationResult GetDomainConfirm(FilterBase filters = null)
        {
            return this._validationConfirm;
        }

        public virtual WarningSpecificationResult GetDomainWarning(FilterBase filters = null)
        {
            return this._validationWarning;
        }

        public override async Task<SampleTag> Save(SampleTag sampletag, bool questionToContinue = false)
        {
			var sampletagOld = await this.GetOne(new SampleTagFilter { SampletagId = sampletag.SampletagId });
			var sampletagOrchestrated = await this.DomainOrchestration(sampletag, sampletagOld);

            if (questionToContinue)
            {
                if (this.Continue(sampletagOrchestrated, sampletagOld) == false)
                    return sampletagOrchestrated;
            }

            return this.SaveWithValidation(sampletagOrchestrated, sampletagOld);
        }

        public override async Task<SampleTag> SavePartial(SampleTag sampletag, bool questionToContinue = false)
        {
            var sampletagOld = await this.GetOne(new SampleTagFilter { SampletagId = sampletag.SampletagId });
			var sampletagOrchestrated = await this.DomainOrchestration(sampletag, sampletagOld);

            if (questionToContinue)
            {
                if (this.Continue(sampletagOrchestrated, sampletagOld) == false)
                    return sampletagOrchestrated;
            }

            return SaveWithOutValidation(sampletagOrchestrated, sampletagOld);
        }

        protected override SampleTag SaveWithOutValidation(SampleTag sampletag, SampleTag sampletagOld)
        {
            sampletag = this.SaveDefault(sampletag, sampletagOld);

			if (!sampletag.IsValid())
            {
                this._validationResult = sampletag.GetDomainValidation();
                return sampletag;
            }

            this._validationResult = new ValidationSpecificationResult
            {
                Errors = new List<string>(),
                IsValid = true,
                Message = "Alterado com sucesso."
            };

            this._cacheHelper.ClearCache();
            return sampletag;

        }

		protected override SampleTag SaveWithValidation(SampleTag sampletag, SampleTag sampletagOld)
        {
            if (!this.DataAnnotationIsValid())
                return sampletag;

            if (!sampletag.IsValid())
            {
                this._validationResult = sampletag.GetDomainValidation();
                return sampletag;
            }

            this.Specifications(sampletag);

            if (!this._validationResult.IsValid)
                return sampletag;
            
            sampletag = this.SaveDefault(sampletag, sampletagOld);
            this._validationResult.Message = "Inserido com sucesso.";

            this._cacheHelper.ClearCache();
            return sampletag;
        }

		protected virtual void Specifications(SampleTag sampletag)
        {
            this._validationResult  = new SampleTagAptoParaCadastroValidation(this._rep).Validate(sampletag);
			this._validationWarning  = new SampleTagAptoParaCadastroWarning(this._rep).Validate(sampletag);
        }

        protected virtual SampleTag SaveDefault(SampleTag sampletag, SampleTag sampletagOld)
        {
			

            var isNew = sampletagOld.IsNull();			
            if (isNew)
                sampletag = this.AddDefault(sampletag);
            else
				sampletag = this.UpdateDefault(sampletag);

            return sampletag;
        }
		
        protected virtual SampleTag AddDefault(SampleTag sampletag)
        {
            sampletag = this._rep.Add(sampletag);
            return sampletag;
        }

		protected virtual SampleTag UpdateDefault(SampleTag sampletag)
        {
            sampletag = this._rep.Update(sampletag);
            return sampletag;
        }
				
		public virtual async Task<SampleTag> GetNewInstance(dynamic model, CurrentUser user)
        {
            return await Task.Run(() =>
            {
                return new SampleTag.SampleTagFactory().GetDefaultInstance(model, user);
            });
         }

		public virtual async Task<SampleTag> GetUpdateInstance(dynamic model, CurrentUser user)
        {
            return await Task.Run(() =>
            {
                return new SampleTag.SampleTagFactory().GetDefaultInstance(model, user);
            });
         }
    }
}
