import React from "react";
import ExperienceList from "./components/ExperienceList";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddExperience from "./components/AddExperience";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/add">
            <AddExperience />
          </Route>
          <Route path="/">
            <ExperienceList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
