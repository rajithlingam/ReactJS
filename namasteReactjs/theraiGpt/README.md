# Netflix GPT 🎥🎬

Netflix GPT is an interactive movie platform powered by TMDB and OpenAI GPT APIs, designed to deliver personalized movie suggestions and an exceptional user experience. This app includes features like authentication, movie browsing, GPT-powered search, and multilingual support, all while being responsive and visually appealing with Tailwind CSS.

---

## Features

### Login/Sign Up:
- User authentication with **Sign In/Sign Up forms**.
- Redirect users to the **Browse Page** after successful login.

### Browse Page (Authenticated Users):
- **Header**: Navigation bar for seamless browsing.
- **Main Movie**:
  - Embedded trailer video with autoplay and mute functionality.
  - Movie title and description displayed beautifully.
  - **Movie Suggestions**:
    - Dynamic **Movie Lists** with multiple categories.

### Netflix GPT (GPT Search Page):
- **Search Bar**: Search for movies using GPT-powered suggestions.
- **Movie Suggestions**: Displays movies based on GPT API calls and TMDB data.

---

## Project Setup

### Prerequisites:
1. Add a `.env` file in the root of the project.
2. Include the following API keys:
   - **TMDB_KEY**: Your TMDB API key.
   - **OPENAI_KEY**: Your OpenAI API key.

### Installation:
1. Clone this repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd netflix-gpt
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Run Development Server:
Start the development server:
```bash
npm start
```

### Deploy:
Deploy your app to production using:
```bash
npm run build
```

---

## Tech Stack
- **React**: For building the user interface.
- **TailwindCSS**: For responsive and visually appealing styling.
- **Firebase**: For authentication and database management.
- **TMDB API**: For fetching movie data.
- **OpenAI GPT API**: For personalized movie suggestions.
- **Redux**: For state management.

---

## Key Features & Enhancements

### Authentication:
- Implemented **Login** and **Sign-Up** forms with **form validation**.
- Handled user session management using Firebase.
- Added features:
  - **Sign Out**.
  - Update profile details like **display name** and **profile picture**.
  - Bugfix: Redirect unauthenticated users to the login page.

### Movie Browsing:
- Fetched data from the **TMDB API** for:
  - Now playing movies.
  - Movie trailers.
- Built:
  - **Movie Lists**.
  - **Movie Cards** with image optimization using TMDB Image CDN.

### Netflix GPT Search:
- Integrated **OpenAI GPT API** for intelligent movie search.
- Created a **GPT Search Bar**.
- Displayed GPT-powered **movie suggestions** using reusable components.

### Design & Optimization:
- Used **TailwindCSS** for creating an awesome user interface.
- Made the app fully **responsive**.
- Added **custom hooks** for fetching and managing data:
  - **usePopularMovies**.
  - **useNowPlayingMovies**.
- Enhanced performance with **memoization**.

### Environment Management:
- Added a `.env` file for storing sensitive API keys.
- Ensured security by adding `.env` to `.gitignore`.

### Additional Features:
- **Multi-language Support** for better user accessibility.
- Embedded YouTube trailers in the background with autoplay and mute options.

---

## App Structure

### Features:
1. **Header**:
   - Navigation for browsing and GPT search.
2. **Main Container**:
   - Displays a featured movie with its trailer in the background.
   - Movie suggestions categorized into dynamic lists.
3. **Netflix GPT**:
   - Search bar for intelligent movie suggestions.
   - Resuable **Movie List Component** for displaying suggestions.

---

# ThankYou!

---
