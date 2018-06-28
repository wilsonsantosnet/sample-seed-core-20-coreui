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
    public class ManySampleTypeServiceBase : ServiceBase<ManySampleType>
    {
        protected readonly IManySampleTypeRepository _rep;

        public ManySampleTypeServiceBase(IManySampleTypeRepository rep, ICache cache, CurrentUser user)
            : base(cache)
        {
            this._rep = rep;
			this._user = user;
        }

        public virtual async Task<ManySampleType> GetOne(ManySampleTypeFilter filters)
        {
            return await this._rep.GetById(filters);
        }

        public virtual async Task<IEnumerable<ManySampleType>> GetByFilters(ManySampleTypeFilter filters)
        {
            var queryBase = this._rep.GetBySimplefilters(filters);
            return await this._rep.ToListAsync(queryBase);
        }

        public virtual Task<PaginateResult<ManySampleType>> GetByFiltersPaging(ManySampleTypeFilter filters)
        {
            var queryBase = this._rep.GetBySimplefilters(filters);
            return this._rep.PagingAndDefineFields(filters, queryBase);
        }

        public override void Remove(ManySampleType manysampletype)
        {
            this._rep.Remove(manysampletype);
        }

        public virtual Summary GetSummary(PaginateResult<ManySampleType> paginateResult)
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

        public override async Task<ManySampleType> Save(ManySampleType manysampletype, bool questionToContinue = false)
        {
			var manysampletypeOld = await this.GetOne(new ManySampleTypeFilter { SampleId = manysampletype.SampleId, SampleTypeId = manysampletype.SampleTypeId });
			var manysampletypeOrchestrated = await this.DomainOrchestration(manysampletype, manysampletypeOld);

            if (questionToContinue)
            {
                if (this.Continue(manysampletypeOrchestrated, manysampletypeOld) == false)
                    return manysampletypeOrchestrated;
            }

            return this.SaveWithValidation(manysampletypeOrchestrated, manysampletypeOld);
        }

        public override async Task<ManySampleType> SavePartial(ManySampleType manysampletype, bool questionToContinue = false)
        {
            var manysampletypeOld = await this.GetOne(new ManySampleTypeFilter { SampleId = manysampletype.SampleId, SampleTypeId = manysampletype.SampleTypeId });
			var manysampletypeOrchestrated = await this.DomainOrchestration(manysampletype, manysampletypeOld);

            if (questionToContinue)
            {
                if (this.Continue(manysampletypeOrchestrated, manysampletypeOld) == false)
                    return manysampletypeOrchestrated;
            }

            return SaveWithOutValidation(manysampletypeOrchestrated, manysampletypeOld);
        }

        protected override ManySampleType SaveWithOutValidation(ManySampleType manysampletype, ManySampleType manysampletypeOld)
        {
            manysampletype = this.SaveDefault(manysampletype, manysampletypeOld);

			if (!manysampletype.IsValid())
            {
                this._validationResult = manysampletype.GetDomainValidation();
                return manysampletype;
            }

            this._validationResult = new ValidationSpecificationResult
            {
                Errors = new List<string>(),
                IsValid = true,
                Message = "Alterado com sucesso."
            };

            this._cacheHelper.ClearCache();
            return manysampletype;

        }

		protected override ManySampleType SaveWithValidation(ManySampleType manysampletype, ManySampleType manysampletypeOld)
        {
            if (!this.DataAnnotationIsValid())
                return manysampletype;

            if (!manysampletype.IsValid())
            {
                this._validationResult = manysampletype.GetDomainValidation();
                return manysampletype;
            }

            this.Specifications(manysampletype);

            if (!this._validationResult.IsValid)
                return manysampletype;
            
            manysampletype = this.SaveDefault(manysampletype, manysampletypeOld);
            this._validationResult.Message = "Inserido com sucesso.";

            this._cacheHelper.ClearCache();
            return manysampletype;
        }

		protected virtual void Specifications(ManySampleType manysampletype)
        {
            this._validationResult  = new ManySampleTypeAptoParaCadastroValidation(this._rep).Validate(manysampletype);
			this._validationWarning  = new ManySampleTypeAptoParaCadastroWarning(this._rep).Validate(manysampletype);
        }

        protected virtual ManySampleType SaveDefault(ManySampleType manysampletype, ManySampleType manysampletypeOld)
        {
			

            var isNew = manysampletypeOld.IsNull();			
            if (isNew)
                manysampletype = this.AddDefault(manysampletype);
            else
				manysampletype = this.UpdateDefault(manysampletype);

            return manysampletype;
        }
		
        protected virtual ManySampleType AddDefault(ManySampleType manysampletype)
        {
            manysampletype = this._rep.Add(manysampletype);
            return manysampletype;
        }

		protected virtual ManySampleType UpdateDefault(ManySampleType manysampletype)
        {
            manysampletype = this._rep.Update(manysampletype);
            return manysampletype;
        }
				
		public virtual async Task<ManySampleType> GetNewInstance(dynamic model, CurrentUser user)
        {
            return await Task.Run(() =>
            {
                return new ManySampleType.ManySampleTypeFactory().GetDefaultInstance(model, user);
            });
         }

		public virtual async Task<ManySampleType> GetUpdateInstance(dynamic model, CurrentUser user)
        {
            return await Task.Run(() =>
            {
                return new ManySampleType.ManySampleTypeFactory().GetDefaultInstance(model, user);
            });
         }
    }
}
