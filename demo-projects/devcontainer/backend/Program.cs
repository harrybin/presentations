using ContainerShipsAPI.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Add controllers
builder.Services.AddControllers();

// Add OpenAPI/Swagger
builder.Services.AddSwaggerGen();

// Add CORS policy with proper configuration for local development
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins("http://localhost:3000")
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
    app.MapOpenApi();
    app.UseDeveloperExceptionPage();
}

// Use CORS before routing
app.UseCors();

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
