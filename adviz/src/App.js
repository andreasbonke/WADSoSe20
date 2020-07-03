import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginForm from './components/LoginForm';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Switch>
          <Route path="/" component={LoginForm} exact={true}></Route>
          <Route path="/main" component={Main} exact={true}></Route>
        </Switch>
    </Router>

  )
}

export default App;
