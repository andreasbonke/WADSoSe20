import React, { Component } from 'react';
import ContactList from './components/contacts/ContactList'
import Footer from './components/Footer'
import MapView from './components/MapView';

class Main extends Component {

    addMarkerPosAttributeToAllContacts() {
        this.state.contacts.map(contact => {
                if (contact.markerPos !== "undefined") {

                    let params = new URLSearchParams(contact.street + " " + contact.postId + " " + contact.town);
                    let url = "https://api.tomtom.com/search/2/geocode/" + params + ".json?countrySet=DE&key=SL0aR93PQoAaWTez8PLTAGhARjEgeDhf";
                    fetch(url)
                        .then(res => res.json())
                        .then(
                            (result) => {
                                let latitude = result["results"][0]["position"]["lat"];
                                let longitude = result["results"][0]["position"]["lon"];
                                if (latitude !== "undefined") {

                                    contact.markerPos = [latitude, longitude];

                                }
                                this.forceUpdate();
                            }
                        )
                }
                return null;
            }
        );

    }

    render() {
        return (
            <div id="main">
                    <div id="main">
                        <MapView/>
                        <Footer/>
                        <ContactList/>
                    </div>
            </div>
        )
    }
}

export default Main;