import React, {Component} from 'react';
import {
    Link, withRouter
} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {logout} from "../../store/actions/authActions";

class NavBar extends Component {

    render() {
        return (
            <header>
                <div>
                    <Link to="/">
                    <h1 id="my_header" onClick={this.props.logout}> Welcome {this.props.user.username &&(this.props.user.username.toUpperCase()+' ')}at AdViz</h1>
                    </Link>
                </div>
                <nav>
                    {this.props.loggedIn ?(
                        <Link to="/">
                            <button onClick={this.props.logout} type="button" className="nav-button" id="logOutBtn">Log Out</button>
                        </Link>
                    ):(
                        <div>
                            <Link to="/signIn">
                                <button type="button" className="nav-button" id="logOutBtn">Sign in</button>
                            </Link>
                            <Link to="/signUp">
                                <button  type="button" className="nav-button" id="logOutBtn">Sign up</button>
                            </Link>
                        </div>
                        )}
                    {this.props.user.isAdmin && this.props.loggedIn ?(
                        <Link to="/add">
                            <button type="button" className="nav-button" id="addNewContactFormBtn">new Address</button>
                        </Link>
                    ):null}
                </nav>
            </header>
        )
    }
}

NavBar.propTypes = {
    user: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
    loggedIn: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
    user: state.auth.user,
    loggedIn: state.auth.loggedIn
});

export default connect(mapStateToProps, {logout})(withRouter(NavBar));