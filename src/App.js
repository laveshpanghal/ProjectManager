import React from "react";
import {useHistory} from "react-router-dom";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import PrevProjectLoader from "./Components/PrevProjectLoader";
import Navbar from "./Components/Navbar";
import AddProject from "./Components/AddProject";
import GetProject from "./Components/GetProject";
import MakeChanges from "./Components/MakeChanges";
function App() {
  return (

      <Router>
        <Navbar/>
        <Switch>
          {/*<Route exact path="/" component={HomePage}/>*/}
          <Route exact path="/Home" exact component={LandingPage}/>
          <Route exact path="/AddProject" exact component={AddProject}/>
          <Route exact path="/Projects/:id" exact component={GetProject}/>
          <Route exact path="/Projects/:id/makeChanges" exact component={MakeChanges}/>



          {/*<Route exact path="/design" exact component={Design}/>*/}
          {/*<Route exact path="/Photography" exact component={Photography}/>*/}
          //     {/*<Route exact path="/login" component={Login}/>*/}
          //     {/*<PrivateRoute exact path="/event/:id/:orgId" component={GetEvent} />*/}
          //     {/*<PrivateRoute exact path="/org/event/:id/:orgId" component={GetOrgEvent} />*/}
          //     {/*<PrivateRoute exact path="/dashboard" component={Events}/>*/}
          //     {/*<PrivateRoute exact path="/createEvent" component={CreateEvent}/>*/}
          //     {/*<PrivateRoute exact path="/requests" component={ListRequest}/>*/}
          //     {/*<PrivateRoute exact path="/org/requests" component={OrgRequest}/>*/}
          //     {/*<PrivateRoute exact path="/createRequest" component={CreateRequest}/>*/}
          //     {/*<PrivateRoute exact path="/track" component={Track} />*/}
          //     {/*<PrivateRoute exact path="/editor" component={Editor}/>*/}
          //     {/*<PrivateRoute exact path="/articles" component={Article} />*/}
          //     {/*<PrivateRoute*/}
          //     {/*  exact*/}
          //     {/*  path="/articles/:time/:key"*/}
          //     {/*  component={GetArticle}*/}
          //     {/*/>*/}

        </Switch>

      </Router>
  );
}

export default App;
