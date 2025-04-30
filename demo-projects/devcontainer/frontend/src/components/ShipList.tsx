import React from 'react';
import { Ship } from '../types/Ship';
import './ShipList.css';

interface ShipListProps {
  ships: Ship[];
  onShipSelect: (ship: Ship) => void;
}

const ShipList: React.FC<ShipListProps> = ({ ships, onShipSelect }) => {
  return (
    <div className="ship-list">
      <h2>Available Container Ships</h2>
      {ships.length === 0 ? (
        <p>No ships available.</p>
      ) : (
        <div className="ship-grid">
          {ships.map((ship) => (
            <div 
              key={ship.id} 
              className="ship-card"
              onClick={() => onShipSelect(ship)}
            >
              <h3>{ship.name}</h3>
              <div className="ship-details">
                <p><strong>IMO Number:</strong> {ship.imoNumber}</p>
                <p><strong>Flag:</strong> {ship.flagCountry}</p>
                <p><strong>Container Capacity:</strong> {ship.maxContainerCapacity}</p>
                <p><strong>Current Load:</strong> {ship.currentContainerCount}</p>
              </div>
              <div className="view-details-btn">
                View Details
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShipList;