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
    public class DepartmentRep : IDepartmentRepository<Department>, IDepartmentManagementRepository
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

        public async Task<bool> DeactivateDepartmentAsync(int departmentId)
        {

            var department = await _context.Departments.FindAsync(departmentId);
            if(department is null) throw new KeyNotFoundException("Department not found.");
           
            if (!department.IsActive) throw new InvalidOperationException("Department is already deactivated");

            department.IsActive = false;
            
           return await  _context.SaveChangesAsync() >  0;
        }

        public async Task<Department> GetByIdAsync(int Id)
        {
            return await _context.Departments.FindAsync(Id);
        }
        //int  departmentId ,  int managerId , int createdById ,string report
      public async Task<bool> ExistDepartmentByNameAsync(string Name , int departmentId)
        {
            return await _context.Departments.AnyAsync(dep=> dep.Name == Name && dep.Id != departmentId );
        }
      
        public async Task<bool> UpdateDepartmentAsync(int departmentId, string name, string description)
        {
            var affectedRows = await _context.Departments.Where(d => d.Id == departmentId)
                .ExecuteUpdateAsync(setters => setters.SetProperty(p => p.Name, name)
                .SetProperty(p => p.Description, description));
            return affectedRows > 0;
        }

     

        public async Task<bool> SetManagerToDepartmentAsync(RoleLogs enRoleLogs)
        {
            await using var transaction = await _context.Database.BeginTransactionAsync();


            var department = await _context.Departments.FirstOrDefaultAsync(d => d.Id == enRoleLogs.DepartmentId);

            if (department is null) throw new KeyNotFoundException("Department not found");

            // find user -> list user roles ->select user role -> check user manager role == manager -> 
            var employee = await _context.Users.
                Include(ur => ur.UserRoles).
                ThenInclude(r => r.Role)
                .FirstOrDefaultAsync(emp =>
            emp.Id == enRoleLogs.UserId && 
            emp.DepartmentId == enRoleLogs.DepartmentId);


            if (employee is null) throw new KeyNotFoundException(
            "Employee not found or does not belong to the department.");


            if (employee.Id == department.ManagerId) throw new InvalidOperationException(
            "Employee is already the department manager.");


            var managerRole = employee.UserRoles
                .FirstOrDefault(ur => ur.Role.Name.Contains("Manager"));


            if (managerRole is null) throw new KeyNotFoundException("employee does not hold a Manager role. Make Sure employee has a manager role");

            department.ManagerId = employee.Id;

            var roleLogs = new RoleLogs
            {
                DepartmentId = enRoleLogs.DepartmentId,
                AssignedByUserId = enRoleLogs.AssignedByUserId,
                UserId = employee.Id,
                RoleId = managerRole.RoleId,
                Report = enRoleLogs.Report
            };


            await _context.RoleLogs.AddAsync(roleLogs);
            var affectedRows = await _context.SaveChangesAsync();

            if (affectedRows == 0) {
                await transaction.RollbackAsync();
                return false;
            };
           

            await transaction.CommitAsync();

            return true;
        }
    }
}
