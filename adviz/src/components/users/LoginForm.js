import React, {Component} from 'react';

class LoginForm extends Component {

    state = {
        name: "",
        password: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // TODO: implement axios Request and Redux Handling for User Login
        console.log(this.state)
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
                        <input type="text" id="username" placeholder="Username"
                               onChange={this.handleChange} required/>
                        <label htmlFor="password"><b>Password</b></label>
                        <input type="password" id="password" placeholder="Password"
                               onChange={this.handleChange} required/>
                        <button type="submit" className="form-button" id="logInBtn">Log In</button>
                    </div>
                </form>
            </div>
        )
    }
}


export default LoginForm;