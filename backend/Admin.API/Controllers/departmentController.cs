using Admin.Application;
using Admin.Core.DTOs.Department;
using Admin.Core.DTOs.position;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace Admin.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class departmentController : ControllerBase
    {



        private readonly DepartmentService _departmentService;

        public departmentController(DepartmentService departmentService)
        {

            _departmentService = departmentService;
        }

        [HttpGet("getdepartmentById", Name = "getdepartmentById")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<DepartmentDTO>> GetDepartmentById(int departmentId)
        {

            if (departmentId < 0)
            {
                return BadRequest($"invalid input Id");
            }

            var department = await _departmentService.GetDepartmentById(departmentId);

            if (department == null)
            {
                return NotFound($"department data is null.");
            }
            return Ok(department);

        }

        [HttpPost("createDepartment", Name = "createDepartment")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<int>> AddUser(DepartmentDTO department)
        {
            if (department == null || string.IsNullOrEmpty(department.Name) || string.IsNullOrEmpty(department.Description))
            {
                return BadRequest($"All field are required");
            }


            int newPosition = await _departmentService.CreateDepartmentAsync(department);

            return CreatedAtRoute(
                     "createDepartment",
                     new { Id = newPosition }

                 );

        }

        [HttpPatch("updateDepartment", Name = "updateDepartment")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<bool>> updatePosition(UpdateDepartmentDTO department)
        {
            if (department == null || department.Id == null ||
                string.IsNullOrEmpty(department.Name) || string.IsNullOrEmpty(department.Description))
            {
                return BadRequest($"All field are required");
            }
            bool existPosition = await _departmentService.UpdateDepartmentAsync(department);

            return existPosition == true ? Ok($"position with{department.Id}  is Update") : Ok($"position with {department.Id}  is Failed");

        }


        [HttpPatch("deactivateDepartment", Name = "deactivateDepartment")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<bool>> deactivateDepartment(int departmentId)
        {
            if (departmentId == null)
            {
                return BadRequest($"All field are required");
            }
            bool department = await _departmentService.DeactivateDepartmentAsync(departmentId);

            return department == true ? Ok($"Department with {departmentId}  Id  is Update") : Ok($"Department with {departmentId} Id is Failed");

        }



        [Authorize(Policy= "UserHROradmin")]
        [HttpPatch("assignManagerToDepartment", Name = "assignManagerToDepartment")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<bool>> assignManagerToDepartment(DepartmentManagerDTO departmentManagerDto
           )
        {
            if (departmentManagerDto == null)
            {
                return BadRequest($"All field are required");
            }

           var userId = User.FindFirst(ClaimTypes.NameIdentifier)!.Value;


            if (!int.TryParse(userId, out var authenticatedUserId))
            {
                return Unauthorized();
            }

            departmentManagerDto.AssignedByUserId =int.Parse(userId) ; // must assign to manager/admin
           
            bool assignedManagerRoleToAUser = await _departmentService.AssignManagerToDepartmentAsync(departmentManagerDto);

            if (!assignedManagerRoleToAUser)
            {
                return BadRequest(
                $"Manager {departmentManagerDto.UserId} could not be assigned " +
                $"to department {departmentManagerDto.DepartmentId}.");
            }

            return Ok($"A new manager {departmentManagerDto.UserId} has assigned to  a department {departmentManagerDto.DepartmentId}");

        }


    }
}

