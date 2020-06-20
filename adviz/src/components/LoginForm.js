import React, { useState } from 'react';

function LoginForm(props) {
    const [state, setState] = useState({
        name : "",
        password : ""
    })

    const handleChange = (e) => {
        const {id, value} = e.target
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        // Anmeldung weiterverarbeiten
    }

    return (
        <div className="modal" id="modalLogIn">
            <form className="modal-content" id="loginForm">
                <div className="modal-header">
                    <h2>Anmelden</h2>
                </div>
                <div className="container">
                    <label htmlFor="username"><b>Username</b></label>
                    <input type="text" placeholder="Username eingeben" value={state.name} onChange={handleChange} required />
                    <label htmlFor="password"><b>Passwort</b></label>
                    <input type="password" placeholder="Passwort eingeben" value={state.password} onChange={handleChange} required />
                    <button type="submit" className="form-button" id="logInBtn">Anmelden</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm