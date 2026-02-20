# React Router Project

A small-to-mid-level React project designed to learn routing in React using react-router-dom.

In this project, you will create a multi-page SPA with multiple routes, nested routes, and navigation, while keeping components reusable and clean.

## How to Run

1. Clone the repo:

```bash
git clone git@github.com:Hamzeh-Dev/React-By-Building.git
```

2. Navigate to the project:

```bash
cd '.\Level 2\6-routing'
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

## Project Overview

This project teaches you how to handle routing in React using react-router-dom, which allows your app to have multiple pages without reloading the browser. You will build a multi-page app with:

- A Home page

- An About page

- Multiple Posts pages

- Navigation links


## Concepts Learned

1- BrowserRouter

- Wraps your app and listens for URL changes.

- Uses the HTML5 History API (pushState, replaceState, popstate) to sync URL and UI.

- Provides the routing context for Routes and Route.

2- Routes

- A container for all route definitions.

- Replaces the old <Switch> in React Router v5.

- Checks the current URL and renders the first <Route> that matches.

- Supports nested routes for sub-pages.

3- Route

- Defines a URL path and the React component to render.

- Props:

  - path: the URL to match (/about or /posts/:id)

  - element: the component to render as JSX

- Supports dynamic routes with URL parameters (:id)

- Supports nested routes for building layouts

4- Navigation & Links

- Use <Link> or <NavLink> to navigate between routes without reloading the page.

- Use useNavigate() hook for programmatic navigation.

5- SPA behavior

- React Router lets your app behave like a single-page application (SPA).

- No full-page reload is required when changing routes.