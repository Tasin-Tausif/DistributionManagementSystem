FROM php:8.2-cli

WORKDIR /var/www/html

# Install minimal packages and required PHP extensions
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        git \
        unzip \
        libzip-dev \
        libonig-dev \
        libxml2-dev \
    && docker-php-ext-install pdo_mysql mbstring zip \
    && rm -rf /var/lib/apt/lists/*

# Provide composer binary from the official composer image
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Copy composer files first to leverage Docker layer caching
COPY composer.json composer.lock ./
RUN composer install --no-interaction --prefer-dist --optimize-autoloader || true

# Copy the application code
COPY . .

EXPOSE 8000

# Minimal start command for development
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]
