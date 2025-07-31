using Microsoft.AspNetCore.Mvc;

namespace Tuition_Classes.Controllers
{
    public class CoursesController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
