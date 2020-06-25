import React from 'react';
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
          <Route path="/" component={LoginForm} exact={true}></Route>
          <Route path="/main" component={Main} exact={true}></Route>
        </Switch>
      </div>
    </Router>

  )
}

export default App;
