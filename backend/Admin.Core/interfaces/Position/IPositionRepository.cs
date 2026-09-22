using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.Core.interfaces.Position
{
    public interface IPositionRepository<T> : IReadRepository<T>, IWriteRepository<T> where T : class
    {

        Task<bool> UpdatePosition(int positionId, string name, string description);
        Task<bool> DeactivatePosition(int positionId);
        Task<bool> ExistPositionByNameAsync(int id, string name);
    }
}
