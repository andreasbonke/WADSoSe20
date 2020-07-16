import React, {Component} from 'react';
import ContactList from './contacts/ContactList'
import Footer from './layout/Footer'
import MapView from './layout/MapView';
import PropTypes from "prop-types";
import {connect} from 'react-redux';
import {getContacts} from "../store/actions/contactActions";

class Main extends Component {
    state = {
        contacts: this.props.getContacts()
    }

    render() {
        return (
            <div id="main">
                <MapView contacts={this.state.contacts}/>
                <Footer/>
                <ContactList contacts={this.state.contacts}/>
            </div>
        );
    }
}

Main.propsType = {
    contacts: PropTypes.array.isRequired,
    getContacts: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    contacts: state.contact.contacts,
});

export default connect(mapStateToProps, {getContacts})(Main);