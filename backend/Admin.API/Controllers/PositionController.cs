using Admin.Application;
using Admin.Core.DTOs.position;
using Admin.Core.DTOs.users;
using Admin.Core.models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Admin.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PositionController : ControllerBase
    {


        private readonly PositionService _positionService;

        public PositionController(PositionService positionService) { 
        
            _positionService = positionService;
        }

        [HttpGet("getPositionById", Name = "getPositionById")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<PositionDTO>> GetPositionById(int positionId)
        {

            if (positionId < 0 )
            {
                return BadRequest($"invalid input Id");
            }

            var  position = await _positionService.GetPositionById(positionId);

            if (position == null)
            {
                return NotFound($"user data is null.");
            }
            return Ok(position);

        }

        [HttpPost("createPosition", Name = "createPosition")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<int>> AddUser(PositionDTO position)
        {
            if (position == null || string.IsNullOrEmpty(position.Name) || string.IsNullOrEmpty(position.Description))
            {
                return BadRequest($"All field are required");
            }


            int newPosition = await _positionService.CreatePositionAsync(position);

            return CreatedAtRoute(
                     "createPosition",
                     new { Id = newPosition }

                 );

        }

        [HttpPatch("updatePosition", Name = "updatePosition")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<bool>> updatePosition(PositionDTO position)
        {
            if (position == null || position.Id == null ||
                string.IsNullOrEmpty(position.Name) || string.IsNullOrEmpty(position.Description))
            {
                return BadRequest($"All field are required");
            }
            bool existPosition = await _positionService.UpdatePositionAsync(position);

            return existPosition == true ? Ok($"position with{position.Id}  is Update") : Ok($"position with {position.Id}  is Failed");

        }


        [HttpPatch("deactivatePosition", Name = "deactivatePosition")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<bool>> deactivatePosition(int positinoId)
        {
            if (positinoId == null)
            {
                return BadRequest($"All field are required");
            }
            bool position = await _positionService.DeactivatePositionAsync(positinoId);

            return position == true ? Ok($"position with {positinoId}  Id  is Update") : Ok($"positionwith {positinoId} Id is Failed");

        }


    }
}
