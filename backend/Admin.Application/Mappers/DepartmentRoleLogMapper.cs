using Admin.Core.DTOs.audit_login;
using Admin.Core.DTOs.Department;
using Admin.Core.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.Application.Mappers
{
    public static class DepartmentRoleLogMapper
    {
        public static RoleLogs ToEntity(this DepartmentManagerDTO departmentRoleDto)
        {
            return new RoleLogs
            {
               RoleId = departmentRoleDto.RoleId,
               DepartmentId = departmentRoleDto.DepartmentId,    
               UserId = departmentRoleDto.UserId,    
               AssignedByUserId = departmentRoleDto.AssignedByUserId,
               Report = departmentRoleDto.Report,

            };
        }
        public static DepartmentManagerDTO ToDto(this RoleLogs roleLogs)
        {
            return new DepartmentManagerDTO
            {
                RoleId = roleLogs.RoleId,
                DepartmentId = roleLogs.DepartmentId,
                UserId = roleLogs.UserId,
                AssignedByUserId = roleLogs.AssignedByUserId,
                Report = roleLogs.Report,

            };
        }
    }
}
