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
    public class ProductCategoryController : ControllerBase
    {
        public GreenLeafContext _context { get; set; }

        public ProductCategoryController(GreenLeafContext context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult Post(ProductCategory category)
        {
            try
            {
                _context.ProductCategories.Add(category);
                _context.SaveChanges();
                return Ok("Categoria do Produto Salva com Sucesso");

            }
            catch (Exception ex)
            {
                return BadRequest("Falha ao salvar a Categoria do Produto");
            }
        }

    }
}
