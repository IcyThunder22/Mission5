using Microsoft.AspNetCore.Mvc;

namespace Mission5.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Cowculator()
        {
            return View();
        }
    }
}
