import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";

class Navbar extends Component {

    render() {
        return (
            <header>
                <div>
                    <GetGreeting name="admin" />
                </div>
                <nav>
                    <Link to="/">
                        <button type="button" className="nav-button" id="logOutBtn" >Log Out</button>
                    </Link>
                    <Link to="/main/add">
                        <button type="button" className="nav-button" id="addNewContactFormBtn" >new Address</button>
                    </Link>

                </nav>
            </header>
        )
    }


}

function GetGreeting(props) {
    return <h1 id="my_header"> Welcome {props.name} at AdViz</h1>;
}

export default Navbar;