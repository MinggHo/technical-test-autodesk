import React from 'react';
import LandingPage from "./components/LandingPage";
import DummyPage from './components/DummyPage/DummyPage'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route path="/developer/en/api/dummy1/intro" component={DummyPage}></Route>
          <Route path="/developer/en/api/dummy1/guide" component={DummyPage}></Route>
          <Route path="/developer/en/api/dummy1/reference" component={DummyPage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
