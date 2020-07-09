import React, {Component} from 'react';
import {Consumer} from "../../contactContext";
import  axios from 'axios';
import {Link} from "react-router-dom";

class EditContactForm extends Component {
    state = {
        forename: "",
        name: "",
        street: "",
        postId: "",
        town: "",
        country: "",
        isPrivate: false,
        id: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    handleCheckboxChange = (e) => {
        this.setState({
            isPrivate: !this.state.isPrivate
        });
    }

    async componentDidMount() {
        const {id} = this.props.match.params;

        try {
            await axios.get(`https://my-json-server.typicode.com/Inv1ctus/advizDB/contacts/${id}`).then(res => {
                console.log(res.data);

                const contact = res.data;
                this.setState({
                    forename: contact.forename,
                    name: contact.name,
                    street: contact.street,
                    postId: contact.postId,
                    town: contact.town,
                    country: contact.country,
                    isPrivate: contact.isPrivate,
                    id: contact.id
                });
            });
        } catch (e) {
            console.log(`GET Request failed: ${e}`)
        }

    }

    onSubmit = async (dispatch, e) => {
        e.preventDefault();
        const {forename, name, street, postId, town, country, isPrivate, id} = this.state;

        let updateContact = {
            forename,
            name,
            street,
            postId,
            town,
            country,
            isPrivate,
            id
        };

        try {
            const res = await axios.put(
                `https://my-json-server.typicode.com/Inv1ctus/advizDB/contacts/${updateContact.id}`, updateContact);

            console.log(res.data)
            dispatch({type: "UPDATE_CONTACT", payload: res.data});
        } catch (e) {
            console.log(`PUT Request failed: ${e}`)
        }

        this.setState({
            forename: "",
            name: "",
            street: "",
            postId: "",
            town: "",
            country: "",
            isPrivate: false
        });

        this.props.history.push("/main");
    };

    render() {
        const {forename, name, street, postId, town, country, isPrivate} = this.state;
        return (
            <Consumer>
                {value => {
                    const {dispatch} = value;
                    return (
                        <div className="modal" id="modalAddress">
                            <form className="modal-content" id="AddressForm"
                                  onSubmit={this.onSubmit.bind(this, dispatch)}>
                                <div className="modal-header">
                                    <Link to={"/main"}>
                                        <span className="close-button"
                                              onClick={this.clearInputFields}>&times;</span>
                                    </Link>
                                    <h2>Update Address</h2>
                                </div>
                                <div className="container">
                                    <label htmlFor="forname">Forname:</label>
                                    <input type="text" id="forename" value={forename} onChange={this.handleChange}
                                           required/>
                                    <label htmlFor="name">Name:</label>
                                    <input type="text" id="name" value={name} onChange={this.handleChange} required/>
                                    <label htmlFor="street">Street:</label>
                                    <input type="text" id="street" value={street} onChange={this.handleChange}
                                           required/>
                                    <label htmlFor="postId">Postcode:</label>
                                    <input type="text" id="postId" value={postId} onChange={this.handleChange}
                                           required/>
                                    <label htmlFor="town">Town:</label>
                                    <input type="text" id="town" value={town} onChange={this.handleChange} required/>
                                    <label htmlFor="country">Country:</label>
                                    <input type="text" id="country" value={country} onChange={this.handleChange}
                                           required/>
                                    <label htmlFor="updateAdressCheck">Private:</label>
                                    <input type="checkbox" id="updateAddressCheck" value={isPrivate} checked={isPrivate}
                                           onChange={this.handleCheckboxChange}/>
                                    <button type="submit" className="form-button">Update</button>
                                </div>
                            </form>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

export default EditContactForm;