using Admin.Application.Mappers;
using Admin.Core.DTOs.Department;
using Admin.Core.DTOs.users;
using Admin.Core.interfaces.department;
using Admin.Core.interfaces.user;
using Admin.Core.models;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata;
using System.Text;
using System.Threading.Tasks;

namespace Admin.Application
{
    public  class DepartmentService
    {
        private readonly IDepartmentRepository<Department> _departmentRepository;
        private readonly IDepartmentManagementRepository _departmentManagmentRepository;
        private readonly IConfiguration _configuration;
        public DepartmentService(IDepartmentRepository<Department> departmentService , IConfiguration configuration)
        {
            _departmentRepository = departmentService;
            _configuration = configuration;
        }


        public async Task<int> CreateDepartmentAsync(DepartmentDTO departmentDto)
        {
            var newDepartment = new Department { 
            
                Id = departmentDto.Id,
                Name = departmentDto.Name,
                Description = departmentDto.Description,
                ManagerId = departmentDto.ManagerId,    

            
            };


            await _departmentRepository.AddAsync(newDepartment);

            return newDepartment.Id;
        }

        public async Task<bool> UpdateDepartmentAsync(UpdateDepartmentDTO departmentDTO)
        {
            bool nameExists = await _departmentRepository.ExistDepartmentByNameAsync(departmentDTO.Name , departmentDTO.Id);

            if(nameExists) throw new InvalidOperationException(
            "A department with this name already exists.");

            return await _departmentRepository.UpdateDepartmentAsync(departmentDTO.Id, departmentDTO.Name, departmentDTO.Description);

        }
        public async Task<bool> DeactivateDepartmentAsync(int departmentId)
        {
            return await _departmentRepository.DeactivateDepartmentAsync(departmentId);
        } 


        public async Task<DepartmentDTO> GetDepartmentById(int id)
        {

            var department = await _departmentRepository.GetByIdAsync(id);

            return DepartmentMapper.ToDto(department);
        }


        public async Task<bool> AssignManagerToDepartmentAsync(DepartmentManagerDTO departmentManagerDto)
        {
            var departmentManager =  DepartmentRoleLogMapper.ToEntity(departmentManagerDto);
            return  await _departmentManagmentRepository.SetManagerToDepartmentAsync(departmentManager);
        
        } 

       

    }
}
