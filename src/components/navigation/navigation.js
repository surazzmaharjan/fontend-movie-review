import React, { Component}from 'react'
import Axios from 'axios';
import {NavLink, withRouter } from 'react-router-dom';



class Navigation extends Component {

    constructor(props) {
        super(props)


        
        this.state = {
            user: [],
            currentuser:{
                id:localStorage.getItem('userid'),
                name:localStorage.getItem('userfirstname'),
                lastname:localStorage.getItem('userlastname'),
                main:localStorage.getItem('mainadmin')
            },
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            }
        }
    }

    
    
   
    componentDidMount() {
        Axios.get('http://localhost:4000/users/me', this.state.config)
            .then((response) => {

                this.setState({
                    user: response.data
                })
            });
    }

    handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        localStorage.removeItem('userid');
        localStorage.removeItem('userfirstname');
        localStorage.removeItem('userlastname');
        

        this.props.history.push('/')
    }
    render() {
        return (
            <div> 
                                 
                <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom border-bottom-nav-top">
                    <NavLink className="navbar-brand"  to="/dashboard">
                   <img src={process.env.PUBLIC_URL + '/moviereview_logo.png'} height="60" width="70" alt="Movie Review Logo" /> 
                    Admin Panel</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        {/* <li className="nav-item">
                        <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
                        </li> */}
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li> */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Movie
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <NavLink   className="dropdown-item"  to="/addmovie">Add Movie</NavLink>
                            <NavLink   className="dropdown-item"  to="/viewallmovie">View Movie List</NavLink>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Admin User
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <NavLink   className="dropdown-item"  to="/addadmin">Add Admin User</NavLink>
                            <NavLink   className="dropdown-item"  to="/viewalladmin">View Admin List</NavLink>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Comments
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <NavLink  className="dropdown-item" to="/viewcomments">View Comment List</NavLink>
                            </div>
                        </li>
                       
                        </ul>

                        <div className="btn-group">
                    <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {this.state.user.firstname} {this.state.user.lastname}
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                        <NavLink className="dropdown-item" to={"/admin/edit/profile/"+this.state.user._id}>
                            My Profile </NavLink> 
                        <div className="dropdown-divider"></div>
                        <button className="dropdown-item btn btn-outline-success my-2 my-sm-0"  onClick={this.handleLogout}>Logout</button>

                    </div>
                    </div>
                     </div>


                                   
                    
            
                </nav>
             </div>

              
        )
    }
}


export default withRouter(Navigation)