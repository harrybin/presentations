using System.Collections.Generic;

namespace ContainerShipsAPI.Models;

public class ContainerShip
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public string IMONumber { get; set; } = string.Empty;
    public double Length { get; set; } // in meters
    public double Width { get; set; } // in meters
    public double MaxSpeed { get; set; } // in knots
    public int MaxContainerCapacity { get; set; }
    public int CurrentContainerCount { get; set; }
    public string FlagCountry { get; set; } = string.Empty;
    public int YearBuilt { get; set; }

    // Navigation property
    public List<ShippingContainer> Containers { get; set; } = new List<ShippingContainer>();
}