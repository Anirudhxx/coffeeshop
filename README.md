# Coffee Shop Finder

## Overview

Coffee Shop Finder is a web application designed to help users locate nearby coffee shops, add products to their cart, and enjoy an aesthetic user interface. The application leverages Google OAuth for user authentication and uses the GeoKeo API for geocoding and calculating distances. The project is containerized using Docker and deployed on AWS App Runner, with container images hosted on AWS ECR. Prisma is used for database access and schema management, connecting to a MongoDB Atlas database.

## Features

- **User Authentication**: Secure login using Google OAuth.
- **Coffee Shop Locator**: Find nearby coffee shops using GeoKeo's geolocation services.
- **Product Cart**: Add and manage products in a cart.
- **Responsive Design**: Aesthetic and responsive UI built with Material UI.
- **Distance Calculation**: Calculate distances to coffee shops using GeoKeo API.
- **Deployment**: Seamless deployment on AWS App Runner with container images hosted on AWS ECR.

## Technologies Used

- **AWS App Runner**: For deploying the application.
- **AWS ECR**: For hosting container images.
- **Prisma**: For database access and schema management.
- **Mongo Atlas**: For database hosting.
- **Express**: For building the server-side application.
- **Google OAuth**: For user authentication.
- **GeoKeo Geolocation**: For geolocation services.
- **Docker**: For containerizing the application.
- **Material UI**: For building the user interface.

## Live Demo

- **Frontend**: [Coffee Shop Finder Frontend](https://mdttfbysuw.us-east-1.awsapprunner.com/)
- **Backend**: [Coffee Shop Finder Backend](https://r5uv9hibkz.us-east-1.awsapprunner.com/)

## Getting Started

### Prerequisites

- Docker installed on your machine
- AWS CLI configured with appropriate permissions
- MongoDB Atlas account and cluster
- Google OAuth credentials
- GeoKeo API key

### Setup Instructions

1. **Clone the repository**

   ```sh
   git clone https://github.com/Anirudhxx/coffee-shop-finder.git
   cd coffee-shop-finder
   ```

2. **Set up environment variables**

   Create a separate `.env` file in the frontend and backend folders of your project and add the following environment variables:
   For Frontend:
   ```env
   PORT=3000
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   GEOKEO_API_KEY=your-geokeo-api-key
   ```
   For backend:
   ```env
   MONGO_URI=your-mongodb-atlas-uri

4. **Install dependencies**
   For frontend, you can use:
   ```sh
   cd frontend
   ```
   For backend, you can use:
   ```sh
   cd backend
   ```
   Then install all dependencies:
   ```sh
   npm install
   ```

5. **Run the application locally**
   For Frontend:
   ```sh
   npm start
   ```
   For Backend:
   ```sh
   npx prisma generate
   npm start
   ```


## Directory Structure

```
coffee-shop-finder/
├── backend/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── shopController.js
│   │   └── ...
│   ├── models/
│   │   ├── User.js
│   │   ├── Shop.js
│   │   └── ...
│   ├── routes/
│   │   ├── auth.js
│   │   ├── shops.js
│   │   └── ...
│   ├── app.js
│   └── server.js
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── GoogleLoginButton.js
│   │   │   ├── ProductCart.js
│   │   │   └── ...
│   │   ├── utils/
│   │   │   └── geolocation.js
│   │   ├── App.js
│   │   └── index.js
├── .env
├── Dockerfile
├── package.json
└── README.md
```

## Usage

Once the application is deployed, users can:
- Sign in using Google OAuth.
- You can use the search bar to enter your location and all the nearby coffee shops will be curated on hitting search button.
- Add products to their cart and manage them.
- Enjoy a beautifully designed, responsive UI.

