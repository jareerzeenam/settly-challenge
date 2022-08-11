## Settly Challenge

## Technologies used

* Laravel 9.x (PHP 8.0 Required)
* Laravel (Inertia) - https://inertiajs.com/
* React 18.2.0
* Tailwind CSS


## Setup Instructions

1. Clone the project from the repository to your local machine.

2. Open the project in your preferred code editor or IDE with a terminal and continue the below steps.

3. Copy the .env file.

```
cp .env.example .env
```
4. Install composer.

```
composer install
```
5. Install node package manager.

```
npm install && npm run dev
```

6. Generate app key.

```
php artisan key:generate
```

7. Edit the .env file with database configurations - SQLite/MySQL.

Note: if you are using SQLite, make sure you create a new SQLite database using the touch command in your terminal.
After the database has been created, you may easily configure your environment variables to point to this database by placing the absolute path to the database in the DB_DATABASE environment variable.

```
touch database/database.sqlite
```

1. Add the google recaptcha v2 keys to the .env

```
GOOGLE_RECAPTCHA_KEY=YOUR_KEY
GOOGLE_RECAPTCHA_SECRET=YOUR_KEY
```

9. Run migration.

```
php artisan migrate
```

10. Start server.

```
php artisan serve
```

