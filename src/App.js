import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import Login from './pages/login';
import Signup from './pages/signup';

function App() {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
    </Switch>
  );
}

export default App;
