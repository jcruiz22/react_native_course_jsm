# MovieBrowser - React Native Movie App

A sleek, feature-rich movie browsing application built with React Native and Expo. Browse the latest movies, search for your favorites, and discover detailed information about any film.

## 📱 Features

- **Latest Movies Feed:** Browse current popular movies
- **Movie Details:** View comprehensive information about any movie
- **Genre Filtering:** Browse movies by specific genres
- **Search Functionality:** Quickly find movies by title or keywords
- **Responsive UI:** Beautiful interface that works on various device sizes
- **Dynamic Data:** Real-time movie information from TMDB API

## 🛠️ Tech Stack

- **React Native:** Core UI framework
- **Expo:** Development platform and tools
- **TypeScript:** Type-safe code
- **Expo Router:** Navigation and routing
- **NativeWind/TailwindCSS:** Styling
- **Custom Hooks:** Reusable logic with useFetch
- **TMDB API:** Movie data source

## 📦 Project Structure
react_native_course_jsm/
├── app/                # Application screens
│   ├── (tabs)/         # Tab navigation screens
│   │   ├── index.tsx   # Home screen
│   │   └── search.tsx  # Search screen
│   └── movies/[id].tsx # Movie details screen
├── components/         # Reusable UI components
│   ├── MovieCard.tsx   # Movie card component
│   ├── SearchBar.tsx   # Search input component
│   └── ...
├── services/           # API and utility services
│   ├── api.ts          # TMDB API integration
│   └── useFetch.ts     # Custom data fetching hook
├── constants/          # App constants
│   ├── icons.ts        # Icon assets
│   └── images.ts       # Image assets
└── interfaces/         # TypeScript interfaces
    └── interfaces.d.ts # Type definitions

### 🚀 Key Components

#### MovieCard
Displays movie information in a card format with:

- Movie poster
- Title and release year
- Rating
- Genre tags
- Age rating badge for adult content

#### useFetch Hook
A powerful custom hook for data fetching that provides:

- Loading states
- Error handling
- Data transformation
- Auto-fetching on component mount
- Manual refetch capability
- State reset

## 🔧 API Integration

The app integrates with The Movie Database (TMDB) API to fetch:
- Latest movies
- Movie details
- Genre information
- Search results

## 📝 Getting Started

### Prerequisites
- Node.js (14.0 or later)
- Expo CLI
- TMDB API key

### Installation
1. Clone the repository
```bash
git clone https://github.com/yourusername/react_native_course_jsm.git
cd react_native_course_jsm
```
2. Install dependencies
```bash
npm install
```
3. Create a `.env` file with your TMDB API key
```bash
TMDB_API_KEY=your_api_key_here
```
4. Start the development server
```bash
npx expo start
```

## 📱 Usage

- **Browse Movies:** Scroll through the home screen to see latest movies
- **Search:** Tap the search icon to find specific movies
- **View Details:** Tap on any movie card to see detailed information
- **Filter by Genre:** Use the genre tags to filter movies

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- # 🎬 MovieBrowser - React Native Movie App

A sleek, feature-rich movie browsing application built with React Native and Expo. Browse the latest movies, search for your favorites, and discover detailed information about any film.

## 📱 Features

- **Latest Movies Feed**: Browse current popular movies
- **Movie Details**: View comprehensive information about any movie
- **Genre Filtering**: Browse movies by specific genres
- **Search Functionality**: Quickly find movies by title or keywords
- **Responsive UI**: Beautiful interface that works on various device sizes
- **Dynamic Data**: Real-time movie information from TMDB API

## 🛠️ Tech Stack

- **React Native**: Core UI framework
- **Expo**: Development platform and tools
- **TypeScript**: Type-safe code
- **Expo Router**: Navigation and routing
- **NativeWind/TailwindCSS**: Styling
- **Custom Hooks**: Reusable logic with `useFetch`
- **TMDB API**: Movie data source

## 📦 Project Structure

The project follows a clean, organized structure for better maintainability:

```
react_native_course_jsm/
├── app/                # Application screens
│   ├── (tabs)/         # Tab navigation screens
│   │   ├── index.tsx   # Home screen
│   │   └── search.tsx  # Search screen
│   └── movies/[id].tsx # Movie details screen
├── components/         # Reusable UI components
│   ├── MovieCard.tsx   # Movie card component
│   ├── SearchBar.tsx   # Search input component
│   └── ...
├── services/           # API and utility services
│   ├── api.ts          # TMDB API integration
│   └── useFetch.ts     # Custom data fetching hook
├── constants/          # App constants
│   ├── icons.ts        # Icon assets
│   └── images.ts       # Image assets
└── interfaces/         # TypeScript interfaces
   └── interfaces.d.ts # Type definitions
```

This organization separates concerns, making the codebase easier to navigate and maintain. Expo Router powers the file-based navigation system, with screens in the `app` directory and reusable components kept separate.

## 🚀 Key Components

### MovieCard

Displays movie information in a card format with:
- Movie poster
- Title and release year
- Rating
- Genre tags
- Age rating badge for adult content

### useFetch Hook

A powerful custom hook for data fetching that provides:
- Loading states
- Error handling
- Data transformation
- Auto-fetching on component mount
- Manual refetch capability
- State reset

## 🔧 API Integration

The app integrates with The Movie Database (TMDB) API to fetch:
- Latest movies
- Movie details
- Genre information
- Search results

## 📝 Getting Started

### Prerequisites

- Node.js (14.0 or later)
- Expo CLI
- TMDB API key

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/react_native_course_jsm.git
cd react_native_course_jsm
```

2. Install dependencies
```bash
npm install
```

3. Create a .env file with your TMDB API key
```
TMDB_API_KEY=your_api_key_here
```

4. Start the development server
```bash
npx expo start
```

## 📱 Usage

- **Browse Movies**: Scroll through the home screen to see latest movies
- **Search**: Tap the search icon to find specific movies
- **View Details**: Tap on any movie card to see detailed information
- **Filter by Genre**: Use the genre tags to filter movies

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing the API
- Expo team for the excellent development tools
- React Native community for support and packages

Made with ❤️ by JC RUIZ inspired by JSMastery