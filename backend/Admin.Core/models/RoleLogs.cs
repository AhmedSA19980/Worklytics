using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.Core.models
{
    public  class RoleLogs
    {
        [Key]
        public int Id { get; set; }

        public int AssignedByUserId { get; set; }

        public int UserId { get; set; }

        public int RoleId {  get; set; }

        public int DepartmentId { get; set; }
        public DateTimeOffset RoleAssignedAt { get; set; }

        public string? Report {  get; set; }


    }
}
