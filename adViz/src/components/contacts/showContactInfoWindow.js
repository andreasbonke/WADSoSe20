import React, {Component} from "react";
import {AxiosInstance as axios} from 'axios';
import {Link} from "react-router-dom";

class ShowContactInfoWindow extends Component {

    state = {
        forename: "",
        name: "",
        street: "",
        postId: "",
        town: "",
        country: "",
        isPrivate: false
    };

    async componentDidMount() {
        const {id} = this.props.match.params;

        await axios.get(`https://my-json-server.typicode.com/Inv1ctus/advizDB/contacts${id}`).then(res => {
            console.log(res);
            const contact = res.data;
            this.setState({
                forename: contact.forename,
                name: contact.name,
                street: contact.street,
                postId: contact.postId,
                town: contact.town,
                country: contact.country,
                isPrivate: contact.isPrivate
            });
        });
    }

    render() {
        const {forename, name, street, postId, town, country, isPrivate} = this.state;
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
                        <input type="text" id="forename" value={forename} readOnly={true} disabled={true}/>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" value={name} readOnly={true} disabled={true}/>
                        <label htmlFor="street">Street:</label>
                        <input type="text" id="street" value={street} readOnly={true} disabled={true}/>
                        <label htmlFor="postId">Postcode:</label>
                        <input type="text" id="postId" value={postId} readOnly={true} disabled={true}/>
                        <label htmlFor="town">Town:</label>
                        <input type="text" id="town" value={town} readOnly={true} disabled={true}/>
                        <label htmlFor="country">Country:</label>
                        <input type="text" id="country" value={country} readOnly={true} disabled={true}/>
                        <label htmlFor="updateAddressCheck">Private:</label>
                        <input type="checkbox" id="updateAddressCheck" value={isPrivate} checked={isPrivate}
                               disabled={true}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShowContactInfoWindow;