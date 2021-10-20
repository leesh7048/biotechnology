import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styles from "./app.module.css";
import DefaultLayout from "./components/defaultLayout/defaultLayout";
import Home from "./components/home/home";
import Research from "./components/research/research";
import People from "./components/people/people";
import Publications from "./components/publications/publications";
import Activities from "./components/activities/activities";
import Information from "./components/information/information";

function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Switch>
          <Route path="/research">
            <Research />
          </Route>
          <Route path="/people">
            <People />
          </Route>
          <Route path="/publications">
            <Publications />
          </Route>
          <Route path="/activities">
            <Activities />
          </Route>
          <Route path="/information">
            <Information />
          </Route>
          <Route exact path={["/", "/biotechnology"]}>
            <Home />
          </Route>
        </Switch>
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;
