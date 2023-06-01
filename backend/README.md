# Game Backend

This is the backend for the game application developed using Node.js, MongoDB, and Express.js. It provides various APIs for user authentication, sending emails, and game-related functionalities.

## Features

⚡  User Authentication: The backend supports user registration, login, and authentication using JWT (JSON Web Tokens).
⚡  Email Sending: Nodemailer is integrated to send emails for user authentication, password reset, and other notifications.
⚡  API Endpoints: The backend provides APIs for game actions, such as starting a new game, saving game progress, retrieving game data, etc.
⚡  Database Integration: MongoDB is used to store user data, game details, and other relevant information.
⚡  Security: The backend implements secure authentication mechanisms and handles data validation and sanitization.

## Technologies Used

⚡  Node.js: A JavaScript runtime environment for server-side development.
⚡  Express.js: A minimal and flexible web application framework for Node.js.
⚡  MongoDB: A NoSQL database used for data storage.
⚡  Nodemailer: A module for sending emails from Node.js applications.

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/game-backend.git

2. Navigate to the project directory:

    ```bash
    cd game-backend
  
3. Install the dependencies:

    ```bash
    npm install

4. Set up the environment variables:

Create a .env file in the root directory.
Define the required environment variables in the file, such as MongoDB connection details, email server credentials, etc.

5. Start the server:

    ```bash
    npm start

6. The backend API endpoints will be accessible at `http://localhost:8000`.

## Usage
⚡ Use the provided API documentation or explore the codebase to understand the available API endpoints and their functionalities.
⚡ Register a user account using the registration API endpoint.
⚡ Log in with the registered account using the login API endpoint.
⚡ Utilize the various game-related API endpoints to perform game actions, such as starting a new game, saving game progress, retrieving game data, etc.
⚡ Send emails for user authentication or any other relevant notifications using the email API endpoints.
⚡ Customize and extend the backend as per your specific game requirements.
⚡ Contributing
⚡ Contributions to the project are welcome! If you find any bugs or want to add new features, please open an issue or submit a pull request.

## License
This project is licensed under the MIT License.

## Contact
For any inquiries or feedback, please contact:

Prashant
Email: `prashant201103@gmail.com`


