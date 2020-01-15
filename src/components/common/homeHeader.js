import React, { Component}from 'react'
import {NavLink, withRouter } from 'react-router-dom';

import {
    NavbarBrand,
  Navbar,Button
 
  } from 'reactstrap';


class HomeHeader extends Component {

    
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-light bg-light">
                <NavLink to="/" className="navbar-brand">
                <img src={process.env.PUBLIC_URL + '/moviereview_logo.png'} height="50" width="60" alt="movie review logo"/> 
                    Movie Review 
                </NavLink>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ml-auto">
                    <NavLink to="/login" class="nav-item nav-link"><Button color="success">Login</Button></NavLink>
                    </div>
                </div>
            </nav>
              
        )
    }
}


export default withRouter(HomeHeader)