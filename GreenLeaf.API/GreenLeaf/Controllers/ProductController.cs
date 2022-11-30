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
    public class ProductController : ControllerBase
    {
        public GreenLeafContext _context { get; set; }

        public ProductController(GreenLeafContext context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult Post(Product product)
        {
            try
            {
                _context.Products.Update(product);
                _context.SaveChanges();
                return Ok("Produto Salvo com Sucesso");
            }
            catch (Exception ex)
            {
                return BadRequest("Falha ao salvar o Produto");
            }
        }

        [HttpDelete]
        public IActionResult Delete(int idProduct)
        {
            try
            {
                Product prod = _context.Products.Where(p => p.Id == idProduct).FirstOrDefault();
                _context.Products.Remove(prod);
                _context.SaveChanges();
                return Ok("Produto Deletado com Sucesso");

            }
            catch (Exception ex)
            {
                return BadRequest("Falha ao Deletar o Produto");
            }
        }

        [HttpGet("GetMassUnits")]
        public IActionResult GetMassUnits()
        {
            try
            {
                return Ok(_context.MassUnits);
            }
            catch (Exception ex)
            {
                return BadRequest("Falha ao carregar Unidades de Medida");
            }
        }

        [HttpGet("GetCategories")]
        public IActionResult GetCategories()
        {
            try
            {
                return Ok(_context.ProductCategories);
            }
            catch (Exception ex)
            {
                return BadRequest("Falha ao carregar Categorias");
            }
        }

        [HttpGet("SearchProducts")]
        public IActionResult SearchProducts()
        {
            try
            {
                return Ok(_context.Products);
            }
            catch (Exception ex)
            {
                return BadRequest("Falha ao Pesquisar por produtos" + ex.Message);
            }
        }

        [HttpGet("SearchProductsByName/{filter}")]
        public IActionResult SearchProductsByName(string filter)
        {
            try
            {
                return Ok(_context.Products.Where(p => p.Name.Contains(filter)));
            }
            catch (Exception ex)
            {
                return BadRequest("Falha ao Pesquisar por produtos" + ex.Message);
            }
        }
    }
}
