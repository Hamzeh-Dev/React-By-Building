# GitHub User Finder

A slightly more advanced Level 2 project, where we fetch GitHub user data and their repositories dynamically. This project introduces client-side API fetching, debounced search, and responsive UI.

> Note: In this project, we start leveling up a bit. If you want explanations about debouncing, head back to Level 2/2-debouncing.

### What You Will Learn

- Handling client-side API requests

- Debouncing inputs for performance optimization

- Conditional rendering based on state

- Handling async operations with useEffect

- Building clean, reusable UI layouts

## How to Run

1. Clone the repo:

```bash
git clone git@github.com:Hamzeh-Dev/React-By-Building.git
```

2. Navigate to the project:

```bash
cd '.\Level 2\5-github-user-finder'
```

3. Install dependencies:

```bash
npm install
```

4. Start the app:

```bash
npm run dev
```

Open in browser at http://localhost:3000

### How It Works

- Debouncing: The search input is wrapped with a debounced hook (useDebounce) to delay API calls until the user stops typing for 500ms.

- Fetching Data: Two API calls are made:

    1- https://api.github.com/users/{username} – fetch user info

    2- https://api.github.com/users/{username}/repos – fetch user repositories

- UI Updates: Based on the loading, error, user, and repos states, the UI updates automatically to show feedback, profile, or repositories.