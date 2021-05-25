import './App.css';
import AboutMe from "./components/AboutMe";
import Blog from "./components/Blog";
import Home from "./components/Home";
import Contact from "./components/Contact";
import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            {isLoggedIn && <Link to="/aboutme">About Me</Link>}
            <Link to="/blog">Blog</Link>
          </nav>
        </div>
        <Switch>
       <Route path="/">
          <Home />
       </Route>
       <Route path="/aboutme">
          <AboutMe />
       </Route>
       <Route path="/blog">
          <Blog />
       </Route>
       <Route path="/contact">
          <Contact />
       </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
