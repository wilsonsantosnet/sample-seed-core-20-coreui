using System.ComponentModel.DataAnnotations;
using Common.Dto;
using System;

namespace Seed.Dto
{
	public class ManySampleTypeDto  : DtoBase
	{
	
        

        public virtual int SampleId {get; set;}

        

        public virtual int SampleTypeId {get; set;}


		
	}
}