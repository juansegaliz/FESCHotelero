using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class User
    {
        [Key]
        public int UserId { get; set; }

        [Required]
        [MaxLength(150)]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }

        [Required]
        [MaxLength(200)]
        public string FullName { get; set; }

        public int RoleId { get; set; } = 0;

        public int DepartmentId { get; set; } = 0;

        [Required]
        [MaxLength(20)]
        public string Phone { get; set; }

        [Required]
        public DateTime CreatedAt { get; set; }

        [Required]
        public DateTime UpdatedAt { get; set; }

        [Required]
        public int CreatedByUserId { get; set; }

        [Required]
        public int UpdatedByUserId { get; set; }

        [Required]
        public int StatusId { get; set; }
    }
}
