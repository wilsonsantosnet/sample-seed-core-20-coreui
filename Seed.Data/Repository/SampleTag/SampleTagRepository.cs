using Common.Domain.Base;
using Common.Orm;
using Seed.Data.Context;
using Seed.Domain.Entitys;
using Seed.Domain.Filter;
using Seed.Domain.Interfaces.Repository;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Linq.Expressions;
using System;
using Common.Domain.Model;

namespace Seed.Data.Repository
{
    public class SampleTagRepository : Repository<SampleTag>, ISampleTagRepository
    {
        private CurrentUser _user;
        public SampleTagRepository(DbContextSeed ctx, CurrentUser user) : base(ctx)
        {
			this._user = user;
        }

      
        public IQueryable<SampleTag> GetBySimplefilters(SampleTagFilter filters)
        {
            var querybase = this.GetAll(this.DataAgregation(filters))
								.WithBasicFilters(filters)
								.WithCustomFilters(filters)
								.OrderByDomain(filters)
                                .OrderByProperty(filters);
            return querybase;
        }

        public async Task<SampleTag> GetById(SampleTagFilter model)
        {
            var _sampletag = await this.SingleOrDefaultAsync(this.GetAll(this.DataAgregation(model))
               .Where(_=>_.SampletagId == model.SampletagId));

            return _sampletag;
        }

		public async Task<IEnumerable<dynamic>> GetDataItem(SampleTagFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.SampletagId,
				Name = _.Tag
            })); 

            return querybase;
        }

        public async Task<IEnumerable<dynamic>> GetDataListCustom(SampleTagFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.SampletagId,

            }));

            return querybase;
        }

		
        public async Task<PaginateResult<dynamic>> GetDataListCustomPaging(SampleTagFilter filters)
        {
            var querybase = await this.PagingDataListCustom<dynamic>(filters, this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.SampletagId,
            }));
            return querybase;
        }

        public async Task<dynamic> GetDataCustom(SampleTagFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.SampletagId,

            }));

            return querybase;
        }

        protected override dynamic DefineFieldsGetOne(IQueryable<SampleTag> source, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return source.Select(_ => new
                {

                });
            }
            return source;
        }

        protected override IQueryable<dynamic> DefineFieldsGetByFilters(IQueryable<SampleTag> source, FilterBase filters)
        {
            if (filters.QueryOptimizerBehavior == "queryOptimizerBehavior")
            {
                //if (!filters.IsOrderByDomain)
                //{
                //    return source.Select(_ => new
                //    {
                //        Id = _.SampleTagId
                //    }).OrderBy(_ => _.Id);
                //}

                return source.Select(_ => new
                {
                    //Id = _.SampleTagId
                });

            }

            //if (!filters.IsOrderByDomain)
            //    return source.OrderBy(_ => _.SampleTagId);

            return source;
        }

        protected override IQueryable<SampleTag> MapperGetByFiltersToDomainFields(IQueryable<SampleTag> source, IEnumerable<dynamic> result, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return result.Select(_ => new SampleTag
                {

                }).AsQueryable();
            }

            return result.Select(_ => (SampleTag)_).AsQueryable();

        }

        protected override SampleTag MapperGetOneToDomainFields(IQueryable<SampleTag> source, dynamic result, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return new SampleTag
                {

                };
            }

            return source.SingleOrDefault();
        }

		protected override Expression<Func<SampleTag, object>>[] DataAgregation(Expression<Func<SampleTag, object>>[] includes, FilterBase filter)
        {
            return base.DataAgregation(includes, filter);
        }

    }
}
