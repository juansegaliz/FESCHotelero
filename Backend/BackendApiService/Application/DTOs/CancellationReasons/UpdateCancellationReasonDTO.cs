using Domain.Validations;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.DTOs.CancellationReasons
{
    public class UpdateCancellationReasonDTO
    {
        [Required]
        public string Name { get; set; } = null!;

        public string? Description { get; set; }
    }
}
