import React, {Component} from "react";
import axios from "axios";

const ContactContext = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "DELETE_CONTACT":
            return {
                ...state,
                contacts: state.contacts.filter(
                    contact => contact.id !== action.payload
                )
            };
        case "ADD_CONTACT":
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            };
        case "UPDATE_CONTACT":
            return {
                ...state,
                contacts: state.contacts.map(contact =>
                    contact.id === action.payload.id
                        ? (contact = action.payload)
                        : contact
                )
            };
        case "LOGIN_SUCCESS":
            return {

            };
        case "LOGIN_ERROR":
            return {
                ...state
            };
        case "LOGOUT_SUCCESS":
            return state

        default:
            return state;
    }
};

export class Provider extends Component {
    state = {
        user:[],
        contacts: [],
        dispatch: action => {
            this.setState(state => reducer(state, action));
        }

    };

    async componentDidMount() {
        try {
            await axios.get('https://my-json-server.typicode.com/Inv1ctus/advizDB/contacts').then(res => {
                this.setState({contacts: res.data});
            })
        } catch (e) {
            console.log(`GET Request failed: ${e}`)
        }

        try {
            axios.get('https://my-json-server.typicode.com/Inv1ctus/advizDB/user').then(res =>{
                this.setState({user: res.data});
                console.log(res.data)
            })
        } catch (e) {
            console.log(`GET USER Request failed: ${e}`)
        }

    }

    render() {
        return (
            <ContactContext.Provider value={this.state}>
                {this.props.children}
            </ContactContext.Provider>
        );
    }
}

export const Consumer = ContactContext.Consumer;
