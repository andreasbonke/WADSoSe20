import React, {Component} from 'react';
import {Consumer} from "../../store/contactContext";
import  axios from 'axios';
import {Link} from "react-router-dom";

class AddContactForm extends Component {
    state = {
        forename: "",
        name: "",
        street: "",
        postId: "",
        town: "",
        country: "",
        isPrivate: false,
        markerPos: []
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

    async searchContactPosition(newContact) {
        let markerPos = [0,0]
            let params = new URLSearchParams(newContact.street + " " + newContact.postId + " " + newContact.town);
            let url = "https://api.tomtom.com/search/2/geocode/" + params + ".json?countrySet=DE&key=SL0aR93PQoAaWTez8PLTAGhARjEgeDhf";
            await fetch(url)
                .then(res => res.json())
                .then(
                    (results) => {
                        let latitude = results["results"][0]["position"]["lat"];
                        let longitude = results["results"][0]["position"]["lon"];
                        if (latitude !== "undefined") {
                             markerPos = [latitude, longitude]
                        }
                    }
                )

            newContact.markerPos= markerPos
    }

    onSubmit = async (dispatch, e) => {
        e.preventDefault();

        const {forename, name, street, postId, town, country, isPrivate, markerPos} = this.state;

        let newContact = {
            forename,
            name,
            street,
            postId,
            town,
            country,
            isPrivate,
            markerPos,
        };

        this.searchContactPosition(newContact)
        try {
            await axios.post(`https://my-json-server.typicode.com/Inv1ctus/advizDB/contacts`, newContact
            ).then(res => {
                dispatch({type: "ADD_CONTACT", payload: res.data});
                this.setState({
                    forename: "",
                    name: "",
                    street: "",
                    postId: "",
                    town: "",
                    country: "",
                    isPrivate: false
                });
            });
        } catch (e) {
            console.log(`POST Request failed: ${e}`)
        }
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
                                    <h2>Add New Address</h2>
                                </div>
                                <div className="container">
                                    <label htmlFor="forename">Forename:</label>
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
                                    <button type="submit" className="form-button">Add</button>
                                </div>
                            </form>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

export default AddContactForm;