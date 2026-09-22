using Admin.Core.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.Core.interfaces.department
{
    public interface IDepartmentManagementRepository
    {
        Task<bool> SetManagerToDepartmentAsync(RoleLogs enRoleLogs);
    }
}
