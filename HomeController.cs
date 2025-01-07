using System.Diagnostics;
using EBS_Demo.Models;
using Microsoft.AspNetCore.Mvc;

namespace EBS_Demo.Controllers
{
    public class PostObjModel
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Role { get; set; } = string.Empty;
    }
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }
        [HttpGet("/api")]
        public IActionResult GetAPIDemo([FromQuery] string name)
        {
            throw new Exception();
            return Ok(string.IsNullOrEmpty(name) ? new List<int>(new int[] { 1, 2, 3, 4, 5, 6 }) : name);
        }
        [HttpPost("/api")]
        public IActionResult PostAPIDemo([FromBody] PostObjModel objModel)
        {
            objModel.Id = 1;
            return Ok(objModel);
        }
        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
