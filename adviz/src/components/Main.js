import React, {Component} from 'react';
import ContactList from './ContactList'
import Footer from './Footer'
import MapView from './MapView';
import AddContactForm from './AddContactForm';
import ContactInfoWindow from './ContactInfoWindow';


class Main extends Component {

    state = {
        contacts: [
            {
                forname: 'Andreas',
                name: 'Bonke',
                street: 'Am Krusenick',
                postId: '12555',
                town: 'Berlin',
                country: 'Deutschland',
                isPrivate: false,
                id: 1
            },
            {
                forname: 'Julia',
                name: 'Koldewitz',
                street: 'Am Krusenick',
                postId: '12555',
                town: 'Berlin',
                country: 'Deutschland',
                isPrivate: false,
                id: 2
            },
            {
                forname: 'Marvin',
                name: 'Rausch',
                street: 'Gaillardstrasse',
                postId: '13187',
                town: 'Berlin',
                country: 'Deutschland',
                isPrivate: true,
                id: 3
            },
        ],
        actualContact: {
            forname: "",
            name: "",
            street: "",
            postId: "",
            town: "",
            country: "",
            isPrivate: "",
        }
    }


    addContact = (contact) => {
        // prüfen ob id existiert
        //id hochsetzen
        contact.id = (Math.random().toFixed(1) * 100);
        let contacts = [...this.state.contacts, contact];
        this.setState({
            contacts: contacts
        });
    }

    deleteContact = (id) => {
        let contacts = this.state.contacts.filter(contact => {
            return contact.id !== id
        });
        this.setState({
            contacts: contacts
        });
        document.querySelector("#modalAddressInfo").hidden = true;
    }

    showContactInfo = (id) => {
        let contact = this.state.contacts.find(contact => {
            return contact.id === id
        });

        this.setState({
            actualContact: contact
        });
        document.querySelector("#modalAddressInfo").hidden = false;
    }

    handleClose = () => {
        document.querySelector("#modalAddressInfo").hidden = true;
    }

    // Methode wird ausgeführt nachdem die Komponenten in das DOM gerendert wurde
    componentDidMount() {
        //console.log(this.state.actualContact);
        document.querySelector("#modalAddress").hidden = true;
        document.querySelector("#modalAddressInfo").hidden = true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //console.log('component updated');
        //console.log(prevProps, prevState)
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div id="main">
                <MapView/>
                <ContactList contacts={this.state.contacts} showContactInfo={this.showContactInfo}/>
                <ContactInfoWindow contact={this.state.actualContact} deleteContact={this.deleteContact}
                                   handleClose={this.handleClose}/>
                <AddContactForm addContact={this.addContact}/>
                <Footer/>
            </div>
        )
    }
}

export default Main;