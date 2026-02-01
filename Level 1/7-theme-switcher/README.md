# 7 Global Theme with Context

A simple app built to **understand global state** using the Context API, without any external state libraries.

## Goal

Learn how to share state globally in React using:

* `createContext`
* `Context.Provider`
* Custom hooks (`useTheme`)
* Avoiding prop drilling for shared state

This project introduces **when and why Context exists**, not just how to use it.

## What You’ll Learn

* What Context is
* What is global state
* How a Provider exposes shared data
* How multiple components consume the same global state
* When Context is a good solution

## How It Works (Data Flow)

1. `ThemeProvider` holds the global `theme` state.
2. The Provider shares `{ theme, toggleTheme }` with all children.
3. Any component can access or update the theme using `useTheme()`.
4. Updating the theme re-renders all subscribed components automatically.

## How to Run

1. Clone the repo:

```bash
git clone git@github.com:Hamzeh-Dev/React-By-Building.git
```

2. Navigate to the project:

```bash
cd level-1/7-theme-switcher
```

3. Install dependencies:

```bash
npm install
```

4. Start the app:

```bash
npm run dev
```

Open in browser at http://localhost:5173

---

**Note:**
This project intentionally avoids Redux, Zustand, or any external library to focus purely on **React’s built-in global state mechanism**.