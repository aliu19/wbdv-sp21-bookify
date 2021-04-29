import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Search from "./components/search/search";
import Details from "./components/search/details";
import Home from "./components/home";

function App() {
  return (
      <BrowserRouter>
        <Route path={["/"]} exact={true}>
          <Home/>
        </Route>
        <Route path={["/search", "/search/:title"]} exact={true}>
          <Search/>
        </Route>
        <Route path={["/details/:bookId"]} exact={true}>
          <Details/>
        </Route>
      </BrowserRouter>
  );
}

export default App;
