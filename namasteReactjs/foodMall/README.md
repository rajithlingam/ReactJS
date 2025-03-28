# FoodMall - React Web App

## Overview
FoodMall is a **React-based food ordering application** that allows users to browse restaurants, view menus, and manage their cart. The app is built with **React 19, Redux Toolkit, React Router, and Parcel** for an optimized experience.

## Features
- 🌟 **Restaurant Listings** - Browse and search for restaurants.
- 🛒 **Shopping Cart** - Add or remove items with Redux state management.
- 🔄 **Dynamic Routing** - Uses React Router for seamless navigation.
- 🚀 **Optimized Performance** - Implements lazy loading and Redux Toolkit.
- ✅ **Unit Testing** - Uses Jest and React Testing Library.

## Installation & Setup
### Prerequisites
Ensure you have **Node.js** and **npm** installed.

### Clone Repository
```sh
git clone https://github.com/rajithlingam/ReactJS.git
cd foodMall
```

### Install Dependencies
```sh
npm install
```

### Run Development Server
```sh
npm start
```
This starts a local server at `http://localhost:1234/` using **Parcel**.

## Project Structure
```plaintext
foodMall/
│── src/
│   ├── components/
│   │   ├── Header.js  # Navigation Bar
│   │   ├── Body.js  # Main Content & Restaurant Listings
│   │   ├── RestaurantCard.js  # Displays individual restaurant
│   │   ├── Cart.js  # Shopping Cart functionality
│   │   ├── Error.js  # Error handling
│   ├── utils/
│   │   ├── cartSlice.js  # Redux cart slice
│   │   ├── url.js  # API URLs and static assets
│── package.json  # Project configuration
│── babel.config.js  # Babel setup
│── .parcelrc  # Parcel bundler config
│── README.md  # Documentation
```

## Key Components
### 1️⃣ **`app.js` - Main Entry Point**
- Wraps the application with Redux Provider.
- Uses `createBrowserRouter` for routing.
- Lazy loads components for performance optimization.

### 2️⃣ **`Header.js` - Navigation Bar**
- Uses **React Router** for navigation.
- Displays user login status and online status.

### 3️⃣ **`Body.js` - Main Content**
- Fetches restaurant data from `API_URL_RESCARD`.
- Implements **search and filtering**.
- Uses a **Shimmer effect** while loading data.

### 4️⃣ **`RestaurantCard.js` - Restaurant Display**
- Dynamically loads restaurant details.
- Uses `cloudinaryImageId` for optimized image loading.

### 5️⃣ **`Cart.js` - Shopping Cart**
- Retrieves cart data from **Redux store**.
- Allows users to **clear the cart** with confirmation.

## Technologies Used
- **React 19** - Frontend framework
- **Redux Toolkit** - State management
- **React Router 7** - Navigation & Routing
- **Parcel** - Bundler for fast builds
- **Jest & React Testing Library** - Unit testing

## Deployment
To build the project for production, run:
```sh
npm run build
```
This generates an optimized `dist/` folder for deployment.

## Contributing
Feel free to **fork** this repository and submit a **pull request** for improvements!

---
Happy Coding! 🚀

