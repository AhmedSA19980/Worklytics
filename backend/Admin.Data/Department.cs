using Admin.Core.interfaces.department;
using Admin.Core.models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.Data
{
    public class DepartmentRep : IDepartment<Department>
    {

        private readonly AppDbContext _context;

        public DepartmentRep(AppDbContext context)
        {
            _context = context;
        }


        public async  Task<Department> AddAsync(Department enDepartment)
        {
            await _context.Departments.AddAsync(enDepartment);
            await _context.SaveChangesAsync();
            return enDepartment;
        }

        public async Task<bool> DeactivateDepartment(int DepartmentId)
        {
            var department = new Department { Id = DepartmentId};
             _context.Departments.Attach(department);
             _context.Entry(department).Property(d => d.IsActive).IsModified = false;    
            bool deaactivateDeparment =await  _context.SaveChangesAsync() >  0;
            return deaactivateDeparment;

           
        }

        public async Task<Department> GetByIdAsync(int Id)
        {
            return await _context.Departments.FindAsync(Id);
        }

      

        public async Task<bool> UpdateDepartment(int departmentId, string name, string description)
        {
            var department= new Department  {Id = departmentId , Name = name,Description = description };
            _context.Departments.Attach(department);
            _context.Entry(department).Property(d => d.Name).IsModified = true;
            _context.Entry(department).Property(d => d.Description).IsModified = true;

            bool updatedDepartment = await _context.SaveChangesAsync() > 0;
            return  updatedDepartment;

        }
    }
}
