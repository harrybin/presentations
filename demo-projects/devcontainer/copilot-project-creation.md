# Prompt  (Agent, Claude 3.7 Sonnet)

## Container Ships
The goal is to create a fullstack demo project using .net 9 as backend technology using a postgress database for storing data and react19 for the frontend.
The topic of the project is container ships.

## Demo data (backend)
Create 3 example Container ship objects with some typical data about container ships. It also should contains information about how many container can be/are loaded and which sizes (volume) those have.
Create a init script pushing that data into the database. (postgress database)

## API (backend)
The api should provide the folloing endpoints:
- query a list of all ships
- query data details for one ship
- calculate the volume sum of all container loaded by a ship

## Frontend (react 19 project)
Should be able to display a list of all shpis provided by the API.
when clicking on a ship its data details (see api) should be displayed
in the data details display there should be a button for calculating the volume sum of its containers by calling the API endpoint

Finally make sure both projects (backend and frontend) compile.

---
---
---

# Copilot output

Let's summarize what we've accomplished with our Container Ships demo project:

## Backend (.NET 9 with PostgreSQL)
- Created models for ContainerShip and ShippingContainer with appropriate relationships
- Set up Entity Framework Core with PostgreSQL database support
- Implemented the required API endpoints:
  - List all ships
  - Query detailed data for a specific ship
  - Calculate the volume sum of containers loaded on a ship
- Added database initialization with seed data for 3 example container ships

## Frontend (React 19 with TypeScript)
- Set up a React project with TypeScript support
- Created components for displaying ships list and ship details
- Implemented functionality to view container volume calculations
- Added API service to communicate with the backend

## Configuration and Documentation
- Updated the Program.cs to configure the database connection, CORS, and API endpoints
- Created a README.md with instructions for running the application

Both the backend and frontend parts of our application are now compiling successfully. The project is structured correctly, with all the required components in place.

To run the application:

1. Start the backend API by running dotnet run in the backend/ContainerShipsAPI directory
2. Start the frontend by running npm install followed by npm start in the frontend/container-ships-ui directory

The application will demonstrate:
- A list of container ships with basic information
- Detailed view of each ship when selected
- Calculation of the total container volume on a ship via API call

All requirements for the demo project have been met, and both parts (backend and frontend) are compiling successfully.
