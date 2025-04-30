export interface Ship {
  id: number;
  name: string;
  imoNumber: string;
  flagCountry: string;
  maxContainerCapacity: number;
  currentContainerCount: number;
}

export interface ShippingContainer {
  id: number;
  containerNumber: string;
  type: string;
  length: number;
  width: number;
  height: number;
  volume: number;
  weight: number;
  containerShipId: number;
}

export interface ShipDetail extends Ship {
  length: number;
  width: number;
  maxSpeed: number;
  yearBuilt: number;
  containers: ShippingContainer[];
}

export interface VolumeResult {
  shipId: number;
  shipName: string;
  totalContainerVolume: number;
}