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
    public class ManySampleTypeRepository : Repository<ManySampleType>, IManySampleTypeRepository
    {
        private CurrentUser _user;
        public ManySampleTypeRepository(DbContextSeed ctx, CurrentUser user) : base(ctx)
        {
			this._user = user;
        }

      
        public IQueryable<ManySampleType> GetBySimplefilters(ManySampleTypeFilter filters)
        {
            var querybase = this.GetAll(this.DataAgregation(filters))
								.WithBasicFilters(filters)
								.WithCustomFilters(filters)
								.OrderByDomain(filters)
                                .OrderByProperty(filters);
            return querybase;
        }

        public async Task<ManySampleType> GetById(ManySampleTypeFilter model)
        {
            var _manysampletype = await this.SingleOrDefaultAsync(this.GetAll(this.DataAgregation(model))
               );

            return _manysampletype;
        }

		public async Task<IEnumerable<dynamic>> GetDataItem(ManySampleTypeFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.SampleTypeId,
				Name = _.SampleTypeId
            })); 

            return querybase;
        }

        public async Task<IEnumerable<dynamic>> GetDataListCustom(ManySampleTypeFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.SampleTypeId,
                Name = _.SampleTypeId

            }));

            return querybase;
        }

		
        public async Task<PaginateResult<dynamic>> GetDataListCustomPaging(ManySampleTypeFilter filters)
        {
            var querybase = await this.PagingDataListCustom<dynamic>(filters, this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.SampleTypeId,
                Name = _.SampleTypeId
            }));
            return querybase;
        }

        public async Task<dynamic> GetDataCustom(ManySampleTypeFilter filters)
        {
            var querybase = await this.ToListAsync(this.GetBySimplefilters(filters).Select(_ => new
            {
                Id = _.SampleTypeId,
                Name = _.SampleTypeId

            }));

            return querybase;
        }

        protected override dynamic DefineFieldsGetOne(IQueryable<ManySampleType> source, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return source.Select(_ => new
                {

                });
            }
            return source;
        }

        protected override IQueryable<dynamic> DefineFieldsGetByFilters(IQueryable<ManySampleType> source, FilterBase filters)
        {
            if (filters.QueryOptimizerBehavior == "queryOptimizerBehavior")
            {
                //if (!filters.IsOrderByDomain)
                //{
                //    return source.Select(_ => new
                //    {
                //        Id = _.ManySampleTypeId
                //    }).OrderBy(_ => _.Id);
                //}

                return source.Select(_ => new
                {
                    //Id = _.ManySampleTypeId
                });

            }

            //if (!filters.IsOrderByDomain)
            //    return source.OrderBy(_ => _.ManySampleTypeId);

            return source;
        }

        protected override IQueryable<ManySampleType> MapperGetByFiltersToDomainFields(IQueryable<ManySampleType> source, IEnumerable<dynamic> result, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return result.Select(_ => new ManySampleType
                {

                }).AsQueryable();
            }

            return result.Select(_ => (ManySampleType)_).AsQueryable();

        }

        protected override ManySampleType MapperGetOneToDomainFields(IQueryable<ManySampleType> source, dynamic result, string queryOptimizerBehavior)
        {
            if (queryOptimizerBehavior == "queryOptimizerBehavior")
            {
                return new ManySampleType
                {

                };
            }

            return source.SingleOrDefault();
        }

		protected override Expression<Func<ManySampleType, object>>[] DataAgregation(Expression<Func<ManySampleType, object>>[] includes, FilterBase filter)
        {
            return base.DataAgregation(includes, filter);
        }

    }
}
