import React, {Component} from 'react'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getContacts} from '../../store/actions/contactActions'
import ContactItem from './ContactItem'

class ContactList extends Component {

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
                            {contacts && contacts.map(contact => (
                               <ContactItem key={contact.id} contact={contact}/>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    getContacts: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    contacts: state.contact.contacts
});

export default connect(mapStateToProps, {getContacts})(ContactList)