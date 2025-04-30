import React, { useState, useEffect } from 'react';
import './App.css';
import ShipList from './components/ShipList';
import ShipDetails from './components/ShipDetails';
import { Ship } from './types/Ship';
import { fetchShips } from './services/api';

const App: React.FC = () => {
  const [ships, setShips] = useState<Ship[]>([]);
  const [selectedShip, setSelectedShip] = useState<Ship | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadShips = async () => {
      try {
        setLoading(true);
        const data = await fetchShips();
        setShips(data);
        setError(null);
      } catch (err) {
        setError('Failed to load ships. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadShips();
  }, []);

  const handleShipSelect = (ship: Ship) => {
    setSelectedShip(ship);
  };

  const handleBackToList = () => {
    setSelectedShip(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Container Ships Management</h1>
      </header>
      <main className="App-main">
        {loading ? (
          <p>Loading ships...</p>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : selectedShip ? (
          <ShipDetails 
            shipId={selectedShip.id} 
            onBackClick={handleBackToList} 
          />
        ) : (
          <ShipList ships={ships} onShipSelect={handleShipSelect} />
        )}
      </main>
      <footer className="App-footer">
        <p>&copy; 2025 Container Ships Demo Project</p>
      </footer>
    </div>
  );
};

export default App;