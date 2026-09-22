using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

namespace Admin.API.Authorization
{
 //  admin only can assign new position to employee 
 //  In order, to assign new manager for a department by a manager  , manager must be related/manage that department
    public class UserHROrAdminHandler : AuthorizationHandler<UserHROrAdminRequirment , int>
    {
      protected override Task HandleRequirementAsync(
      AuthorizationHandlerContext context,
      UserHROrAdminRequirment requirement,
      int employeeId)
      
        
        {

            if (context.User.IsInRole("Admin") || context.User.IsInRole("HR"))
            {
                context.Succeed(requirement);
                return Task.CompletedTask;
            }

          
          
            return Task.CompletedTask;

        }
    }

}

