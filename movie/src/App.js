import "bootstrap/dist/css/bootstrap.min.css";
import React, { Fragment } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.component";
import MovieList from "./components/movie-list.component";
import EditMovie from "./components/edit-movie.component";
import CreateMovie from "./components/create-movie.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <br />
        <Routes>
          <Route path="/" exact component={MovieList} />
          <Route path="/edit/:id" component={EditMovie} />
          <Route path="/create" component={CreateMovie} />
          <Route path="/user" component={CreateUser} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
