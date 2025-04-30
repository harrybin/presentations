import React, { useState, useEffect } from 'react';
import { fetchShipDetails, calculateContainerVolume } from '../services/api';
import { ShipDetail } from '../types/Ship';
import './ShipDetails.css';

interface ShipDetailsProps {
  shipId: number;
  onBackClick: () => void;
}

const ShipDetails: React.FC<ShipDetailsProps> = ({ shipId, onBackClick }) => {
  const [shipDetails, setShipDetails] = useState<ShipDetail | null>(null);
  const [volumeResult, setVolumeResult] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [calculating, setCalculating] = useState<boolean>(false);

  useEffect(() => {
    const loadShipDetails = async () => {
      try {
        setLoading(true);
        const data = await fetchShipDetails(shipId);
        setShipDetails(data);
        setError(null);
      } catch (err) {
        setError('Failed to load ship details. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadShipDetails();
  }, [shipId]);

  const handleCalculateVolume = async () => {
    try {
      setCalculating(true);
      const result = await calculateContainerVolume(shipId);
      setVolumeResult(result.totalContainerVolume);
    } catch (err) {
      setError('Failed to calculate container volume.');
      console.error(err);
    } finally {
      setCalculating(false);
    }
  };

  if (loading) {
    return <p>Loading ship details...</p>;
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="error-message">{error}</p>
        <button className="back-button" onClick={onBackClick}>Back to List</button>
      </div>
    );
  }

  if (!shipDetails) {
    return (
      <div className="error-container">
        <p>No ship details found.</p>
        <button className="back-button" onClick={onBackClick}>Back to List</button>
      </div>
    );
  }

  return (
    <div className="ship-details-container">
      <button className="back-button" onClick={onBackClick}>
        &larr; Back to Ship List
      </button>
      
      <div className="ship-details-card">
        <h2>{shipDetails.name}</h2>
        
        <div className="details-grid">
          <div className="detail-item">
            <span className="label">IMO Number:</span>
            <span className="value">{shipDetails.imoNumber}</span>
          </div>
          <div className="detail-item">
            <span className="label">Flag Country:</span>
            <span className="value">{shipDetails.flagCountry}</span>
          </div>
          <div className="detail-item">
            <span className="label">Year Built:</span>
            <span className="value">{shipDetails.yearBuilt}</span>
          </div>
          <div className="detail-item">
            <span className="label">Length:</span>
            <span className="value">{shipDetails.length} meters</span>
          </div>
          <div className="detail-item">
            <span className="label">Width:</span>
            <span className="value">{shipDetails.width} meters</span>
          </div>
          <div className="detail-item">
            <span className="label">Max Speed:</span>
            <span className="value">{shipDetails.maxSpeed} knots</span>
          </div>
          <div className="detail-item">
            <span className="label">Container Capacity:</span>
            <span className="value">{shipDetails.maxContainerCapacity}</span>
          </div>
          <div className="detail-item">
            <span className="label">Current Container Count:</span>
            <span className="value">{shipDetails.currentContainerCount}</span>
          </div>
        </div>

        <div className="calculate-section">
          <h3>Container Volume Calculation</h3>
          <button 
            className="calculate-button" 
            onClick={handleCalculateVolume}
            disabled={calculating}
          >
            {calculating ? 'Calculating...' : 'Calculate Total Container Volume'}
          </button>
          
          {volumeResult !== null && (
            <div className="volume-result">
              <h4>Total Container Volume:</h4>
              <p className="volume-value">{volumeResult.toFixed(2)} cubic meters</p>
            </div>
          )}
        </div>
        
        <div className="containers-section">
          <h3>Containers ({shipDetails.containers.length})</h3>
          {shipDetails.containers.length === 0 ? (
            <p>No containers loaded on this ship.</p>
          ) : (
            <table className="containers-table">
              <thead>
                <tr>
                  <th>Container Number</th>
                  <th>Type</th>
                  <th>Dimensions (LxWxH)</th>
                  <th>Volume</th>
                  <th>Weight (tons)</th>
                </tr>
              </thead>
              <tbody>
                {shipDetails.containers.map(container => (
                  <tr key={container.id}>
                    <td>{container.containerNumber}</td>
                    <td>{container.type}</td>
                    <td>{container.length}m × {container.width}m × {container.height}m</td>
                    <td>{(container.volume).toFixed(2)} m³</td>
                    <td>{container.weight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShipDetails;