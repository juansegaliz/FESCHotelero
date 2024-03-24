using Domain.Entities;
using Infrastructure.Configuration;
using Infrastructure.Data.Scaffold;
using Infrastructure.Services;
using Infrastructure.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Data.DbContexts
{
    public class MySQLDbContext : FescHoteleroContext
    {
        private readonly MySQLSettings _mySQLSettings;
        public MySQLDbContext(IAppSettingsService appSettingsService) 
        {
            _mySQLSettings = appSettingsService.GetMySQLSettings();
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseMySQL(_mySQLSettings.ConnectionStrings);
    }
}
