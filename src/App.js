import React from "react";
import {useHistory} from "react-router-dom";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Navbar from "./Components/Navbar";
import AddProject from "./Components/AddProject";
import GetProject from "./Components/GetProject";
import MakeChanges from "./Components/MakeChanges";
function App() {
  return (

      <Router >
        <Navbar/>
        <Switch>

          <Route exact path="/Home" exact component={LandingPage}/>
          <Route exact path="/AddProject" exact component={AddProject}/>
          <Route exact path="/Projects/:id" exact component={GetProject}/>
          <Route exact path="/Projects/:id/makeChanges" exact component={MakeChanges}/>



        </Switch>

      </Router>
  );
}

export default App;
