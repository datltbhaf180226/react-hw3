import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { Home } from "./Page/Home";
import { Login } from "./Page/Login";
import { Product } from "./Page/Product";
import { Register } from "./Page/Register";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="nav-container">
          <div className="nav-bar">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/product">Product</Link>
          </div>
        </div>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/product">
            <Product />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
