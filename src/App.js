import React from "react";
import Blueprints from "./components/Blueprints";
import Home from "./components/Home";
import About from "./components/About";
import Create from "./components/Create";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Blog from "./components/Blog";

const App = () => {
  return (
    <Router>
      <nav>
        <ul className="nav-links">
          <span className="left">
            <li className="nav-link" style={{display: "inline-block"}}>
              <NavLink
                activeStyle={{
                  borderBottom: "2px solid white",
                  borderTop: "2px solid white",
                }}
                style={{ color: "white" }}
                to="/blueprints"
              >
                Blueprints
              </NavLink>
            </li>
  
  
            <li className="nav-link" style={{display: "inline-block"}}>
              <NavLink
                activeStyle={{
                  borderBottom: "2px solid white",
                  borderTop: "2px solid white",
                }}
                style={{ color: "white" }}
                to="/create"
              >
                Create
              </NavLink>
            </li>
          </span>

          <li className="nav-link">
            <NavLink
              style={{ color: "white" }}
              activeStyle={{
                borderBottom: "2px solid white",
                borderTop: "2px solid white",
              }}
              to="/"
              exact
            >
              Home
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              style={{ color: "white" }}
              activeStyle={{
                borderBottom: "2px solid white",
                borderTop: "2px solid white",
              }}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              style={{ color: "white" }}
              activeStyle={{
                borderBottom: "2px solid white",
                borderTop: "2px solid white",
              }}
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="content">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/blueprints">
            <Blueprints />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
