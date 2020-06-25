import React, { Fragment } from 'react';
import { Marker } from 'react-leaflet';
import { LocationIcon } from '../constants/LocationIcon';

const ContactMarker = (props) => {
    const { contacts } = props;
    const markers = contacts.map((contact, index) => (
        <Marker
            key={index}
            position={contact.geometry}
            icon={LocationIcon}
        ></Marker>
    ));

    return <Fragment>{markers}</Fragment>
}

export default ContactMarker;