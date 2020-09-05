import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

// COMPONENTS

import  Characters  from "./pages/Characters";
import  Character  from "./pages/Character";
import  Planets  from "./pages/Planets";
import  Planet  from "./pages/Planet";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Characters} />
      <Route path="/character/:id" component={Character} />
      <Route path="/planets/:id" component={Planet} />
      <Route path="/planets" exact component={Planets} />

    </BrowserRouter>
  );
}
