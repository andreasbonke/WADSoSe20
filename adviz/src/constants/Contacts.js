import React from 'react';

const Contacts = ({ contacts, deleteContact }) => {
    // console.log(this.props);
    // const { contacts } = this.props;
    return (
        <div className="contact-list">
            {
                contacts.map(contact => {
                    return contact.isPrivate === true ? (
                        <div className="modal" id="modalAddress">
                            <div className="modal-content" id="AddressForm">
                                <div className="modal-header">
                                    <span className="close" id="closeContactForm">&times;</span>
                                    <h2>Adresse</h2>
                                </div>
                                <div className="container">
                                    <div>Forname: {contact.forname}</div>
                                    <div>Name: {contact.name}</div>
                                    <div>Street: {contact.street}</div>
                                    <div>PostID: {contact.postId}</div>
                                    <div>Town: {contact.town}</div>
                                    <div>Country: {contact.country}</div>
                                    <div>Private: </div>
                                    <input type="checkbox" id="updateAddressCheck" checked={contact.isPrivate} disabled />
                                    <button className="form-button" onClick={() => { deleteContact(contact.id) }}>Löschen</button>
                                </div>
                            </div>
                        </div>
                    ) : null
                })
            }
        </div>
    )
}

export default Contacts