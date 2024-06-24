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

## Technologies Used and Justifications

- **AWS App Runner**: I opted for AWS App Runner because I wanted a hassle-free way to deploy my containerized application. Managing servers can be tedious, but App Runner takes care of the infrastructure, scaling, and load balancing automatically. This allowed me to focus more on developing features for Coffee Shop Finder rather than worrying about deployment complexities.
- **AWS ECR**:  I chose AWS ECR to store my Docker container images securely. Since it integrates seamlessly with AWS App Runner, it made the whole process of managing and deploying container images much smoother. ECR's reliability and security gave me peace of mind knowing that my images are safe and readily available for deployment.
  
- **Prisma**: Prisma was a no-brainer for me. It's an open-source database toolkit that makes interacting with my MongoDB database super easy. The type-safe ORM it provides ensures that I catch errors early in development, and the modern workflows it supports streamline schema management, making my development process more efficient.
  
- **Mongo Atlas**: I went with MongoDB Atlas because I needed a robust, fully managed database service. Atlas handles the heavy lifting of database management, such as backups and scaling, which means I don't have to. This allowed me to focus on building the application's features rather than getting bogged down in database administration.

- **Express**:I chose Express for building the server-side application because of its simplicity and flexibility. It's a lightweight framework that doesn't get in the way, yet it's powerful enough to handle all my API needs. Express's wide range of middleware options also made it easy to add functionalities like logging and error handling, making development faster and more straightforward.
  
- **Google OAuth**: Implementing Google OAuth was an easy decision. It provides a secure and familiar way for users to log in, which improves the user experience significantly. By allowing users to log in with their existing Google accounts, I didn't have to build an authentication system from scratch, saving me a lot of time and ensuring a high level of security.
  
- **GeoKeo Geolocation**:GeoKeo's geolocation services are essential for the core functionality of Coffee Shop Finder. They enable the app to determine users' locations accurately and calculate distances to nearby coffee shops. This functionality is crucial for delivering a personalized and useful experience to users looking for coffee shops near them.
  
- **Docker**:Using Docker was a game-changer. It allowed me to containerize the application, ensuring that it runs consistently across different environments. This consistency is vital for avoiding those "it works on my machine" problems, making development, testing, and deployment processes much smoother and more predictable.
  
- **Material UI**: : I picked Material UI because I wanted the app to look good and be easy to use. Material UI follows Google's Material Design principles, which means it provides a clean, modern, and responsive user interface. This library made it easy to build a visually appealing application without spending too much time on design, and the pre-built components sped up the development process considerably.

## Live Demo

- **Frontend**: [Coffee Shop Finder Frontend](https://mdttfbysuw.us-east-1.awsapprunner.com/)
- **Backend**: [Coffee Shop Finder Backend](https://r5uv9hibkz.us-east-1.awsapprunner.com/)

## API Endpoints

### Users

- **Create a User**
  - **Endpoint**: `/api/users`
  - **Method**: POST
  - **Description**: Creates a new user.
  - **Body Parameters**:
    - `name` (required): The name of the user.
    - `email` (required): The email address of the user.
    - `password` (required): The password for the user.

- **Get All Users**
  - **Endpoint**: `/api/users`
  - **Method**: GET
  - **Description**: Retrieves all users.

- **Get User by ID**
  - **Endpoint**: `/api/users/:id`
  - **Method**: GET
  - **Description**: Retrieves a user by their ID.

- **Update User**
  - **Endpoint**: `/api/users/:id`
  - **Method**: PUT
  - **Description**: Updates a user's information.
  - **Body Parameters**:
    - `name` (required): The updated name of the user.

- **Delete User**
  - **Endpoint**: `/api/users/:id`
  - **Method**: DELETE
  - **Description**: Deletes a user by their ID.

### Coffee Shops

- **Create a Coffee Shop**
  - **Endpoint**: `/api/coffee-shops`
  - **Method**: POST
  - **Description**: Adds a new coffee shop to the database.
  - **Body Parameters**:
    - `name` (required): The name of the coffee shop.
    - `address` (required): The address of the coffee shop.
    - `latitude` (required): The latitude of the coffee shop's location.
    - `longitude` (required): The longitude of the coffee shop's location.
    - `rating` (optional): The rating of the coffee shop.

- **Get All Coffee Shops**
  - **Endpoint**: `/api/coffee-shops`
  - **Method**: GET
  - **Description**: Retrieves all coffee shops.

- **Get Coffee Shop by ID**
  - **Endpoint**: `/api/coffee-shops/:id`
  - **Method**: GET
  - **Description**: Retrieves a coffee shop by its ID.

- **Update Coffee Shop**
  - **Endpoint**: `/api/coffee-shops/:id`
  - **Method**: PUT
  - **Description**: Updates a coffee shop's information.
  - **Body Parameters**:
    - `name` (required): The updated name of the coffee shop.

- **Delete Coffee Shop**
  - **Endpoint**: `/api/coffee-shops/:id`
  - **Method**: DELETE
  - **Description**: Deletes a coffee shop by its ID.

### Products

- **Create a Product**
  - **Endpoint**: `/api/products`
  - **Method**: POST
  - **Description**: Adds a new product to the database.
  - **Body Parameters**:
    - `name` (required): The name of the product.
    - `price` (required): The price of the product.
    - `category` (required): The category of the product.
    - `coffeeShopId` (required): The ID of the coffee shop associated with the product.

- **Get All Products**
  - **Endpoint**: `/api/products`
  - **Method**: GET
  - **Description**: Retrieves all products.

- **Get Product by ID**
  - **Endpoint**: `/api/products/:id`
  - **Method**: GET
  - **Description**: Retrieves a product by its ID.

- **Update Product**
  - **Endpoint**: `/api/products/:id`
  - **Method**: PUT
  - **Description**: Updates a product's information.
  - **Body Parameters**:
    - `name` (required): The updated name of the product.
    - `price` (required): The updated price of the product.

- **Delete Product**
  - **Endpoint**: `/api/products/:id`
  - **Method**: DELETE
  - **Description**: Deletes a product by its ID.

### Ratings

- **Create a Rating**
  - **Endpoint**: `/api/ratings`
  - **Method**: POST
  - **Description**: Adds a new rating to the database.
  - **Body Parameters**:
    - `rating` (required): The rating value.
    - `comment` (optional): A comment associated with the rating.
    - `userId` (required): The ID of the user submitting the rating.
    - `coffeeShopId` (required): The ID of the coffee shop being rated.

- **Get All Ratings**
  - **Endpoint**: `/api/ratings`
  - **Method**: GET
  - **Description**: Retrieves all ratings.

- **Get Rating by ID**
  - **Endpoint**: `/api/ratings/:id`
  - **Method**: GET
  - **Description**: Retrieves a rating by its ID.

- **Update Rating**
  - **Endpoint**: `/api/ratings/:id`
  - **Method**: PUT
  - **Description**: Updates a rating's information.
  - **Body Parameters**:
    - `rating` (required): The updated rating value.
    - `comment` (optional): The updated comment associated with the rating.

- **Delete Rating**
  - **Endpoint**: `/api/ratings/:id`
  - **Method**: DELETE
  - **Description**: Deletes a rating by its ID.

### Locations

- **Create a Location**
  - **Endpoint**: `/api/locations`
  - **Method**: POST
  - **Description**: Adds a new location to the database.
  - **Body Parameters**:
    - `lat` (required): The latitude of the location.
    - `lng` (required): The longitude of the location.
    - `coffeeShopId` (optional): The ID of the coffee shop associated with the location.

- **Get All Locations**
  - **Endpoint**: `/api/locations`
  - **Method**: GET
  - **Description**: Retrieves all locations.

- **Get Location by ID**
  - **Endpoint**: `/api/locations/:id`
  - **Method**: GET
  - **Description**: Retrieves a location by its ID.

- **Update Location**
  - **Endpoint**: `/api/locations/:id`
  - **Method**: PUT
  - **Description**: Updates a location's information.
  - **Body Parameters**:
    - `lat` (required): The updated latitude of the location.
    - `lng` (required): The updated longitude of the location.

- **Delete Location**
  - **Endpoint**: `/api/locations/:id`
  - **Method**: DELETE
  - **Description**: Deletes a location by its ID.

## Getting Started

### Prerequisites

- Docker installed on your machine
- MongoDB Atlas account and cluster
- Google OAuth credentials
- GeoKeo API key

### Setup Instructions

1. **Clone the repository**

   ```sh
   git clone https://github.com/Anirudhxx/coffeeshop.git
   ```

2. **Set up environment variables**

   Create a separate `.env` file in the frontend and backend folders of your project and add the following environment variables:

   **Frontend** `.env`:
   ```env
   PORT=your-port-number
   GOOGLE_CLIENT_ID=your-google-client-id
   REACT_APP_API_URL=your-server-url
   GEOKEO_API_KEY=your-geokeo-api-key
   ```
   
   **Backend** `.env`:
   ```env
   PORT=your-port-number
   MONGO_URI=your-mongodb-atlas-uri
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   GEOKEO_API_KEY=your-geokeo-api-key
   ```

3. **Install dependencies**
   
   Navigate to the frontend and backend directories and install dependencies:
   
   For frontend:
   ```sh
   cd frontend
   npm install
   ```
   
   For backend:
   ```sh
   cd backend
   npm install
   ```

4. **Run the application locally**

   For frontend:
   ```sh
   npm start
   ```
   
   For backend:
   ```sh
   npx prisma generate
   npm start
   ```


## Usage

Once the application is deployed, users can:
- Sign in using Google OAuth.
- Use the search bar to enter their location and find nearby coffee shops.
- Add products to their cart and manage them.
- Enjoy a beautifully designed, responsive UI.
