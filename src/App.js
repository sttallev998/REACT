import React from "react";
import { Router } from "react-router-dom";

import history from "./services/history";
import Routes from "./routes";

import GlobalStyles from "./styles/global";

export default function App() {
  return (
    <Router history={history}>
      <Routes />
      <GlobalStyles />
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