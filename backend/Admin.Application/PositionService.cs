using Admin.Application.Mappers;
using Admin.Core.DTOs.Department;
using Admin.Core.DTOs.position;
using Admin.Core.interfaces.department;
using Admin.Core.interfaces.Position;
using Admin.Core.models;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.Application
{
    public class PositionService
    {



        private readonly IPositionRepository<Position> _positionRepository;
        
        private readonly IConfiguration _configuration;
    public PositionService(IPositionRepository<Position> positionService, IConfiguration configuration)
    {
        _positionRepository = positionService;
        _configuration = configuration;
    }


        public async Task<int> CreatePositionAsync(PositionDTO positionDto)
        {
            var newPosition = new Position
            {

                Id = positionDto.Id,
                Name = positionDto.Name,
                Description = positionDto.Description,
                DepartmentId = positionDto.DepartmentId,


            };


            await _positionRepository.AddAsync(newPosition);

            return newPosition.Id;
        }

        public async Task<bool> UpdatePositionAsync(PositionDTO updateDTO)
        {
            bool nameExists = await _positionRepository.ExistPositionByNameAsync(updateDTO.Id , updateDTO.Name);

            if (nameExists) throw new InvalidOperationException(
            "A poistion with this name already exists.");

            return await _positionRepository.UpdatePosition(updateDTO.Id, updateDTO.Name, updateDTO.Description);


        }
        public async Task<bool> DeactivatePositionAsync(int positionId)
        {
            var positionExists = await _positionRepository.GetByIdAsync(positionId);

            if (positionExists is null) throw new InvalidOperationException(
            "A poistion with this id is not exists.");

            return await _positionRepository.DeactivatePosition(positionId);
        }


        public async Task<PositionDTO> GetPositionById(int id)
        {

            var position = await _positionRepository.GetByIdAsync(id);

            return PositionMapper.ToDto(position);
        }





    }
}
