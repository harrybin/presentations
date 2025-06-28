# Weblate Docker Setup

This repository provides a complete Docker setup to run a Weblate instance with PostgreSQL and Redis using Docker Compose.

## Usage

### Quick Start (Recommended)

1. **Start all services:**
   ```sh
   docker compose up -d
   ```

2. **Wait for initialization** (may take 2-3 minutes on first startup)

3. **Access Weblate:**
   Open your browser and go to [http://localhost:8080](http://localhost:8080)
   - **Email:** `admin@example.com`
   - **Password:** `adminpassword`

4. **Stop the services:**
   ```sh
   docker compose down
   ```

### Manual Docker Build (Advanced)

1. **Build the Docker image:**
   ```sh
   docker build -t my-weblate -f weblate.dockerfile .
   ```

2. **Run with external services:**
   ```sh
   docker run -p 8080:8080 \
     -e WEBLATE_SITE_DOMAIN=localhost:8080 \
     -e POSTGRES_HOST=your-postgres-host \
     -e REDIS_HOST=your-redis-host \
     my-weblate
   ```

   **Note:** This method requires you to provide external PostgreSQL and Redis services.

## Services

The Docker Compose setup includes:

- **PostgreSQL Database**: 
  - Database: `weblate`
  - Username: `weblate` 
  - Password: `weblatepassword`
  - Port: `5432`

- **Redis Cache**:
  - Used for caching and task queue
  - Port: `6379`

- **Weblate Service**:
  - Built from local Dockerfile
  - Available at: [http://localhost:8080](http://localhost:8080)
  - Admin credentials:
    - Email: `admin@example.com`
    - Password: `adminpassword`

## Troubleshooting

If you can't access Weblate at http://localhost:8080:

1. **Check if services are running:**
   ```sh
   docker compose ps
   ```

2. **View logs for debugging:**
   ```sh
   docker compose logs weblate
   ```

3. **Rebuild and restart if needed:**
   ```sh
   docker compose down
   docker compose build --no-cache weblate
   docker compose up -d
   ```

4. **Wait for initialization:**
   Weblate may take 2-3 minutes to initialize the database on first startup.

5. **Check container health:**
   The Weblate container shows "health: starting" during initialization, which is normal.

## Data Persistence

- **Database data** is stored in the `db_data` Docker volume
- **Redis data** is stored in the `redis_data` Docker volume  
- **Weblate configuration and data** is stored in the `weblate_data` Docker volume
- **Weblate cache** is stored in the `weblate_cache` Docker volume
- All data persists between container restarts

## Customization

- You can copy custom settings or configuration files by uncommenting and editing the `COPY` line in the Dockerfile
- Environment variables can be customized in the `docker-compose.yml` file
- For production use, change default passwords and configure proper domains

> **Note:**  
> This Dockerfile uses the official [weblate/weblate](https://hub.docker.com/r/weblate/weblate) image.  
> For production use, configure environment variables and persistent storage as described in the [Weblate Docker documentation](https://docs.weblate.org/en/latest/admin/docker.html).
