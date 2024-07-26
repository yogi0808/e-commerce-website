# E-Commerce App

This is a full-stack e-commerce application built using the MERN stack with additional technologies like JWT for authentication, bcryptjs for hashing passwords, and Firebase for storage.

## Features

- **Product Sorting**: Users can sort products by various criteria.
- **Admin Panel**: Admins can manage products, orders, and users.
- **Cart**: Users can add, remove, and manage products in their cart.
- **Profile**: Users can view and edit their profile information.
- **Contact Form**: Users can contact the site administrators.
- **Order Management**: Users can create and cancel orders.

## Technologies Used

- **Frontend**: React
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT
- **Password Hashing**: bcryptjs
- **Storage**: Firebase

## Setup and Installation

1. **Clone the repository**:

   ```sh
   git clone https://github.com/yourusername/e-commerce-app.git
   cd e-commerce-app
   ```

2. **Install dependencies for both frontend and backend**:

   ```sh
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. **Create a `.env` file in the backend directory with the following environment variables**:

   ```env
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   FIREBASE_API_KEY=your_firebase_api_key
   FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   FIREBASE_PROJECT_ID=your_firebase_project_id
   FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   FIREBASE_APP_ID=your_firebase_app_id
   ```

4. **Run the backend server**:

   ```sh
   npm start
   ```

5. **Run the frontend server**:

   ```sh
   cd frontend
   npm start
   ```

6. **Open your browser and navigate to** `http://localhost:3000`.

## Usage

1. **Register/Login**: Create a new account or login with existing credentials.
2. **Browse Products**: Browse and sort products.
3. **Manage Cart**: Add, remove, or update items in the cart.
4. **Checkout**: Create orders and proceed to checkout.
5. **Admin Panel**: Access the admin panel to manage products, orders, and users.
6. **Profile**: Update personal details in the profile section.
7. **Contact Form**: Reach out to the site administrators using the contact form.

## Screenshots

<!-- Add your screenshots here -->
