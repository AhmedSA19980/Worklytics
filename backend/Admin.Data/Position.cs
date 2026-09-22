using Admin.Core.interfaces.department;
using Admin.Core.interfaces.Position;
using Admin.Core.models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Admin.Data
{
    public class PositionRep : IPositionRepository<Position>
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
            var position = new Position { Id = positionId, IsActive= false };
            _context.Positions.Attach(position);
            _context.Entry(position).Property(p => p.IsActive).IsModified = true;
            bool deaactivatePosition = await _context.SaveChangesAsync() > 0;
            return deaactivatePosition;

        }

        public async Task<Position> GetByIdAsync(int Id)
        {
            return await _context.Positions.FindAsync(Id);
        }

        public async Task<bool> ExistPositionByNameAsync(int id , string name)
        {
            return await _context.Positions.AnyAsync(p => p.Id == id  && p.Name == name);
        }

        public async Task<bool> UpdatePosition(int positionId, string name, string description)
        {

            var affectedRows = await _context.Positions.Where(d => d.Id == positionId)
                .ExecuteUpdateAsync(setters => setters.SetProperty(p => p.Name, name)
                .SetProperty(p => p.Description, description));
            return affectedRows > 0;


   
        }
    }

}
