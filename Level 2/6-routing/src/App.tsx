import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from "./pages/Layout.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import NotFound from './NotFound.js';
import Post from './pages/post.js';

/*
  <BrowserRouter> is the router component that uses the HTML5 History API (pushState, replaceState, popstate events) to keep your UI in sync with the URL.
  Think of it as the “engine” of your routing system—it tracks the URL changes in the browser.

  <Routes> is a container for all your route definitions.
  It replaces the old <Switch> in React Router v5.

  <Route> defines a mapping between a URL path and the component you want to render.
  path: the URL to match. Can be static (/about) or dynamic (/posts/:id).
  element: the React component you want to render for that path. Must be passed as JSX.
*/

function App() {

  return (
      <BrowserRouter> {/* BrowserRouter wraps the whole app */}
        
        <Routes> {/* Routes define all available routes in the app */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} /> {/* Static route for home page */}
            <Route path="about" element={<About />} />
            <Route path="post/:id" element={<Post />} /> {/* Dynamic route for post details */}

            <Route path="*" element={<NotFound />} /> {/* Dynamic route for notfound pages (404 pages) */}
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
