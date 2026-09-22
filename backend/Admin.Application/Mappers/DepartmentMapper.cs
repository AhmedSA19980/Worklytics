using Admin.Core.DTOs.Department;
using Admin.Core.DTOs.token;
using Admin.Core.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.Application.Mappers
{
    public static class  DepartmentMapper
    {

        public static Department ToEntity(this DepartmentDTO DepartmentDto)
        {

            return new Department
            {  //* check for all properties must be filled
                Id = DepartmentDto.Id,
                Description = DepartmentDto.Description,
                Name = DepartmentDto.Name,
                ManagerId = DepartmentDto?.ManagerId,


            };
        }

        public static DepartmentDTO ToDto(this Department Department)
        {

            return new DepartmentDTO
            {  //* check for all properties must be filled
                Id = Department.Id,
                Description = Department.Description,
                Name = Department.Name,
                ManagerId = Department?.ManagerId,


            };
        }




    }
}
