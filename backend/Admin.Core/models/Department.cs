using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.Core.models
{
    public  class Department
    {

        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Description { get; set; }

        
        [ForeignKey("User")]
        public int? ManagerId { get; set; }


        [Required]
        public bool IsActive { get; set; }


    }
}
