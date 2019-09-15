import React, { Suspense, lazy } from "react";
import "./App.css";
import Slide from "../src/components/Slide";
import ButtonSearch from "../src/components/ButtonSearch";
import FrontPage from "../src/containers/FrontPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Spinner from "../src/components/Spinner";
import MovieListFilm from "./containers/MovieListFilm";
import Footer from "./components/Footer";
const App = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={FrontPage} />
          <Route path="/phim/" component={MovieListFilm} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
