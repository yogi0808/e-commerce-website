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
   git clone https://github.com/yogi0808/e-commerce-website.git
   cd e-commerce-website
   ```

2. **Install dependencies for both frontend and backend**:

   ```sh
   npm install

   cd ../client
   npm install
   ```

3. **Create a `.env` file in the Root directory and client directory with the following environment variables**:

- Root directory `.env` file.

  ```env
  PORT=your_port
  DB_URI=your_mongodb_uri
  JWT_SECRETE=your_jwt_secret
  ```

- client directory `.env` file.

  ```env
  FIREBASE_API_KEY=your_firebase_api_key
  FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
  FIREBASE_PROJECT_ID=your_firebase_project_id
  FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
  FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
  FIREBASE_APP_ID=your_firebase_app_id
  ```

4. **Run the backend server**:

   ```sh
   npm run server
   ```

5. **Run the frontend server**:

   ```sh
   npm run client
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

- Home Page
  ![Home Page](https://github.com/user-attachments/assets/18a93472-90f1-458d-a09d-362b8da557ce)

- Shop Page
  ![Shop Page](https://github.com/user-attachments/assets/1062d3bc-b984-4a65-9ad0-d0ab0512ac33)

- Contact Page
  ![Contact Page](https://github.com/user-attachments/assets/f3ec8ccd-e222-45f5-9013-40a6144d4d6d)

- Profile Page
  ![Profile Page](https://github.com/user-attachments/assets/686e2bee-d8ae-4116-895a-b383c04a1fd5)

- User Orders Page
  ![User Orders Page](https://github.com/user-attachments/assets/590924d0-b160-4331-90da-0e65e4225b5c)

- Cart Page
  ![Cart Page](https://github.com/user-attachments/assets/cd8f099e-d03e-4623-99c7-9eecd2c33e26)

- Checkout Page
  ![Checkout Page](https://github.com/user-attachments/assets/ae43ffcc-65ec-4da1-bee2-e0067b762b00)

- Admin Orders Page
  ![Admin Orders Page](https://github.com/user-attachments/assets/4e0cae72-4b16-49c2-927a-82178fa2d8a9)

- Admin Products Page
  ![Admin Products Page](https://github.com/user-attachments/assets/ccf911fc-5a8e-4230-a977-9b3d62ca1ab6)

- Admin Categories Page
  ![Admin Categories Page](https://github.com/user-attachments/assets/bbecf781-d9be-4ed8-b23f-30f8287a304f)
