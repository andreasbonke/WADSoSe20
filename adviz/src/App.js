import React from 'react';
import LoginForm from './components/LoginForm';
import Main from './Main';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">

      </div>
      <Switch>
          <Route path="/" component={LoginForm} exact={true}></Route>
          <Route path="/main" component={Main} exact={true}></Route>
        </Switch>
    </Router>

  )
}

export default App;
