import React, {Component} from 'react';
import {Map, Marker, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getContacts} from '../../store/actions/contactActions'
import {LocationIcon} from "../../constants/LocationIcon";

class MapView extends Component {

    state = {
        currentLocation: {
            lat: 52.5172,
            lng: 13.3916
        },
        zoom: 11,
    }

    componentDidMount() {
        this.props.getContacts();
    }

    getAllMarkers(contacts) {
        if (contacts !== undefined) {
            return (
                contacts.map((contact) =>
                    <Marker key={`marker-${contact.id}`} position={[contact.latitude,contact.longitude]} icon={LocationIcon}>

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
                {this.getAllMarkers(this.props.contacts)}
            </Map>
        )
    }
}

MapView.propTypes = {
    contacts: PropTypes.array.isRequired,
    getContacts: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    contacts : state.contact.contacts
})

export default connect(mapStateToProps, {getContacts})(MapView);