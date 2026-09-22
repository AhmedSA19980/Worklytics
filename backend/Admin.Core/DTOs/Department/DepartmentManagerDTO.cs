using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.Core.DTOs.Department
{
    public  class DepartmentManagerDTO
    {

        public int Id { get; set; }

        public int AssignedByUserId { get; set; }

        public int UserId { get; set; }

        public int RoleId { get; set; }

        public int DepartmentId { get; set; }
        
        public string? Report { get; set; }
    }
}
