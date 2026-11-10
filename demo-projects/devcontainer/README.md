# Container Ships Demo Project

A full-stack demo application using a .NET 9 API and a React 18 frontend.

## Project Structure

- **backend**: Contains the .NET 9 API with in-memory sample ships and containers
- **frontend**: Contains the React 18 UI and its own npm lockfile

## Getting Started

### Prerequisites

- Docker with Dev Containers support, if using the supplied development container
- .NET 9 SDK
- Node.js 24 and npm for the frontend

### Running the Backend

1. From this demo's directory, navigate to the backend:

   ```powershell
   Set-Location .\backend
   ```

2. Run the application:

   ```powershell
   dotnet run
   ```

3. Check the actual startup URL; the development launch profile uses http://localhost:5139.

### Running the Frontend

1. From this demo's directory, navigate to the frontend:

   ```powershell
   Set-Location .\frontend
   ```

2. Install dependencies:

   ```powershell
   npm ci
   ```

3. Start the development server:

   ```powershell
   npm start
   ```

4. The frontend will be available at http://localhost:3000

## API Endpoints

- GET `/api/ships` - Returns a list of all container ships
- GET `/api/ships/{id}` - Returns detailed information about a specific container ship
- GET `/api/ships/{id}/containervolume` - Calculates the total volume of containers loaded on a ship

## Database

The current controller serves sample data from static in-memory lists. The supplied API project does not configure PostgreSQL or Entity Framework Core; no database setup is required for this implementation.
