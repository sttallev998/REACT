import React from "react";
<<<<<<< HEAD
import { Router } from "react-router-dom";

import history from "./services/history";
import Routes from "./routes";

import GlobalStyles from "./styles/global";
=======
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
>>>>>>> 9bfbb319e3c5eaa62f4ae02326659fa161f81700

export default function App() {
  return (
<<<<<<< HEAD
    <Router history={history}>
      <Routes />
      <GlobalStyles />
=======
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
>>>>>>> 9bfbb319e3c5eaa62f4ae02326659fa161f81700
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}