import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Main from "./Main";
import AddMovie from "./AddMovie";

import Header from "./Header";
import history from "../history";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/AddMovie" exact component={AddMovie} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
