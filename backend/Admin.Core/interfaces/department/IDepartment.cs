using Admin.Core.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.Core.interfaces.department
{
    public interface  IDepartment<T> : IReadRepository<T> , IWriteRepository<T>where T : class
    {
        Task<bool> UpdateDepartmentAsync(int departmentId ,string name, string description);
        Task<bool> DeactivateDepartmentAsync(int departmentId);  

       
        Task<bool> ExistDepartmentByNameAsync(string name, int departmentId);
        Task<bool> SetManagerToDepartment(T roleLogs);
    }
}
