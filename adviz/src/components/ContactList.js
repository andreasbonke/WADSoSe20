import React, { Component } from 'react'
import ContactListChip from './ContactListChip'

class ContactList extends Component {

    render() {
        return (
            <div className="modal" id="contactList">
                <div id="contact-content">
                    <div className="modal-header">
                        <h2>Contact List</h2>
                    </div>
                    <div className="container" id="list-container">
                    <ContactListChip contacts={this.props.contacts} />
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactList;