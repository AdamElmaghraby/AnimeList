# Anime App

Anime App is a web application that allows users to browse popular anime, search for specific titles, and manage a list of their favorite anime. The app is built using modern web technologies like React, Vite, and TailwindCSS.

## Features

- **Browse Popular Anime**: View a list of trending anime fetched from the Jikan API.
- **Search Anime**: Search for anime titles using a search bar.
- **Favorites Management**: Add or remove anime from your favorites list, which is stored locally in the browser.
- **Responsive Design**: Fully responsive UI for desktop and mobile devices.
- **Dark Mode**: Built-in dark mode support.

## Technologies Used

- **React**: For building the user interface.
- **Vite**: For fast development and build processes.
- **TailwindCSS**: For styling the application.
- **shadcn**: For building accessible and reusable UI components.
- **Jikan API**: To fetch anime data.
- **React Router**: For client-side routing.
- **LocalStorage**: To persist user favorites.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AdamElmaghraby/AnimeList.git
   cd /frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the app in your browser at `http://localhost:5173`.

## Project Structure

```
frontend/
├── src/
│   ├── components/       # Reusable UI components (e.g., AnimeCard, Navbar)
│   ├── contexts/         # Context API for state management (e.g., AnimeContext)
│   ├── css/              # CSS files for styling (e.g., AnimeCard.css, Navbar.css)
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components (Home, Favorites)
│   ├── services/         # API service functions
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── public/               # Static assets
├── package.json          # Project dependencies and scripts
├── vite.config.js        # Vite configuration
└── tailwind.config.js    # TailwindCSS configuration
```

## API Integration

This app uses the [Jikan API](https://jikan.moe/) to fetch anime data. The following endpoints are utilized:

- **Get Popular Anime**: `/top/anime`
- **Search Anime**: `/anime?q={query}`

## Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the app for production.
- `npm run preview`: Preview the production build.
- `npm run lint`: Run ESLint to check for code issues.

## Future Enhancements

- Implement pagination for anime lists.
- Add more filters and sorting options for anime search.
- Integrate additional anime details like episodes, genres, and ratings.
- Improve accessibility features (e.g., keyboard navigation, ARIA roles).

## License

This project is licensed under the [MIT License](./LICENSE).
