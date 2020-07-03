import React from 'react'
import img_avatar from '../assets/img_avatar.jpg'

const ContactList = ({ contacts }) => {

    return (
        <div className="modal" id="contactList">
            <div id="contact-content">
                <div className="modal-header">
                    <h2>Contact List</h2>
                </div>
                <div className="container" id="list-container">
                    <ul id="contactListEntries">
                        {contacts.map(contact => (
                            <li key={contact.id}>
                                <div className="chip">
                                    <img id="contactIcon" src={img_avatar} alt="Avatar Icon" />
                                    <span id="contactName">{contact.forname + " " + contact.name}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );

}

export default ContactList