import React, {Component} from 'react'
import img_avatar from '../assets/img_avatar.jpg'


class ContactListChip extends Component {
    render() {
        return (
            <li>
                <div className="chip">
                    <img id="contactIcon" src={img_avatar} alt="Avatar Icon" />
                    <span id="contactName">contactName</span>
                </div>
            </li>
        )
    }
}

export default ContactListChip;