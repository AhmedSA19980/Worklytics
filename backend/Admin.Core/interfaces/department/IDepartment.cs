using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.Core.interfaces.department
{
    public interface  IDepartment<T> : IReadRepository<T> , IWriteRepository<T>where T : class
    {
        Task<bool> UpdateDepartment(int departmentId ,string name, string description);
        Task<bool> DeactivateDepartment(int departmentId);  

    }
}
