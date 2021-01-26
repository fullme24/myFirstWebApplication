using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace myFirstWebApplication.Models
{
    public class GradeCalModel
    {
        //Making the object and checking if the inputs are good to go
        [Required]
        [Range(0, 100)]
        public Double Assignments { get; set; }
        [Required]
        [Range(0, 100)]
        public Double GroupProjects { get; set; }
        [Required]
        [Range(0, 100)]
        public Double Quizzes { get; set; }
        [Required]
        [Range(0, 100)]
        public Double Exams { get; set; }
        [Required]
        [Range(0,100)]
        public Double Intex { get; set; }
    }
}
