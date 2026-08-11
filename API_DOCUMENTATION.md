# QurbaniHat Backend API Documentation

Production-ready REST API for QurbaniHat built with Express.js, TypeScript, Prisma ORM, and PostgreSQL.

---

## Base URL
- **Local:** `http://localhost:5000`
- **Live Deployment:** `<Your-Live-Backend-URL>`

---

## Global Response Structure

All API responses follow a consistent JSON format:

### Success Response Example (200 / 201)
```json
{
  "success": true,
  "message": "Resource retrieved / created / updated successfully",
  "data": {}
}
```

### Error Response Example (400 / 404 / 500)
```json
{
  "success": false,
  "message": "Error description",
  "data": null
}
```

---

## 1. Authentication Endpoints (`/api/auth`)

Powered by Better-Auth (using bcrypt password hashing & session token management).

### • User Sign Up
- **Method:** `POST`
- **Endpoint:** `/api/auth/sign-up/email`
- **Description:** Registers a new user account.
- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "securepassword123",
    "name": "John Doe",
    "userName": "johndoe"
  }
  ```
- **Status Codes:** `200 OK`, `400 Bad Request`

### • User Sign In
- **Method:** `POST`
- **Endpoint:** `/api/auth/sign-in/email`
- **Description:** Authenticates user and returns session cookies/tokens.
- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "securepassword123"
  }
  ```
- **Status Codes:** `200 OK`, `400 Bad Request`, `401 Unauthorized`

### • User Sign Out
- **Method:** `POST`
- **Endpoint:** `/api/auth/sign-out`
- **Description:** Revokes current session token.
- **Status Codes:** `200 OK`

---

## 2. User Module (`/users`)

### • Get All Users
- **Method:** `GET`
- **Endpoint:** `/users`
- **Description:** Retrieves all non-deleted users.
- **Response (200 OK):**
  ```json
  {
    "success": true,
    "message": "Users retrieved successfully",
    "data": [
      {
        "id": "uuid",
        "name": "John Doe",
        "userName": "johndoe",
        "email": "user@example.com",
        "role": "User"
      }
    ]
  }
  ```

### • Get User by ID
- **Method:** `GET`
- **Endpoint:** `/users/:id`
- **Description:** Retrieves single user by UUID.
- **Status Codes:** `200 OK`, `404 Not Found`

### • Update User
- **Method:** `PATCH`
- **Endpoint:** `/users/:id`
- **Description:** Updates user profile details.
- **Request Body:**
  ```json
  {
    "name": "John Updated",
    "avatar": "https://example.com/avatar.jpg"
  }
  ```
- **Status Codes:** `200 OK`, `400 Bad Request`

### • Soft Delete User
- **Method:** `DELETE`
- **Endpoint:** `/users/:id`
- **Description:** Soft deletes user setting `isDeleted: true`.
- **Status Codes:** `200 OK`, `400 Bad Request`

---

## 3. Product Module (`/products`)

### • Create Product
- **Method:** `POST`
- **Endpoint:** `/products`
- **Description:** Adds a new product to database.
- **Request Body:**
  ```json
  {
    "title": "Red Chittagong Bull",
    "type": "Bull",
    "breed": "Deshi",
    "price": 120000,
    "weight": 350,
    "age": 3,
    "description": "Healthy premium Qurbani bull",
    "image": "https://example.com/bull.jpg",
    "category": "Cattle"
  }
  ```
- **Status Codes:** `200 OK`, `400 Bad Request`

### • Get All Products
- **Method:** `GET`
- **Endpoint:** `/products`
- **Description:** Retrieves all available non-deleted products.
- **Status Codes:** `200 OK`

### • Get Product by ID
- **Method:** `GET`
- **Endpoint:** `/products/:id`
- **Description:** Retrieves product by ID.
- **Status Codes:** `200 OK`, `404 Not Found`

### • Update Product
- **Method:** `PATCH`
- **Endpoint:** `/products/:id`
- **Description:** Updates product info.
- **Request Body:** Partial product fields.
- **Status Codes:** `200 OK`, `400 Bad Request`

### • Soft Delete Product
- **Method:** `DELETE`
- **Endpoint:** `/products/:id`
- **Description:** Soft deletes product setting `isDeleted: true`.
- **Status Codes:** `200 OK`, `400 Bad Request`

---

## 4. Order Module (`/order`)

### • Create Order
- **Method:** `POST`
- **Endpoint:** `/order`
- **Description:** Places a new order.
- **Request Body:**
  ```json
  {
    "userid": "user-uuid",
    "productid": "product-uuid",
    "username": "John Doe",
    "userphone": 1700000000,
    "ordertitel": "Red Chittagong Bull",
    "orderbreed": "Deshi",
    "orderprice": 120000,
    "orderweight": 350
  }
  ```
- **Status Codes:** `200 OK`, `400 Bad Request`

### • Get All Orders
- **Method:** `GET`
- **Endpoint:** `/order`
- **Description:** Retrieves all non-deleted orders.
- **Status Codes:** `200 OK`

### • Get Order by ID
- **Method:** `GET`
- **Endpoint:** `/order/:id`
- **Description:** Retrieves order details by ID.
- **Status Codes:** `200 OK`, `404 Not Found`

### • Update Order
- **Method:** `PATCH`
- **Endpoint:** `/order/:id`
- **Description:** Updates order status or details.
- **Request Body:**
  ```json
  {
    "status": "COMPLETED"
  }
  ```
- **Status Codes:** `200 OK`, `400 Bad Request`

### • Soft Delete Order
- **Method:** `DELETE`
- **Endpoint:** `/order/:id`
- **Description:** Soft deletes order setting `isDeleted: true`.
- **Status Codes:** `200 OK`, `400 Bad Request`

---

## 5. Category Module (`/categories`)

### • Create Category
- **Method:** `POST`
- **Endpoint:** `/categories`
- **Request Body:** `{ "name": "Cattle", "description": "Bulls & Cows" }`
- **Status Codes:** `200 OK`, `400 Bad Request`

### • Get All Categories
- **Method:** `GET`
- **Endpoint:** `/categories`

### • Get Category by ID
- **Method:** `GET`
- **Endpoint:** `/categories/:id`

### • Update Category
- **Method:** `PATCH`
- **Endpoint:** `/categories/:id`

### • Soft Delete Category
- **Method:** `DELETE`
- **Endpoint:** `/categories/:id`

---

## 6. Review Module (`/reviews`)

### • Create Review
- **Method:** `POST`
- **Endpoint:** `/reviews`
- **Request Body:** `{ "rating": 5, "comment": "Excellent service!", "productId": "id", "userId": "id" }`
- **Status Codes:** `200 OK`, `400 Bad Request`

### • Get All Reviews
- **Method:** `GET`
- **Endpoint:** `/reviews`

### • Get Review by ID
- **Method:** `GET`
- **Endpoint:** `/reviews/:id`

### • Update Review
- **Method:** `PATCH`
- **Endpoint:** `/reviews/:id`

### • Soft Delete Review
- **Method:** `DELETE`
- **Endpoint:** `/reviews/:id`

---

## Submission Links
- **GitHub Repository Link:** `<Your-GitHub-Repository-URL>`
- **Live Backend API URL:** `<Your-Live-Backend-Deployment-URL>`
