import axios from 'axios';
import {LOGIN, LOGOUT, LOGGEDIN} from "./types";

export const authUser = user => async dispatch => {
    return new Promise(function (resolve, reject) {
        axios.post('http://localhost:3300/login', user).then((response) => {
            if (response.status === 200) {
                dispatch({type: LOGIN, payload: response.data});
                dispatch({type: LOGGEDIN, payload: true});
                resolve("logged in");
            }
        }).catch(function (error) {
            if (error.response) {
                alert("login data incorrect");
            }
        })
    })
};

export const createUser = user => async dispatch => {
    await axios.post('http://localhost:3300/users', user).then((response) => {
        if (response.status === 200) {
            dispatch({type: LOGIN, payload: response.data});
            dispatch({type: LOGGEDIN, payload: true});
            response("logged in");
        }
    }).catch(function (error) {
        if (error.response) {
            alert("login data incorrect");
        }
    })
};

export const logout = () => dispatch =>{
    dispatch({type: LOGOUT, payload: null});
}