import React, {Component} from 'react';
import ContactList from './contacts/ContactList'
import Footer from './layout/Footer'
import MapView from './layout/MapView';
import {Provider} from "../context";

class Main extends Component {

    render() {
        return (
                <div id="main">
                    <MapView/>
                    <Footer/>
                    <ContactList/>
                </div>
        );
    }
}
export default Main;