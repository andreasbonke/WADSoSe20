import {
    GET_CONTACTS,
    DELETE_CONTACT,
    GET_CONTACT,
    UPDATE_CONTACT, ADD_CONTACT
} from './types';
import axios from 'axios';

export const getContacts = () => dispatch => {
    axios.get('http://localhost:3300/adViz/contacts').then(res => {
        dispatch({
            type: GET_CONTACTS,
            payload: res.data
        });
    })
};

export const getContact = id => dispatch => {
    axios.get(
        `http://localhost:3300/adViz/contacts/${id}`
    ).then(res => {
        dispatch({
            type: GET_CONTACT,
            payload: res.data
        });
    })

};

export const addContact = contact => dispatch => {
    axios.post(
        `http://localhost:3300/adViz/contacts`,
        contact
    ).then(res => {
        dispatch({
            type: ADD_CONTACT,
            payload: res.data
        });
    }).catch(() => {
        alert("Address not found!!!")
    });


};

export const deleteContact = id => dispatch => {
    axios.delete(`http://localhost:3300/adViz/contacts/${id}`).then(() => {
        dispatch({
            type: DELETE_CONTACT,
            payload: id
        });
    }).catch(() => {
        alert("Wrong Contact ID");
    });
};

export const updateContact = contact => dispatch => {
    axios.put(
        `http://localhost:3300/adViz/contacts/${contact.id}`,
        contact
    ).then((res) => {
        dispatch({
            type: UPDATE_CONTACT,
            payload: res.data
        });
    }).catch(() => {
        alert("Address not found!!!")
    })
};