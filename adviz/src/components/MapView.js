import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import data from '../assets/data'
import Markers from '../constants/ContactMarker'

class MapView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentLocation: {
                lat: 52.5172,
                lng: 13.3916
            },
            zoom: 11,
        }
    }


    render() {
        const { currentLocation, zoom } = this.state;
        return (
            <Map id="map" center={currentLocation} zoom={zoom}>
                <TileLayer
                    attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Markers contacts={data.contacts} />
            </Map>
        )
    }
}

export default MapView;