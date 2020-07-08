import React, { Fragment } from 'react';
import { Marker } from 'react-leaflet';
import {LocationIcon} from "./LocationIcon";

const ContactMarker = (props) => {
    const { contacts } = props;
    const markers = contacts.map((contact, index) => (
        <Marker
            key={index}
            position={contact.markerPos}
            icon={LocationIcon}
        ></Marker>
    ));

    return contacts.length!== 0 ?<Fragment>{markers}</Fragment> :null
}

export default ContactMarker;