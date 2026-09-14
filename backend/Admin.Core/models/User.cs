
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace Admin.Core.models
{
    public class User
    {

        [Key]
        public int Id { get; set; }

        [Required, MinLength(5)]
        public string First_Name { get; set; }
        
        [Required, MinLength(5)]
        public string Last_Name { get; set; }

        [Required, MinLength(5)]
        public string UserName { get; set; }
     
        [Required, MaxLength(256)]
        public string Email { get; set; }

        [Required]
        [ForeignKey("Position")]
        public int PositionId { get; set; }

        [Required]
        [ForeignKey("Department")]
        public int DepartmentId { get; set; }

        [Required]
        public string EmployeeNumber { get; set; }

        [Required]
        public string HireDate { get; set; }


        [ForeignKey("User")]
        public int? ManagerId { get; set; }

        
        public string Password { get; set; }

    
        public DateTime CreatedAt { get; set; }

        public bool IsActive { get; set; } // 0 =>  false , 1 => true
        public ICollection<UserRole> UserRoles { get; set; } = new List<UserRole>();
        public ICollection<RefreshToken> RefreshToken { get; set; } = new HashSet<RefreshToken>();

    }
}

