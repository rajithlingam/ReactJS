# Netflix-GPT – AI-Powered Movie Recommendation Platform

## Overview
Netflix-GPT is a **React-based AI-powered movie recommendation app** that integrates **OpenAI's GPT API** to provide **smart movie suggestions** based on user input. Built with **React 18, Redux Toolkit, Firebase, and TailwindCSS**, this app delivers a seamless browsing experience similar to Netflix.

## Features
- 🎬 **AI-Powered Movie Search** - Uses OpenAI API for recommendations.
- 🔄 **Dynamic Routing** - Built with React Router 6 for seamless navigation.
- 🛠 **Redux State Management** - Centralized control using Redux Toolkit.
- 🚀 **Firebase Authentication & Hosting** - Secure login and deployment.
- 🎨 **TailwindCSS** - Modern and responsive UI.

## Installation & Setup
### Prerequisites
Ensure you have **Node.js** and **npm** installed.

### Clone Repository
```sh
git clone https://github.com/rajithlingam/netflix-gpt.git
cd netflix-gpt
```

### Install Dependencies
```sh
npm install
```

### Set Up Firebase
1. Create a **Firebase project**.
2. Enable **Authentication**.
3. Copy the Firebase config into `.env`.

### Run Development Server
```sh
npm start
```
This starts a local server at `http://localhost:3000/`.

## Project Structure
```plaintext
netflix-gpt/
│── src/
│   ├── components/
│   │   ├── Header.js  # Navigation Bar
│   │   ├── Body.js  # Main Content & Routing
│   │   ├── Browse.js  # Movie Browsing Page
│   │   ├── GptSearch.js  # AI-Powered Search Box
│   │   ├── GptMovieSuggestions.js  # Displays GPT-generated movie lists
│   │   ├── MovieList.js  # Displays recommended movies
│   ├── utils/
│   │   ├── appStore.js  # Redux store configuration
│   │   ├── gptSlice.js  # Redux state for AI-generated results
│── public/
│── firebase.json  # Firebase hosting configuration
│── tailwind.config.js  # TailwindCSS setup
│── README.md  # Documentation
```

## Key Components
### 1️⃣ **`App.js` - Main Entry Point**
- Wraps the application with **Redux Provider**.
- Loads `Body.js` which contains the main structure.

### 2️⃣ **`Body.js` - Main Layout & Routing**
- Uses `createBrowserRouter` for **client-side navigation**.
- Routes:
  - `/` → Loads `Login.js`.
  - `/browse` → Loads `Browse.js`.

### 3️⃣ **`GptMovieSuggestions.js` - AI-Powered Recommendations**
- Fetches movie suggestions from **Redux state**.
- Dynamically renders movies using **MovieList.js**.
- Displays **AI-generated recommendations**.

### 4️⃣ **`GptSearch.js` - AI-Based Search**
- Uses OpenAI API to suggest movies.
- Stores search results in **Redux state**.

## Technologies Used
- **React 18** - Frontend framework
- **Redux Toolkit** - Global state management
- **React Router 6** - Navigation & Routing
- **OpenAI API** - AI-powered recommendations
- **Firebase** - Authentication & Hosting
- **TailwindCSS** - UI styling

## Deployment
To build the project for production, run:
```sh
npm run build
```
This generates an optimized `build/` folder for deployment.

## Contributing
Feel free to **fork** this repository and submit a **pull request** for improvements!
---
Enjoy Streaming! 🚀

