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
      
        public async Task<bool> DeactivatePosition(int positionId)
        {
            var position = new Position { Id = positionId };
            _context.Positions.Attach(position);
            _context.Entry(position).Property(p => p.IsActive).IsModified = false;
            bool deaactivatePosition = await _context.SaveChangesAsync() > 0;
            return deaactivatePosition;

        }

        public async Task<Position> GetByIdAsync(int Id)
        {
            return await _context.Positions.FindAsync(Id);
        }

        public async Task<bool> UpdatePosition(int positionId, string name, string description)
        {
            var position = new Position { Id = positionId, Name = name, Description = description };
            _context.Positions.Attach(position);
            _context.Entry(position).Property(p => p.IsActive).IsModified = false;
            bool deaactivatePosition = await _context.SaveChangesAsync() > 0;
            return deaactivatePosition;
        }
    }

}
