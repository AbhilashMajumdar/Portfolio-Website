import './App.css';
import React from 'react';
import Educational_details from './Educational_details';
import Projects from './Projects';
import Navber from './Navber';
import Technical_skills from './Technical_skills';
import Certificates from './Certificates';
import Achievements from './Achievements';
import Personal_informations from './Personal_informations';
import About_me from './About_me';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="container">
      <Router>
          <Navber/>
          <Switch>
              <Route path="/Educational_details">
                  <Educational_details />
                </Route>
                <Route path="/Projects">
                    <Projects />
                </Route>
                <Route path="/Technical_skills">
                    <Technical_skills />
                </Route>
                <Route path="/Certificates">
                    <Certificates />
                </Route>
                <Route path="/Achievements">
                    <Achievements />
                </Route>
                <Route path="/Others">
                    <Personal_informations />
                </Route>
                <Route path="/">
                    <About_me />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
