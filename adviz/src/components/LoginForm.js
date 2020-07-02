import React, { useState } from 'react';

function LoginForm(props) {
    const [state, setState] = useState({
        name: "",
        password: ""
    })

    const handleChange = (e) => {
        const { id, value } = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        //TODO: Anmeldung weiterverarbeiten
        props.history.push('/main');
    }

    return (
        <div className="modal" id="modalLogIn">
            <form className="modal-content" id="loginForm" onSubmit={handleSubmitClick}>
                <div className="modal-header">
                    <h2>Log In to Adviz</h2>
                </div>
                <div className="container">
                    <label htmlFor="username"><b>Username</b></label>
                    <input id="name" type="text" placeholder="Username" value={state.name} onChange={handleChange} required />
                    <label htmlFor="password"><b>Password</b></label>
                    <input id="password" type="password" placeholder="Password" value={state.password} onChange={handleChange} required />
                    <button type="submit" className="form-button" id="logInBtn"  >Log In</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm