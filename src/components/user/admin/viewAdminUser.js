import React, { Component } from 'react'
import Axios from 'axios';
import Navigation from '../../navigation/navigation';
import GetAdmin from './getAllAdminUser';
import {
    Table,Container
  } from 'reactstrap';


export default class ViewListAdmin extends Component {

    constructor(props) {
        super(props)

        this.state = {
            admins: [],
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            }
        }
    }

   
   
    componentDidMount() {
        Axios.get('http://localhost:4000/viewalladmins', this.state.config)
            .then((response) => {

                this.setState({
                    admins: response.data.alluseradmin
                })
            });
    }

    render() {
        const alladmin = this.state.admins.map((hlists,index)=>{
            return <GetAdmin numberlist={index + 1} key={hlists._id} adminfirstname={hlists.firstname} adminlastname={hlists.lastname} adminemail={hlists.email}
            adminaddress={hlists.address}
            hide_id={hlists._id}/>

        })
        return (
            <div>
           <Navigation/>
            <br/>
            <Container className="main-container">
            <h2>View Admin List</h2>
           
             <Table striped className="container-margin" responsive>
            <thead>
                <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Delete Action</th>
                </tr>
            </thead>
            <tbody>
                    {alladmin}
            </tbody>
            </Table>
            </Container>
                                       
            </div>
              
        )
    }
}
