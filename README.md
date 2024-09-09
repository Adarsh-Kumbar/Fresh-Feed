# Fresh Feed: A Modern News Aggregator

Fresh Feed is a MERN stack web application designed to deliver the latest news from various sources in a streamlined and user-friendly interface. The app leverages a responsive design with Material-UI components and provides a curated feed of news articles through an API integration.

![1](https://github.com/user-attachments/assets/46f6dfaf-b7ec-4e3f-81e5-a88c24117f18)
![2](https://github.com/user-attachments/assets/5f81b2f4-d482-4f6e-a08e-9769118a4110)

## Getting Started:

## Features:

- News Aggregation: Fetches and displays the latest news articles from a MongoDB database, providing users with up-to-date information.
- Responsive Design: Optimized for different screen sizes, ensuring a seamless experience on desktop, tablet, and mobile devices.
- Material-UI Integration: Utilizes Material-UI for a modern and visually appealing interface.
- Styled Components: Implements custom-styled components to enhance the look and feel of the app.
- CORS-Handled API Requests: Integrates with backend services while handling cross-origin resource 
sharing (CORS) issues efficiently.

## Technologies Used:

- React: For building the user interface.
- Material-UI: For styling and component design.
- Axios: For handling API requests.
- Node.js & Express.js: Backend service for serving news data and handling API endpoints.
- MongoDB: For storing and retrieving news articles and user data.
- Styled-Components: For styling React components with CSS.

## How It Works:

- News Fetching: The app sends an HTTP request to the backend server built with Express.js, which queries the MongoDB database to fetch the latest news articles.
- Rendering: The fetched news data is passed to components that display each article in a visually appealing layout using React and Material-UI.
- Responsiveness: Material-UI and custom styles ensure that the application adapts to different screen sizes, offering a consistent experience across devices.

 ## To run this project locally:
 
- Clone the repository.
- Install the dependencies using npm install in both the client and server directories.
- Start the backend server using npm start or node server.js to run the Express.js and MongoDB backend.
- Start the frontend development server using npm start to run the React frontend.
- Ensure that the MongoDB database and backend server are properly connected and accessible.

## Future Enhancements:

- User Authentication: Allow users to create accounts and save their favorite articles.
- Enhanced Filtering: Add more advanced filtering options for a better user experience.
