import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import Main from './Main';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css'


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact={true}>
            <LoginForm />
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>

  )
}

export default App;
