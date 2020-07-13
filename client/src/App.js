import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Books from "./pages/Books";
import Nav from "./components/Nav.js";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <div className="container">
          <Header />
          <SearchForm/>
          <Route exact path="/" component={Books} />
        </div>
      </div>
    </Router>
  );
}

export default App;
