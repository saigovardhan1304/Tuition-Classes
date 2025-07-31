using Microsoft.AspNetCore.Mvc;

namespace Tuition_Classes.Controllers
{
    public class AboutController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
