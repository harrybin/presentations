FROM weblate/weblate:latest

# Optional: Copy custom settings or configuration if needed
# COPY ./custom-settings.py /app/data/settings.py

# Expose the default Weblate port
EXPOSE 8080

# Set environment variables for PostgreSQL (required)
ENV POSTGRES_DB=weblate \
    POSTGRES_USER=weblate \
    POSTGRES_PASSWORD=weblatepassword

# Set environment variables for initial setup
ENV WEBLATE_SITE_DOMAIN=localhost:8080 \
    WEBLATE_ADMIN_EMAIL=admin@example.com \
    WEBLATE_ADMIN_PASSWORD=adminpassword

# Start Weblate (use the default entrypoint from the official image)
# CMD is not needed as the official image has the correct entrypoint