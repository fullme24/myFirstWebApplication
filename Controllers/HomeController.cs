using Microsoft.AspNetCore.Mvc;
using myFirstWebApplication.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace myFirstWebApplication.Controllers
{
    public class HomeController : Controller
    {
        //Make sure the view can pop up
        public IActionResult Index()
        {
            return View();
        }

        //Set up for GradeCal view and calculations
        [HttpGet("GradeCal")]
        public IActionResult GradeCal()
        {
            return View();
        }

        [HttpPost("GradeCal")]
        public IActionResult GradeCal(GradeCalModel model)
        {
            return View();
        }
    }
}
