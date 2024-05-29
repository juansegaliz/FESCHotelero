using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.DTOs.CancellationReasons
{
    public class CancellationReasonDTO
    {
        public int CancellationId { get; set; }

        public string Name { get; set; } = null!;

        public string? Description { get; set; }

        public DateTime CreatedAt { get; set; }

        public DateTime UpdatedAt { get; set; }

        public int CreatedByUserId { get; set; }

        public int UpdatedByUserId { get; set; }

        public int StatusId { get; set; }
    }
}
