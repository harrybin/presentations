# Container Ships Demo Project

A full-stack demo application using .NET 9 with PostgreSQL for the backend and React 19 for the frontend.

## Project Structure

- **backend**: Contains the .NET 9 API that connects to PostgreSQL
- **frontend**: Contains the React 19 UI
- **app-data**: Stores PostgreSQL data

## Getting Started

### Prerequisites

- Docker and Docker Compose (for running PostgreSQL in the dev container)
- .NET 9 SDK
- Node.js (version 18+)

### Running the Backend

1. Start PostgreSQL:
   ```bash
   # PostgreSQL is set up automatically if using the dev container
   ```

2. Navigate to the backend/ContainerShipsAPI directory:
   ```bash
   cd backend/ContainerShipsAPI
   ```

3. Run the application:
   ```bash
   dotnet run
   ```

4. The API will be available at http://localhost:5139

### Running the Frontend

1. Navigate to the frontend/container-ships-ui directory:
   ```bash
   cd frontend/container-ships-ui
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. The frontend will be available at http://localhost:3000

## API Endpoints

- GET `/api/ships` - Returns a list of all container ships
- GET `/api/ships/{id}` - Returns detailed information about a specific container ship
- GET `/api/ships/{id}/containervolume` - Calculates the total volume of containers loaded on a ship

## Database

The application uses PostgreSQL with Entity Framework Core for data access. The database is automatically seeded with sample data on startup.