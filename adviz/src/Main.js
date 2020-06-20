import React, { Component } from 'react';
import Header from './components/Header';
import Contacts from './constants/Contacts';
import AddContact from './components/AddContact';
import Footer from './components/Footer'

class Main extends Component {
    state = {
        contacts: [
            { forname: 'Andreas', name: 'Bonke', street: 'Am Krusenick', postId: '12555', town: 'Berlin', country: 'Deutschland', isPrivate: false, id: 1 },
            { forname: 'Julia', name: 'Koldewitz', street: 'Am Krusenick', postId: '12555', town: 'Berlin', country: 'Deutschland', isPrivate: false, id: 2 },
            { forname: 'Marvin', name: 'Rausch', street: 'Gaillardstrasse', postId: '13187', town: 'Berlin', country: 'Deutschland', isPrivate: true, id: 3 },
        ]
    }

    addContact = (contact) => {
        contact.id = Math.random();
        let contacts = [...this.state.contacts, contact];
        this.setState({
            contacts: contacts
        });
    }

    deleteContact = (id) => {
        // console.log(id);
        let contacts = this.state.contacts.filter(contact => {
            return contact.id !== id
        });
        this.setState({
            contacts: contacts
        });
    }

    componentDidMount() {
        console.log('component mounted');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('component updated');
        console.log(prevProps, prevState)
    }

    render() {
        return (
            <div id="main">
                <Header />
                <div id='map'></div>
                <Contacts contacts={this.state.contacts} deleteContact={this.deleteContact} />
                <AddContact addContact={this.addContact} />
                <Footer />
            </div>
        )
    }
}

export default Main;