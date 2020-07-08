import React, {Component} from 'react'
import img_avatar from '../../assets/img_avatar.jpg'
import {Consumer} from "../../context";
import {Link} from "react-router-dom";
import axios from "axios";

class ContactList extends Component {

    onClickDelete = async (id, dispatch) => {
        await axios.delete(`https://my-json-server.typicode.com/Inv1ctus/advizDB/contacts/${id}`).then(res =>{
            console.log(res.data);
        });

        dispatch({ type: "DELETE_CONTACT", payload: id });
    };

    render() {
        return (
            <Consumer>
                {value => {
                    const {contacts , dispatch} = value;
                    return (
                        <div className="modal" id="contactList">
                            <div id="contact-content">
                                <div className="modal-header">
                                    <h2> Contact List </h2>
                                </div>
                                <div className="container" id="list-container">
                                    <ul id="contactListEntries">
                                        {contacts.map(contact => (
                                            <li key={contact.id}>
                                                {/*TODO: add onClick Handler to display current Contact Position on Map*/}
                                                <div className="chip">
                                                    <img id="contactIcon" src={img_avatar} alt="Avatar Icon"/>
                                                    <span id="contactName"> {contact.forename + " " + contact.name} </span>
                                                    <Link to={`main/contact/edit/${contact.id}`}>
                                                        <div className="popup-button" id="edit-button">&lambda;</div>
                                                    </Link>
                                                    <div className="popup-button" id="delete-button"onClick={this.onClickDelete.bind(this, contact.id, dispatch)}>&times;</div>
                                                    <Link to={`main/contact/show/${contact.id}`}>
                                                <div className="popup-button" id="info-button">&gt;</div>
                                                    </Link>
                                                </div>
                                            </li>))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    );
                }}
            </Consumer>

        );
    }
}

export default ContactList