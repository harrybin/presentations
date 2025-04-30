using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace ContainerShipsAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ShipsController : ControllerBase
{
    private static readonly List<dynamic> _ships = new()
    {
        new { Id = 1, Name = "Ship A", IMONumber = "1234567", FlagCountry = "USA", MaxContainerCapacity = 1000, CurrentContainerCount = 500 },
        new { Id = 2, Name = "Ship B", IMONumber = "2345678", FlagCountry = "UK", MaxContainerCapacity = 800, CurrentContainerCount = 300 },
        new { Id = 3, Name = "Ever Given", IMONumber = "9811000", FlagCountry = "Panama", MaxContainerCapacity = 20124, CurrentContainerCount = 15000 },
        new { Id = 4, Name = "MSC Gülsün", IMONumber = "9839430", FlagCountry = "Liberia", MaxContainerCapacity = 23756, CurrentContainerCount = 20000 },
        new { Id = 5, Name = "HMM Algeciras", IMONumber = "9863297", FlagCountry = "Panama", MaxContainerCapacity = 23964, CurrentContainerCount = 22000 },
        new { Id = 6, Name = "CMA CGM Jacques Saadé", IMONumber = "9839172", FlagCountry = "France", MaxContainerCapacity = 23000, CurrentContainerCount = 21000 }
    };

    private static readonly List<dynamic> _containers = new()
    {
        new { Id = 1, ContainerNumber = "C123", Type = "Dry", Length = 20, Width = 8, Height = 8.5, Volume = 1360.0, Weight = 2000, ContainerShipId = 1 },
        new { Id = 2, ContainerNumber = "C124", Type = "Reefer", Length = 40, Width = 8, Height = 8.5, Volume = 2720.0, Weight = 4000, ContainerShipId = 1 },
        new { Id = 3, ContainerNumber = "C125", Type = "Dry", Length = 40, Width = 8, Height = 8.5, Volume = 2720.0, Weight = 4000, ContainerShipId = 2 },
        new { Id = 4, ContainerNumber = "C126", Type = "Reefer", Length = 20, Width = 8, Height = 8.5, Volume = 1360.0, Weight = 2000, ContainerShipId = 3 },
        new { Id = 5, ContainerNumber = "C127", Type = "Open Top", Length = 40, Width = 8, Height = 8.5, Volume = 2720.0, Weight = 4500, ContainerShipId = 4 },
        new { Id = 6, ContainerNumber = "C128", Type = "Flat Rack", Length = 20, Width = 8, Height = 8.5, Volume = 1360.0, Weight = 3000, ContainerShipId = 5 }
    };

    // GET: api/ships
    [HttpGet]
    public IActionResult GetShips()
    {
        var ships = _ships.Select(s => new
        {
            s.Id,
            s.Name,
            s.IMONumber,
            s.FlagCountry,
            s.MaxContainerCapacity,
            s.CurrentContainerCount
        }).ToList();

        return Ok(ships);
    }

    // GET: api/ships/5
    [HttpGet("{id}")]
    public IActionResult GetShipDetails(int id)
    {
        var ship = _ships.FirstOrDefault(s => s.Id == id);

        if (ship == null)
        {
            return NotFound();
        }

        var shipDetails = new
        {
            ship.Id,
            ship.Name,
            ship.IMONumber,
            ship.FlagCountry,
            ship.MaxContainerCapacity,
            ship.CurrentContainerCount,
            Containers = _containers.Where(c => c.ContainerShipId == ship.Id).Select(c => new
            {
                c.Id,
                c.ContainerNumber,
                c.Type,
                c.Length,
                c.Width,
                c.Height,
                c.Volume,
                c.Weight
            }).ToList()
        };

        return Ok(shipDetails);
    }

    // GET: api/ships/5/containervolume
    [HttpGet("{id}/containervolume")]
    public IActionResult CalculateContainerVolume(int id)
    {
        var ship = _ships.FirstOrDefault(s => s.Id == id);

        if (ship == null)
        {
            return NotFound();
        }

        double totalVolume = _containers.Where(c => c.ContainerShipId == ship.Id).Sum(c => (double)c.Volume);

        var result = new
        {
            ShipId = ship.Id,
            ShipName = ship.Name,
            TotalContainerVolume = totalVolume
        };

        return Ok(result);
    }
}