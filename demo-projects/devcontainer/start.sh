#!/bin/bash

echo "Starting Container Ships Demo Project..."

# Navigate to project root directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR" || exit

echo "Checking prerequisites..."
if ! command -v dotnet &> /dev/null; then
    echo "Error: .NET SDK not found. Please install .NET SDK 9.0 or later."
    exit 1
fi

if ! command -v npm &> /dev/null; then
    echo "Error: npm not found. Please install Node.js and npm."
    exit 1
fi

# Rebuild the backend API
cd backend || exit
if ! dotnet build; then
    echo "Error: Failed to rebuild the backend API."
    exit 1
fi
cd "$SCRIPT_DIR" || exit

echo "Starting backend API..."
cd backend || exit
dotnet run --urls=http://localhost:5139/ &
BACKEND_PID=$!
cd "$SCRIPT_DIR" || exit

echo "Waiting for backend to initialize (5 seconds)..."
sleep 5

echo "Installing frontend dependencies..."
cd frontend || exit
npm install

echo "Starting frontend..."
npm start &
FRONTEND_PID=$!
cd "$SCRIPT_DIR" || exit

echo
echo "Container Ships Demo Project is starting up!"
echo
echo "Backend API: http://localhost:5139/api/ships"
echo "Backend Swagger: http://localhost:5139/swagger/index.html"
echo "Frontend UI: http://localhost:3000"
echo
echo "Press Ctrl+C to stop all services..."

# Instructions to access Swagger endpoint
# After starting the backend, open the following URL in your browser to access the Swagger UI:
# http://localhost:5139/swagger/index.html

# Set up a trap to catch Ctrl+C and kill the background processes
trap 'echo "Stopping services..."; kill $BACKEND_PID $FRONTEND_PID 2>/dev/null; echo "Project stopped successfully."; exit' INT

# Wait indefinitely until user presses Ctrl+C
wait