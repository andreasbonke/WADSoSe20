import React, {Component} from 'react';
import {Consumer} from "../../context";
import {AxiosInstance as axios} from 'axios';
import {Link} from "react-router-dom";

class EditContactForm extends Component {
    state = {
        forename: "",
        name: "",
        street: "",
        postId: "",
        town: "",
        country: "",
        isPrivate: false
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
        await axios.get(`https://my-json-server.typicode.com/Inv1ctus/advizDB/contacts/${id}`).then(res =>{
            console.log(res.data);

            const contact = res.data;
            this.setState({
                forename: contact.forename,
                name: contact.name,
                street: contact.street,
                postId: contact.postId,
                town: contact.town,
                country: contact.country,
                isPrivate: contact.isPrivate
            });
        });
    }

    onSubmit = async (dispatch, e) => {
        e.preventDefault();
        const {forename, name, street, postId, town, country, isPrivate} = this.state;

        const updateContact = {
            forename,
            name,
            street,
            postId,
            town,
            country,
            isPrivate
        };

        const id = this.props.match.params;

        const res = await axios.put(
            `https://my-json-server.typicode.com/Inv1ctus/advizDB/contacts/${id}`, {updateContact});

        dispatch({type: "UPDATE_CONTACT", payload: res.data});

        this.clearInputFields();
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
                                        <span className="close" id="closeContactForm"
                                              onClick={this.clearInputFields}>&times;</span>
                                    </Link>
                                    <h2>Update Address</h2>
                                </div>
                                <div className="container">
                                    <label htmlFor="forname">Forname:</label>
                                    <input type="text" id="forname" value={forename} onChange={this.handleChange}
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

    clearInputFields() {
        this.setState({
            forename: "",
            name: "",
            street: "",
            postId: "",
            town: "",
            country: "",
            isPrivate: false
        });
    }
}

export default EditContactForm;