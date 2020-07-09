import React, {Component} from 'react';
import {Map, Marker, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import axios from "axios";
import {LocationIcon} from "../../constants/LocationIcon";

class MapView extends Component {

    state = {
        currentLocation: {
            lat: 52.5172,
            lng: 13.3916
        },
        zoom: 11,
    }

    async componentDidMount() {
        try {
            await axios.get('https://my-json-server.typicode.com/Inv1ctus/advizDB/contacts/').then(res => {
                const contacts = res.data;
                this.setState({
                    contacts: contacts
                });
            });
        } catch (e) {
            console.log(` GET Request failed: ${e}`)
        }
    }

    getAllMarkers(contacts) {
        if (contacts !== undefined) {
            return (
                contacts.map((contact) =>
                    <Marker key={`marker-${contact.id}`} position={contact.markerPos} icon={LocationIcon}>

                    </Marker>
                )
            )
        }
    }


    render() {
        const {currentLocation, zoom} = this.state;
        return (
            <Map id="map" center={currentLocation} zoom={zoom}>
                <TileLayer
                    attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {this.getAllMarkers(this.state.contacts)}
            </Map>
        )
    }
}

export default MapView;