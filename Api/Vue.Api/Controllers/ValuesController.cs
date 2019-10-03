using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace Vue.Api.Controllers
{
    [Route("api/values")]
    [ApiController]
    [Authorize]

    public class ValuesController : ControllerBase
    {
        // GET: api/Values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Values/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Values
        [HttpPost]
        public ActionResult Post([FromBody] CreateCommand commad)
        {
            return Ok(true);
        }

        // PUT: api/Values/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] UpdateCommand commad)
        {
            return Ok(true);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            return Ok(true);
        }
    }

    /// <summary>
    /// 创建
    /// </summary>
    public class CreateCommand
    {
        public string Name { get; set; }
    }

    /// <summary>
    /// 修改
    /// </summary>
    public class UpdateCommand
    {
        public string Name { get; set; }
    }
}
