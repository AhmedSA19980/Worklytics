using Admin.Core.interfaces.department;
using Admin.Core.interfaces.Position;
using Admin.Core.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.Data
{
    public class PositionRep : IPosition<Position>
    {

        private readonly AppDbContext _context;

        public PositionRep(AppDbContext context)
        {
            _context = context;
        }

        public async Task<Position> AddAsync(Position enPosition)
        {
            await _context.Positions.AddAsync(enPosition);
            await _context.SaveChangesAsync();
            return enPosition;
        }

        public Task<bool> DeactivatePosition(int positionId)
        {
            throw new NotImplementedException();
        }

        public Task<Position> GetByIdAsync(int Id)
        {
            throw new NotImplementedException();
        }

        public Task<bool> UpdatePosition(int positionId, string name, string description)
        {
            throw new NotImplementedException();
        }
    }

}
