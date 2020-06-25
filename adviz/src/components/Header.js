import React from 'react';

function Header() {
    return (
        <header>
            <div>
            <GetGreeting name="admin"/>
            </div>
            <nav>
                <button type="button" className="nav-button" id="logOutBtn">Log Out
            </button>
                <button type="button" className="nav-button" id="addNewContactFormBtn">new Address
            </button>
                <button type="button" className="nav-button" id="showContactListBtn">Address List
            </button>
            </nav>
        </header>
    )
}

function GetGreeting(props) {
    return <h1 id="my_header"> Welcome {props.name} at AdViz</h1>;
}

export default Header;