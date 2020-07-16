import React, {Component} from 'react';
import {
    Link, withRouter
} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {logout} from "../../store/actions/authActions";

class Navbar extends Component {

    render() {
        return (
            <header>
                <div>
                    <h1 id="my_header"> Welcome {this.props.user.username} at AdViz</h1>
                </div>
                <nav>
                    <Link to="/">
                        <button onClick={logout} type="button" className="nav-button" id="logOutBtn">Log Out</button>
                    </Link>
                    {this.props.user.isAdmin && (
                        <Link to="/add">
                            <button type="button" className="nav-button" id="addNewContactFormBtn">new Address</button>
                        </Link>
                    )}
                </nav>
            </header>
        )
    }
}

Navbar.propTypes = {
    user: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    user: state.auth.user
});

export default connect(mapStateToProps, {logout})(withRouter(Navbar));