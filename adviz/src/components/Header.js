import React from 'react';

function Header() {
    return (
        <header>
            <h1 id="my_header">AdViz</h1>
            <nav>
                <button type="button" className="nav-button" id="logOutBtn">Abmelden
            </button>
                <button type="button" className="nav-button" id="addNewContactFormBtn">neuer Kontakt
            </button>
                <button type="button" className="nav-button" id="showContactListBtn">Kontakt Liste
            </button>
            </nav>
        </header>
    )
}

export default Header;