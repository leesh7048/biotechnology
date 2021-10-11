import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styles from "./app.module.css";
import DefaultLayout from "./components/defaultLayout/defaultLayout";
import Home from "./components/home/home";
function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;
