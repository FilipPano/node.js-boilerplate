# Documentation

### Project Setup

1. Run **`npm install`** (npm is required on your local machine)

1. Create a **`.env`** file in the project’s root and copy & paste the following:

    ```
   PORT=<your desired port here>
   JWT_SECRET_KEY=<your desired jwt secret key here>
    ```
   
1. Set the path to your MongoDB server in **`config/default.json`** (**MongoDB is required** to be installed on your machine)

1. Run **`npm dev or npm start`** to start the project (For `npm dev` **nodemon is required**)

---

### Folder Structure

We have a folder structure as following:

- **`config`**
    > Contains all the configuration environments for the application

- **`middleware`**
    > Contains middleware functions that are used throughout the express routes

- **`setup`**
    > Contains functions that setup routes/database when your application starts

- **`users`**
    > Contains all the modules that work with the user object (this can be used as a template for defining future modules and can be removed if your application does not need authentication/authorization)

- **`utils`**
    > Contains utility functions that are used throughout the application (ex: logging)
---

### Conventions

- Each new domain object introduced to the application is put into it's own folder (ex: **products**) and it contains all the logic that works with products (*routes*, *services*, *model*, *validation*, *dal*, *dto*)

- Separate domain objects should only communicate with each other using events (you can't directly import product modules in your user module)

---

### Dependencies

- **express** (for building a web server)

- **mongoose** (for working with MongoDB)

- **config** (for setting configuration variables)

- **dotenv** (for creating environment variables)

- **jsonwebtoken** (for jwt authentication)

- **bcrypt** (for password encryption)

- **winston** (for logging messages)

- **joi && joi-objectid** (for client input validation)

- **express-async-errors** (for handling errors in routers)

- **helmet** (for http security)

- **compression** (for compressing the http response sent to the client)
