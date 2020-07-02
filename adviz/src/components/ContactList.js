import React, { Component } from 'react'
import ContactListChip from './ContactListChip'

class ContactList extends Component {

    render() {
        return (
            <div className="modal" id="contactList">
                <div id="contact-content">
                    <div className="modal-header">
                        <span className="close" id="closeContactForm">&times;</span>
                        <h2>Contact List</h2>
                    </div>
                    <div className="container" id="list-container">
                    <ul id ="contactListEntries">
                        <ContactListChip />
                        <ContactListChip />
                        <ContactListChip />
                        <ContactListChip />
                        <ContactListChip />
                        <ContactListChip />
                        <ContactListChip />
                    </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactList;