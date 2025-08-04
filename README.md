
# GitHub Users List - React + TypeScript + Vite

This project is a simple React application that demonstrates how to consume a public API (GitHub Users API) using React, TypeScript, Vite, and Axios. It displays a list of GitHub users with their avatars and profile links. The project also features a skeleton loading effect while fetching data.

## Features

- Fetches and displays a list of users from the [GitHub Users API](https://api.github.com/users)
- Uses React hooks (`useEffect`, `useState`) for state management and side effects
- Uses [Axios](https://axios-http.com/) for HTTP requests
- TypeScript for type safety
- Skeleton loader for better user experience during data fetching
- Vite for fast development and HMR (Hot Module Replacement)

## How it works

1. When the app loads, it fetches a list of users from the GitHub API.
2. While loading, skeleton placeholders are shown.
3. When the data arrives, the real user list is displayed.
4. If there is an error, an error message is shown.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open your browser at the address shown in the terminal (usually http://localhost:5173).

## Technologies Used

- React
- TypeScript
- Vite
- Axios
