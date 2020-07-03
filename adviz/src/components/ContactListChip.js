import React, { Component } from 'react'
import img_avatar from '../assets/img_avatar.jpg'
import ContactsInfo from './ContactInfoWindow';


class ContactListChip extends Component {

    handleChip = (contact) => {
        return <ContactsInfo contact={contact} />
    }

    render() {
        return (
            <React.Fragment>
                <ul id="contactListEntries">
                    {this.props.contacts.map(contact => (
                        <li key={contact.id}>
                            <div className="chip" onClick={() => { this.handleChip(contact) }}>
                                <img id="contactIcon" src={img_avatar} alt="Avatar Icon" />
                                <span id="contactName">{contact.forname + " " + contact.name}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </React.Fragment>
        )
    }
}

export default ContactListChip;