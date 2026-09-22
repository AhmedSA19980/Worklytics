using Admin.Core.DTOs.Department;
using Admin.Core.DTOs.position;
using Admin.Core.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.Application.Mappers
{
    public static class PositionMapper
    {
        public static Position ToEntity(this PositionDTO positionDto)
        {

            return new Position
            {  //* check for all properties must be filled
                Id = positionDto.Id,
                Description = positionDto.Description,
                Name = positionDto.Name,
                DepartmentId = positionDto.DepartmentId,


            };
        }

        public static PositionDTO ToDto(this Position position)
        {

            return new PositionDTO
            {  //* check for all properties must be filled
                Id = position.Id,
                Description = position.Description,
                Name = position.Name,
                DepartmentId = position.DepartmentId,


            };
        }

    }
}
