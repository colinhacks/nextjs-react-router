import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import NextLink from 'next/link';

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
          <li>
            <NextLink href="/settings">Settings (SSR)</NextLink>
          </li>
        </ul>

        <Routes>
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/topics" element={<h1>Topics</h1>} />
          <Route path="/" element={<h1>Home</h1>} />
        </Routes>
      </div>
    </Router>
  );
}
