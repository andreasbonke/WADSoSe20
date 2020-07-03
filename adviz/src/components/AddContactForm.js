import React, { Component } from 'react';

class AddContactForm extends Component {
    state = {
        forname: "",
        name: "",
        street: "",
        postId: "",
        town: "",
        country: "",
        isPrivate: false
    }

    handleClose(){
        document.querySelector("#modalAddress").hidden=true;
    }

    handleChange = (e) => {
        // console.log(e.target.id, e.target.value);
        this.setState({
            [e.target.id]:e.target.value
        });
    }

    handleCheckboxChange = (e) => {
        this.setState({
            isPrivate: !this.state.isPrivate
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addContact(this.state);
        document.querySelector("#modalAddress").hidden=true;
        this.setState({
            forname: "",
            name: "",
            street:"",
            postId:"",
            town:"",
            country:"",
            isPrivate: false

        })
        
    }
    render() {
        return (
            <div className="modal" id="modalAddress">
                <form className="modal-content" id="AddressForm"  onSubmit={this.handleSubmit}>
                    <div className="modal-header">
                        <span className="close" id="closeContactForm" onClick={this.handleClose}>&times;</span>
                        <h2>Add New Address</h2>
                    </div>
                    <div className="container">
                        <label htmlFor="forname">Forname:</label>
                        <input type="text" id="forname" value={this.state.forname} onChange={this.handleChange} required />
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" value={this.state.name} onChange={this.handleChange} required />
                        <label htmlFor="street">Street:</label>
                        <input type="text" id="street" value={this.state.street} onChange={this.handleChange} required />
                        <label htmlFor="postId">Postcode:</label>
                        <input type="text" id="postId" value={this.state.postId} onChange={this.handleChange} required />
                        <label htmlFor="town">Town:</label>
                        <input type="text" id="town" value={this.state.town} onChange={this.handleChange} required />
                        <label htmlFor="country">Country:</label>
                        <input type="text" id="country" value={this.state.country} onChange={this.handleChange} required />
                        <label htmlFor="updateAdressCheck">Private:</label>
                        <input type="checkbox" id="updateAddressCheck" value={this.state.isPrivate} checked={this.state.isPrivate} onChange={this.handleCheckboxChange} />
                        <button type="submit" className="form-button">Add</button>
                    </div>

                </form>
            </div>
        )
    }
}

export default AddContactForm;