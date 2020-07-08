import React, {Component} from 'react';
import {Map, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import Markers from '../../constants/ContactMarker'
import {Consumer} from "../../context";

class MapView extends Component {

    state = {
        currentLocation: {
            lat: 52.5172,
            lng: 13.3916
        },
        zoom: 11,
    }
    
    render() {
        return (
            <Consumer>
                {value => {
                    const {contacts} = value;
                    const {currentLocation, zoom} = this.state;
                    return (
                        <Map id="map" center={currentLocation} zoom={zoom}>
                            <TileLayer
                                attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Markers contacts={contacts}/>
                        </Map>
                    )

                }}
            </Consumer>

        )
    }
}

export default MapView;