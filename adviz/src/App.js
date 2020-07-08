import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import LoginForm from './components/users/LoginForm';
import Main from './components/Main';
import Navbar from './components/layout/Navbar';
import ShowContactInfoWindow from "./components/contacts/ShowContactInfoWindow";
import AddContact from "./components/contacts/AddContactForm";
import EditContactForm from "./components/contacts/EditContactForm";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
            </div>
            <Switch>
                <Route path="/" component={LoginForm} exact={true}></Route>
                <Route path="/main" component={Main} exact={true}></Route>
                <Route path="/main/contact/show/:id" component={ShowContactInfoWindow} exact={true}></Route>
                <Route path="/main/add" component={AddContact} exact={true}/>
                <Route path="/main/contact/edit/:id" component={EditContactForm} exact={true}></Route>
            </Switch>
        </Router>

    )
}

export default App;
