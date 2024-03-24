using Domain.Entities;
using Infrastructure.Configuration;
using Infrastructure.Data.DbContexts;
using Infrastructure.Data.Interfaces;
using Infrastructure.Data.Repositories;
using Infrastructure.Services;
using Infrastructure.Services.Interfaces;
using Microsoft.EntityFrameworkCore;


AppSettingsService appSettingsService = new AppSettingsService();
CORSSettings corsSettings = appSettingsService.GetCORSSettings();

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<IAppSettingsService, AppSettingsService>();
builder.Services.AddScoped<MySQLDbContext>();

builder.Services.AddScoped<IRepository<User>, Repository<User>>();

builder.Services.AddDbContext<MySQLDbContext>(options =>
{
    string conn = "server=localhost;database=feschotelero;user=root;password=Root-Password-1234-$;";
    options.UseMySql(conn, ServerVersion.AutoDetect(conn));
});

builder.Services.AddCors(opt =>
{
    opt.AddPolicy(name: "CorsPolicy", builder =>
    {
        builder.WithOrigins(corsSettings.Origins)
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("CorsPolicy");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
