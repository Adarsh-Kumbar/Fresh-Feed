# Fresh Feed: A Modern News Aggregator

Fresh Feed is a full-stack news aggregator built using the MERN stack (MongoDB, Express.js, React, and Node.js). The application allows users to browse the latest news articles fetched from various sources in real-time.

![1](https://github.com/user-attachments/assets/46f6dfaf-b7ec-4e3f-81e5-a88c24117f18)
![2](https://github.com/user-attachments/assets/5f81b2f4-d482-4f6e-a08e-9769118a4110)

## Getting Started:

## Features:

- Real-Time News Fetching: The app fetches live news data from an API and displays it dynamically, ensuring users always have access to the latest stories.
- Responsive Design: Built with Material-UI and styled components, the app provides a sleek and responsive user interface that adapts to different screen sizes.
- Category Filtering: Users can browse news articles by category, making it easy to find stories that match their interests.
- Optimized for Performance: The backend is built with Express.js and Node.js, ensuring efficient handling of API requests and serving of data.
- MERN Stack: The project leverages MongoDB for data storage, Express.js and Node.js for the backend, and React for the frontend, providing a seamless full-stack experience.

## Technologies Used:

- MongoDB: For storing and retrieving news articles.
- Express.js: Backend framework for handling API requests and routing.
- React: Frontend library for building dynamic user interfaces.
- Node.js: Runtime environment for executing server-side code.
- Material-UI: For building responsive and modern UI components.
- Axios: For making HTTP requests to the backend API.

## How It Works:

- Fetching News: The frontend React application sends requests to the Express.js backend, which in turn fetches news articles from a third-party news API.
- Displaying News: The news articles are displayed in a clean, card-based layout, with images, titles, and descriptions for each article.
- CORS Handling: The server is configured to handle Cross-Origin Resource Sharing (CORS) to allow communication between the frontend and backend during development.

 ## To run this project locally:
 
- Clone the repository to your local machine.
- Install dependencies for both the frontend (client) and backend (server) using npm install.
- Start the backend server using npm run start from the server directory.
- Start the frontend development server using npm start from the client directory.
- Visit http://localhost:3000 to view the app.

## Future Enhancements:

- User Authentication: Allow users to create accounts and save their favorite articles.
- Enhanced Filtering: Add more advanced filtering options for a better user experience.
