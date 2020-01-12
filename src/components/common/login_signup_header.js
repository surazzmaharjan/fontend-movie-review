import React, { Component}from 'react'
import {NavLink, withRouter } from 'react-router-dom';

import {
    NavbarBrand,
  Navbar,Button
 
  } from 'reactstrap';


class LoginSignupHeader extends Component {

    
    render() {
        return (
            <div>
                <div className="nav-container-color">
                 
                <Navbar className="header-title" color="light" light expand="md">
                <div >
                <NavLink  to="/">
                   <img src={process.env.PUBLIC_URL + '/moviereview_logo.png'} height="70" width="80" alt="movie review logo"/> 
                   </NavLink>
                <NavbarBrand href="/">Movie Review </NavbarBrand>
               
                </div>
                
                </Navbar>
             </div> 
                                 
             </div>

              
        )
    }
}


export default withRouter(LoginSignupHeader)