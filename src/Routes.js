import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import Main from './components/pages/MainScreen/main';

import MyProjects from './components/pages/Others/MyProjects';
import MyProfile from './components/pages/Others/MyProfile';
import RecycleBin from './components/pages/Others/RecycleBin';
import MyGames from './components/pages/Others/MyGame';
import Test from './components/pages/Others/Test';
import School from './components/pages/Others/School';
import Default from './components/pages/Others/DefaultPage';
import ProfileLoading from './components/pages/Others/ProfileLoading';
const Routes = props => {
  return (
    <Router>
      <Route exact path="/" component={App} />
      <Route path="/main" component={Main} />
      <Route path="/Test" component={Test} />
      <Route path="/My Projects" component={MyProjects} />
      <Route path="/My Profile" component={MyProfile} />
      <Route path="/My Games" component={MyGames} />
      <Route path="/Recycle Bin" component={RecycleBin} />
      <Route path="/School" component={School} />
      <Route path="/ProfileLoading" component={ProfileLoading} />
      <Route path="/Default" component={Default} />
    </Router>
  );
};

export default Routes;
