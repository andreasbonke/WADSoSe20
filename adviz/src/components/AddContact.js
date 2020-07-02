import React, { Component } from 'react';

class AddContact extends Component {
    state = {
        forname: null,
        name: null,
        street: null,
        postId: null,
        town: null,
        country: null,
        isPrivate: null
    }
    handleChange = (e) => {
        // console.log(e.target.id, e.target.value);
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addContact(this.state);
    }
    render() {
        return (
            <div className="modal" id="modalAddress">
                <form className="modal-content" id="AddressForm" onSubmit={this.handleSubmit}>
                    <div className="modal-header">
                        <span className="close" id="closeContactForm">&times;</span>
                        <h2>Add New Address</h2>
                    </div>
                    <div className="container">
                        <label htmlFor="forname">Forname:</label>
                        <input type="text" id="forname" onChange={this.handleChange} required />
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" onChange={this.handleChange} required />
                        <label htmlFor="street">Street:</label>
                        <input type="text" id="street" onChange={this.handleChange} required />
                        <label htmlFor="postId">Postcode:</label>
                        <input type="text" id="postId" onChange={this.handleChange} required />
                        <label htmlFor="town">Town:</label>
                        <input type="text" id="town" onChange={this.handleChange} required />
                        <label htmlFor="country">Country:</label>
                        <input type="text" id="county" onChange={this.handleChange} required />
                        <label htmlFor="updateAdressCheck">Private:</label>
                        <input type="checkbox" id="updateAddressCheck" checked={this.state.isPrivate} onChange={this.handleChange} />
                        <button type="submit" className="form-button">Add</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddContact