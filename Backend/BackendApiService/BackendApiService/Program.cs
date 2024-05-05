using Application.AutomapperProfilers;
using Application.Interfaces;
using Application.Services;
using Infrastructure.Configuration;
using Infrastructure.Data.DbContexts;
using Infrastructure.Data.Interfaces;
using Infrastructure.Data.Repositories;
using Infrastructure.Data.Scaffold;
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

builder.Services.AddAutoMapper(typeof(UserProfile));
builder.Services.AddAutoMapper(typeof(CountryProfile));
builder.Services.AddAutoMapper(typeof(CityProfile));
builder.Services.AddAutoMapper(typeof(AgencyProfile));
builder.Services.AddAutoMapper(typeof(CancellationReasonProfile));

builder.Services.AddScoped<IAppSettingsService, AppSettingsService>();
builder.Services.AddScoped<MySQLDbContext>();

builder.Services.AddScoped<IRepository<User>, Repository<User>>();
builder.Services.AddScoped<IRepositoryUser, RepositoryUser>();
builder.Services.AddScoped<IRepository<Country>, Repository<Country>>();
builder.Services.AddScoped<IRepository<City>, Repository<City>>();
builder.Services.AddScoped<IRepository<Agency>, Repository<Agency>>();
builder.Services.AddScoped<IRepository<CancellationReason>, Repository<CancellationReason>>();

builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<ICountryService, CountryService>();
builder.Services.AddScoped<ICityService, CityService>();
builder.Services.AddScoped<IAgencyService, AgencyService>();
builder.Services.AddScoped<ICancellationReasonService, CancellationReasonService>();

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
