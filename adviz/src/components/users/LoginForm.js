import React, { Component } from 'react';

class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            password: ""
        }
    }

    handleNameChange = (e) => {
        this.setState({ name: e.target.value })
    }

    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.history.push('/main');
    }

    render() {
        return (
            <div className="modal" id="modalLogIn">
                <form className="modal-content" id="loginForm" onSubmit={this.handleSubmit}>
                    <div className="modal-header">
                        <h2>Log In to Adviz</h2>
                    </div>
                    <div className="container">
                        <label htmlFor="username"><b>Username</b></label>
                        <input type="text" placeholder="Username" value={this.state.name} onChange={this.handleNameChange} required />
                        <label htmlFor="password"><b>Password</b></label>
                        <input type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} required />
                        <button type="submit" className="form-button" id="logInBtn">Log In</button>
                    </div>
                </form>
            </div>
        )
    }
}



export default LoginForm;