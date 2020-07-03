import React from 'react'

const ContactInfoWindow = ({ contacts, deleteContact, handleClose }) => {

    console.log(contacts)

    return (
        <div>
            {contacts.map(contact => (
                <div key={contact.id} className="modal" id="modalAddressInfo">
                    <div className="modal-content">
                        <div className="modal-header">
                            <span className="close" id="closeContactForm" onClick={() => { handleClose() }}>&times;</span>
                            <h2>Address</h2>
                        </div>
                        <div className="container">
                            <div>Forname: {contact.forname}</div>
                            <div>Name: {contact.name}</div>
                            <div>Street: {contact.street}</div>
                            <div>Postcode: {contact.postId}</div>
                            <div>Town: {contact.town}</div>
                            <div>Country: {contact.country}</div>
                            <div>Private: </div>
                            <input type="checkbox" id="updateAddressCheck" checked={contact.isPrivate} disabled />
                            <button className="form-button" onClick={() => { deleteContact(contact.id) }}>Delete</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ContactInfoWindow