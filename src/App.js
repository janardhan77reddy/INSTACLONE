import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
import LandingPage from './landing_page';
import PostView from './post_view';






export default function Gap() {
  return (
    <div className="wrapper">
      <h1>Landing Page</h1>
      <h1>Post View</h1>
      <BrowserRouter>
        <nav>
          <ul>
            <li><a href="/landing_page">LandingPage</a></li>
            <li><a href="/post_view">PostView</a></li>
            <li><Link to="/post_view/beluga">Beluga PostView</Link></li>
            <li><Link to="/post_view/blue">Blue PostView</Link></li>
          </ul>
        </nav>
        <Route path="/landing_page">
          <LandingPage />
        </Route>
        <Route path="/post_view">
          <PostView />
        </Route>
      </BrowserRouter>

    </div>
  );
}






 

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
