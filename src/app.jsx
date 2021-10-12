import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styles from "./app.module.css";
import DefaultLayout from "./components/defaultLayout/defaultLayout";
import Home from "./components/home/home";
import Research from "./components/research/research";
import People from "./components/people/people";
import Publications from "./components/publications/publications";
import Activities from "./components/activities/activities";

function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Switch>
          <Route exact path={["/", "/biotechnology"]}>
            <Home />
          </Route>
          <Route path="/research">
            <Research />
          </Route>
          <Route path="/people">
            <People />
          </Route>
          <Route exact path="/publications">
            <Publications />
          </Route>
          <Route exact path="/activities">
            <Activities />
          </Route>
        </Switch>
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;
