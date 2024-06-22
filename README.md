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

   Create a `.env` file in the root of your project and add the following environment variables:

   ```env
   PORT=3000
   MONGO_URI=your-mongodb-atlas-uri
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   GEOKEO_API_KEY=your-geokeo-api-key
   ```

3. **Install dependencies**
   For frontend, you can use:
   ```sh
   cd frontend
   ```
   For backend, you can use:
   ```sh
   cd frontend
   ```
   Then install all dependencies:
   ```sh
   npm install
   ```

5. **Run the application locally**

   ```sh
   npm start
   ```

6. **Dockerize the application**

   Create a `Dockerfile` in the root of your project:

   ```Dockerfile
   # Use the official Node.js 14 image.
   FROM node:14

   # Create and change to the app directory.
   WORKDIR /usr/src/app

   # Copy application dependency manifests to the container image.
   # A wildcard is used to ensure both package.json AND package-lock.json are copied.
   COPY package*.json ./

   # Install dependencies.
   RUN npm install

   # Copy local code to the container image.
   COPY . .

   # Run the web service on container startup.
   CMD [ "npm", "start" ]

   # Document that the service listens on port 3000.
   EXPOSE 3000
   ```

7. **Build and tag the Docker image**

   ```sh
   docker build -t coffee-shop-finder .
   ```

8. **Push the Docker image to AWS ECR**

   - **Create a repository in AWS ECR**:

     ```sh
     aws ecr create-repository --repository-name coffee-shop-finder
     ```

   - **Authenticate Docker to your ECR repository**:

     ```sh
     aws ecr get-login-password --region your-region | docker login --username AWS --password-stdin your-account-id.dkr.ecr.your-region.amazonaws.com
     ```

   - **Tag and push your image**:

     ```sh
     docker tag coffee-shop-finder:latest your-account-id.dkr.ecr.your-region.amazonaws.com/coffee-shop-finder:latest
     docker push your-account-id.dkr.ecr.your-region.amazonaws.com/coffee-shop-finder:latest
     ```

9. **Deploy to AWS App Runner**

   - **Create a new service in AWS App Runner**:
     - Choose **Source** as **Container registry**.
     - Select **Amazon ECR** and your repository.
     - Configure the settings and environment variables as needed.
     - Deploy the application.

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
- Find nearby coffee shops based on their location.
- Add products to their cart and manage them.
- Enjoy a beautifully designed, responsive UI.

## Contributing

We welcome contributions! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to get involved.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
