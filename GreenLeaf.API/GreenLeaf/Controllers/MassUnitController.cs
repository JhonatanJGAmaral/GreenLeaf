using GreenLeaf.DataAccess;
using GreenLeaf.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GreenLeaf.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MassUnitController : ControllerBase
    {
        public GreenLeafContext _context { get; set; }

        public MassUnitController(GreenLeafContext context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult Post(MassUnit unit)
        {
            try
            {
                _context.MassUnits.Add(unit);
                _context.SaveChanges();
                return Ok("Unidade de Medida Salva com Sucesso");

            }
            catch (Exception ex)
            {
                return BadRequest("Falha ao salvar o Unidade de Medida");
            }

        }
    }
}
