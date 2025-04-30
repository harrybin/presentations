namespace ContainerShipsAPI.Models;

public class ShippingContainer
{
    public int Id { get; set; }
    public string ContainerNumber { get; set; } = string.Empty;
    public string Type { get; set; } = string.Empty; // Standard, Refrigerated, Tank, etc.
    public double Length { get; set; } // in meters
    public double Width { get; set; } // in meters
    public double Height { get; set; } // in meters
    public double Volume => Length * Width * Height; // Calculated volume in cubic meters
    public double Weight { get; set; } // in tons

    // Foreign key for ContainerShip
    public int ContainerShipId { get; set; }
    public ContainerShip? Ship { get; set; }
}