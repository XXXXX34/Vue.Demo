using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Vue.Api.Controllers
{
    [Route("api/tables")]
    [ApiController]
    public class TableController : ControllerBase
    {
        [HttpPost]
        public IActionResult GetPageList([FromBody] TablePageSpecification specification)
        {
            var pageResult = new PageResult<Person>();
            pageResult.Total = 100;
              var persons = new List<Person>();
            for (int i = 0; i < 100; i++)
            {
                persons.Add(new Person
                {
                    Id = i,
                    Name = $"LI{i}",
                    Tel = $"+86 { 1828 * i}"
                });
            }

            pageResult.Data = persons.Skip((specification.PageIndex- 1) *specification.PageSize).Take(specification.PageSize).ToList() ;

            return Ok(pageResult);
        }
    }

    public class TablePageSpecification
    {
        public int PageIndex { get; set; }
        public int PageSize { get; set; }
    }

    public class PageResult<T>
    {
        public long Total { get; set; }
        public List<T> Data { get; set; }
    }

  
 
    public class Person
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Tel { get; set; }
    }
}