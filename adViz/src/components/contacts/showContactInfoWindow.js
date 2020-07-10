import React from "react";
import {Link} from "react-router-dom";

const ShowContactInfoWindow = ({contact}) => {

    return (
        <div className="modal" id="modalAddressInfo">
            <div className="modal-content">
                <div className="modal-header">
                    <Link to={`/main`}>
                        <span className="close-button">&times;</span>
                    </Link>
                    <h2>Address</h2>
                </div>
                <div className="container">
                    <label htmlFor="forename">Forename:</label>
                    <input type="text" id="forename" value={contact.forename} readOnly={true} disabled={true}/>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={contact.name} readOnly={true} disabled={true}/>
                    <label htmlFor="street">Street:</label>
                    <input type="text" id="street" value={contact.street} readOnly={true} disabled={true}/>
                    <label htmlFor="postId">Postcode:</label>
                    <input type="text" id="postId" value={contact.postId} readOnly={true} disabled={true}/>
                    <label htmlFor="town">Town:</label>
                    <input type="text" id="town" value={contact.town} readOnly={true} disabled={true}/>
                    <label htmlFor="country">Country:</label>
                    <input type="text" id="country" value={contact.country} readOnly={true} disabled={true}/>
                    <label htmlFor="updateAddressCheck">Private:</label>
                    <input type="checkbox" id="updateAddressCheck" value={contact.isPrivate}
                           checked={contact.isPrivate}
                           disabled={true}/>
                </div>
            </div>
        </div>

    )
}

export default ShowContactInfoWindow;