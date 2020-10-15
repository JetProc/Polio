import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./App";
import Main from "./components/pages/MainScreen/main";

import MyProjects from "./components/pages/Others/MyProjects"
import MyProfile from "./components/pages/Others/MyProfile"
import RecycleBin from "./components/pages/Others/RecycleBin"
import Test from "./components/pages/Others/Test"
import Default from "./components/pages/Others/DefaultPage"
const Routes = (props) => {
  return(
    <Router>
        <Route exact path="/" component={App} />
        <Route path="/main" component={Main} />
        <Route  path="/Test" component={Test}/>
        <Route path="/MyProjects" component={MyProjects}/>
        <Route path="/MyProfile" component={MyProfile}/>
        <Route path="/RecycleBin" component={RecycleBin}/>
        <Route path="/Default" component ={Default}/>

    </Router>
  );
  }
 
export default Routes;