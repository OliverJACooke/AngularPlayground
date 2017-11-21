using Microsoft.AspNetCore.Mvc;

namespace PaulLanePT.Controller
{
    public class HomeController : Microsoft.AspNetCore.Mvc.Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}