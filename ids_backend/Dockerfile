# Use python 3.12 slim as base
FROM python:3.12-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    UV_COMPILE_BYTECODE=1

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    ffmpeg \
    build-essential \
    libpq-dev \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Install uv
COPY --from=ghcr.io/astral-sh/uv:latest /uv /uvx /bin/

# Set working directory
WORKDIR /app

# Copy dependency files
COPY pyproject.toml uv.lock ./

# Install dependencies using uv
RUN uv sync --frozen --no-cache

# Copy project files
COPY . .



# Path for uv environment
ENV PATH="/app/.venv/bin:$PATH"

# Run collectstatic
RUN SECRET_KEY=build-time-only-secret python manage.py collectstatic --noinput

# Expose port
EXPOSE 8000

# Start gunicorn
CMD ["bash", "-c", "uv run manage.py migrate --noinput && uv run manage.py seed_accounts && gunicorn config.wsgi:application --bind 0.0.0.0:8000"]