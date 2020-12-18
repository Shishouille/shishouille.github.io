import React from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Main from "./pages/Main/Main";
import Project from "./pages/Project/Project";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/projets/:project/:index">
          <Project />
        </Route>
        <Route path="/">
          <Main />
        </Route>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};
