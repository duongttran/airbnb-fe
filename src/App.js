import React from "react";
import ExperienceList from "./components/ExperienceList";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddExperience from "./components/AddExperience";
// import faker from "faker";

import "rheostat/initialize";
import "rheostat/css/rheostat.css";

function App() {
  // let array = new Array(100);
  // let experiences = [...array]
  //   .map((x) => {
  //     return {
  //       email: faker.internet.email(),
  //       title: faker.lorem.lines(),
  //       introduction: faker.lorem.paragraph(),
  //     };
  //   })
  //   .slice();
  // console.log(experiences);

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
