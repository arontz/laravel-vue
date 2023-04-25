Welcome to this assessment project that uses Laravel 9, Vue.js 3, and Inertia!

This project aims to assess your proficiency in developing web applications using the Laravel 9 framework, Vue.js 3, and Inertia. Please read this README file carefully to ensure that you have all the necessary information to get started.

## Installation

To install this project, please follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory and run the following command in your terminal to install the required dependencies:

   ```
   composer install
   ```

3. Once the composer installation is complete, run the following command to install the project's frontend dependencies:

   ```
   npm install
   ```

4. Create a copy of the `.env.example` file and name it `.env`.

5. Generate an application key by running the following command:

   ```
   php artisan key:generate
   ```

6. Configure your database settings in the `.env` file.

7. Run the following command to migrate the database:

   ```
   php artisan migrate
   ```

8. (Optional) If you want to seed the database with test data, run the following command:

   ```
   php artisan db:seed
   ```

9. Run the following command to start laravel in the development server:

   ```
   php artisan serve
   ```
   
10. Open another terminal and run the following command to start using inertia/vue/vite in the development server:

   ```
   npm run dev
   ```

## Technologies Used

This project was built using the following technologies:

- Laravel 9: A PHP web application framework.
- Vue.js 3: A JavaScript framework for building user interfaces.
- Inertia: A library that allows you to build single-page applications using server-side routing.

## Folder Structure

This project has the following folder structure:

- `app/`: Contains the Laravel application files.
- `resources/`: Contains the Vue.js components and other frontend assets.
- `routes/`: Contains the Laravel routes files.
- `database/migrations/`: Contains the Laravel database migration files.
- `database/seeds/`: Contains the Laravel database seeding files.

## Conclusion

Hope that you find it useful and informative, and that it helps you to showcase your skills in Laravel, Vue.js, and Inertia. If you have any questions or concerns, please do not hesitate to contact me.
