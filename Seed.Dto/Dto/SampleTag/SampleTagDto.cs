using System.ComponentModel.DataAnnotations;
using Common.Dto;
using System;

namespace Seed.Dto
{
	public class SampleTagDto  : DtoBase
	{
	
        

        public virtual int SampletagId {get; set;}

        

        public virtual int SampleId {get; set;}

        [Required(ErrorMessage="SampleTag - Campo Tag é Obrigatório")]
        [MaxLength(50, ErrorMessage = "SampleTag - Quantidade de caracteres maior que o permitido para o campo Tag")]
        public virtual string Tag {get; set;}


		
	}
}