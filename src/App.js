import React from "react";
import "./App.scss";
import HomePage from "./Components/HomePage/HomePage";
import { Switch, Route, HashRouter } from "react-router-dom";
import Story from "./Components/Story/Story";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/story" component={Story} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
