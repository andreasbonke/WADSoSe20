import React, { Component } from 'react';

class ContactInfoWindow extends Component {

    handleClose() {
        document.querySelector("#modalAddressInfo").hidden = true;
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

    render() {
        return (
            <div>
                <div className="modal" id="modalAddressInfo">
                    <div className="modal-content">
                        <div className="modal-header">
                            <span className="close" id="closeContactForm" onClick={this.handleClose}>&times;</span>
                            <h2>Address</h2>
                        </div>
                        <div className="container">
                            <div>Forname: {this.props.contact.forname}</div>
                            <div>Name: {this.props.contact.name}</div>
                            <div>Street: {this.props.contact.street}</div>
                            <div>Postcode: {this.props.contact.postId}</div>
                            <div>Town: {this.props.contact.town}</div>
                            <div>Country: {this.props.contact.country}</div>
                            <div>Private: </div>
                            <input type="checkbox" id="updateAddressCheck" checked={this.props.contact.isPrivate} disabled />
                            <button className="form-button" onClick={() => { this.deleteContact(this.props.contact.id) }}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactInfoWindow