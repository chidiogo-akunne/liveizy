import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';

import Login from './pages/login';

function App() {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  );
}

export default App;
