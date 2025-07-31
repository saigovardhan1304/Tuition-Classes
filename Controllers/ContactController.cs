using Microsoft.AspNetCore.Mvc;

namespace Tuition_Classes.Controllers
{
    public class ContactController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
