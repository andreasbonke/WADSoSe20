import React, {Component} from 'react'
import img_avatar from '../../assets/img_avatar.jpg'
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getContacts , deleteContact} from '../../store/actions/contactActions'

class ContactList extends Component {

    onClickDelete = (id) => {
        this.props.deleteContact(id)
    };

    componentDidMount() {
        this.props.getContacts();
    }

    render() {
        const {contacts} = this.props;
        return (
            <div className="modal" id="contactList">
                <div id="contact-content">
                    <div className="modal-header">
                        <h2> Contact List </h2>
                    </div>
                    <div className="container" id="list-container">
                        <ul id="contactListEntries">
                            {contacts && contacts.map(contact => {
                                return(
                                    <li key={contact.id}>
                                        {/*TODO: add onClick Handler to display current Contact Position on Map*/}
                                        <div className="chip">
                                            <img id="contactIcon" src={img_avatar} alt="Avatar Icon"/>
                                            <span
                                                id="contactName"> {contact.forename + " " + contact.name} </span>
                                            <Link to={`/edit/${contact.id}`}>
                                                <div className="popup-button" id="edit-button">&lambda;</div>
                                            </Link>
                                            <div className="popup-button" id="delete-button"
                                                 onClick={this.onClickDelete(contact.id)}>&times;</div>
                                            <Link to={`/show/${contact.id}`} key={contact.id}>
                                                <div className="popup-button" id="info-button">&gt;</div>
                                            </Link>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    getContacts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    contacts: state.contact.contacts
});

export default connect(mapStateToProps, {getContacts, deleteContact})(ContactList)