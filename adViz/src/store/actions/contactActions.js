import {
    GET_CONTACTS,
    ADD_CONTACT,
    DELETE_CONTACT,
    GET_CONTACT,
    UPDATE_CONTACT
} from './types';
import axios from 'axios';

export const getContacts = () => async dispatch => {
    const res = await axios.get('http://localhost:3300/adViz/contacts');

    dispatch({
        type: GET_CONTACTS,
        payload: res.data
    });
};

export const getContact = id => async dispatch => {
    const res = await axios.get(
        `http://localhost:3300/adViz/contacts/${id}`
    );

    dispatch({
        type: GET_CONTACT,
        payload: res.data
    });
};

export const addContact = contact => async dispatch => {
    const res = await axios.post(
        `http://localhost:3300/adViz/contacts`,
        contact
    );

    dispatch({
        type: ADD_CONTACT,
        payload: res.data
    });
};

export const deleteContact = id => async dispatch => {
    try {
        await axios.delete(`http://localhost:3300/adViz/contacts/${id}`);

        dispatch({
            type: DELETE_CONTACT,
            payload: id
        });
    } catch (e) {
        dispatch({
            type: DELETE_CONTACT,
            payload: id
        });
    }
};

export const updateContact = contact => async dispatch => {
    const res = await axios.put(
        `http://localhost:3300/adViz/contacts/${contact.id}`,
        contact
    );

    dispatch({
        type: UPDATE_CONTACT,
        payload: res.data
    });
};