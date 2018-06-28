using System;
using System.Linq;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Seed.Dto
{
	public class ManySampleTypeDtoSpecializedResult : ManySampleTypeDto
	{

        public  SampleDto Sample { get; set;} 
        public  SampleTypeDto SampleType { get; set;} 

		
	}
}