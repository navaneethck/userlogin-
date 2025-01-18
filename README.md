# User Login & Signup Project

## Overview

This is a simple User Login and Signup application built using the MERN stack (MongoDB, Express, React, Node.js). The project focuses on user authentication, secure password hashing, and a responsive UI, leveraging modern tools such as **Argon2** for password hashing, **Axios** for making API requests, **Tailwind CSS** for styling, and **React** for frontend state management.

## Features

- **User Authentication**: Users can sign up and log in securely.
- **Password Hashing**: Passwords are hashed using **Argon2** for security (instead of bcrypt).
- **API Integration**: API calls are made using **Axios**, making it easy to handle requests and responses.
- **Responsive Design**: Tailwind CSS is used for styling, providing a responsive and modern UI.
- **State Management**: React's `useState` and `useEffect` hooks are used for state management, making the app's behavior dynamic and responsive to user input.
  
## Technologies Used

- **React**: Used for building the frontend UI, providing a dynamic user experience with state management using `useState`.
- **Axios**: Used to make HTTP requests to the backend API, replacing the traditional `fetch` method. Axios simplifies handling of requests and responses.
- **Node.js & Express**: Used for the backend server, where API routes for login and signup are handled.
- **MongoDB**: The database used to store user data such as email, name, and password (hashed).
- **Argon2**: A modern, cryptographically secure password hashing algorithm used instead of bcrypt for password security.
- **Tailwind CSS**: A utility-first CSS framework used for building a responsive, clean UI with minimal effort.


## Future Improvements

While this project is functional, there are several improvements that could be added in the future:

- **JWT Authentication**: Implement JSON Web Token (JWT) for secure user authentication, allowing for token-based login and maintaining user sessions.
- **Password Reset**: Add a feature to allow users to reset their password if they forget it.
- **User Profile**: After login, users can be redirected to a personalized dashboard to view and update their profile.
- **Social Login**: Integrate with third-party services (Google, Facebook) for easier sign-up and login.
- **Error Handling**: Improve error handling on both frontend and backend to display more user-friendly messages.
- **Unit Tests**: Add unit tests for backend API routes and frontend components.
