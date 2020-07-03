import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";

class Navbar extends Component {

    handleForm(){
        document.querySelector("#modalAddress").hidden=false;
    }

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
                        <button type="button" className="nav-button" id="addNewContactFormBtn" onClick={this.handleForm} >new Address</button>
                </nav>
            </header>
        )
    }


}

function GetGreeting(props) {
    return <h1 id="my_header"> Welcome {props.name} at AdViz</h1>;
}

export default Navbar;