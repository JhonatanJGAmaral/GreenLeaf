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
    public class UserController : ControllerBase
    {
        public GreenLeafContext _context { get; set; }

        public UserController(GreenLeafContext context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult Post(User user)
        {
            try
            {
                _context.Users.Update(user);
                _context.SaveChanges();
                return Ok("Usuário Salvo com Sucesso");

            }
            catch (Exception ex)
            {
                return BadRequest("Falha ao salvar o Usuário");
            }
        }

        [HttpPost("login")]
        public IActionResult Login(User user)
        {
            try
            {
                var logUser = _context.Users.Where(u => u.Email == user.Email && u.Password == user.Password).FirstOrDefault();
                return Ok((logUser != null)); 

            }
            catch (Exception ex)
            {
                return Ok(false); 
            }
        }
    }
}

    

