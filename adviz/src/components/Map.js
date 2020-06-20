import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

const { Map: LeafletMap, TileLayer, Marker, Popup } = ReactLeaflet

class Map extends Component {
    constructor(){
        super()
        this.state = {
            lat = 52.5172,
            lng = 13.3916,
            zoom = 11
        }
    }
    

    render() {
        const position = [this.state.lat, this.state.lng];
        return (
            <LeafletMap id="map" center={position} zoom={this.state.zoom}>
                <TileLayer
                    attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </LeafletMap> 
        )
    }
}

ReactDOM.render(<Map />, document.querySelector('#map'))