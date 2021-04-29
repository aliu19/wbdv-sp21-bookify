import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Search from "./components/search/search";
import Details from "./components/search/details";

function App() {
  return (
      <BrowserRouter>
        <Route path="/" exact={true}>
          <Search/>
          <Details/>
        </Route>
      </BrowserRouter>
  );
}

export default App;
