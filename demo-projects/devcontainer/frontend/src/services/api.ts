import axios from 'axios';
import { Ship, ShipDetail, VolumeResult } from '../types/Ship';

// Fixed API URL targeting the correct backend endpoint
const API_URL = 'http://localhost:5139/api';

// Add axios default settings to handle CORS
axios.defaults.headers.common['Accept'] = 'application/json';

export const fetchShips = async (): Promise<Ship[]> => {
  try {
    console.log("Fetching ships from:", `${API_URL}/ships`);
    const response = await axios.get<Ship[]>(`${API_URL}/ships`);
    return response.data;
  } catch (error) {
    console.error('Error fetching ships:', error);
    throw error;
  }
};

export const fetchShipDetails = async (id: number): Promise<ShipDetail> => {
  try {
    const response = await axios.get<ShipDetail>(`${API_URL}/ships/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ship details for ID ${id}:`, error);
    throw error;
  }
};

export const calculateContainerVolume = async (id: number): Promise<VolumeResult> => {
  try {
    const response = await axios.get<VolumeResult>(`${API_URL}/ships/${id}/containervolume`);
    return response.data;
  } catch (error) {
    console.error(`Error calculating container volume for ship ID ${id}:`, error);
    throw error;
  }
};