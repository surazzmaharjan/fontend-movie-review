import React from 'react';
import axios from 'axios';
import {
    Container, Form, FormGroup, Label, Input, Button,Alert
} from 'reactstrap'

import Navigation from '../../navigation/navigation';

class registerAdminUser extends React.Component{

    constructor(){
        super();
        this.state={
            firstname:"",
            lastname:"",
            address:"",
            email:"",
            password:"",
            isAdmin:"",
            successmessage:"",
            errormessage:"",
            isRegistered: false,
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            }

        }
    }

    firstnameHandle = (event) => {
        this.setState({
            firstname : event.target.value
        })
    }


    lastnameHandle = (event) => {
        this.setState({
            lastname : event.target.value
        })
    }


    addressHandle = (event) => {
        this.setState({
            address : event.target.value
        })
    }


    emailHandle = (event) => {
        this.setState({
            email : event.target.value
        })
    }


    passwordHandle = (event) => {
        this.setState({
            password : event.target.value
        })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
  
    sendUser = () =>{

        const data = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        address: this.state.address,
        email: this.state.email,
        password: this.state.password,       
        };

       

        axios.post('http://localhost:4000/admin/register', data,this.state.config)
        .then(response=> {
            // handle success
        
               this.setState({
                successmessage: response.data.message
               })
               
               setTimeout(function() {
                window.location.reload()
               }, 3000);

          })
          .catch(error=>{
            // handle error
                this.setState({
                    errormessage: error.response.data.message
               })

            }) 
            

        }


  render(){
        
        return (
            <div>
            <Navigation/>

            <Container className="container-margin main-container">
                <h2>Add Admin User</h2>
                <Form>
                <div className="alert-section-message"> 
                    <Alert color="success"  style={{ display: this.state.successmessage!=="" ? "" : "none" }}>
                    {this.state.successmessage}
                    </Alert>
                    <Alert color="danger" style={{ display: this.state.errormessage!=="" ? "" : "none" }}>
                    {this.state.errormessage}
                    </Alert>
                </div>
                    <FormGroup>
                        <Label for='firstName'>First Name</Label>
                        <Input type='text' name='firstName' id='firstName'
                            value={this.state.firstname} onChange={this.firstnameHandle} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='lastName'>Last Name</Label>
                        <Input type='text' name='lastName' id='lastName'
                            value={this.state.lastname} onChange={this.lastnameHandle} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='email'>Email</Label>
                        <Input type='text' name='email' id='email'
                            value={this.state.email} onChange={this.emailHandle} />
                    </FormGroup>

                    <FormGroup>
                        <Label for='address'>Address</Label>
                        <Input type='text' name='address' id='address'
                            value={this.state.address} onChange={this.addressHandle} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='password'>Password</Label>
                        <Input type='password' name='password' id='password'
                            value={this.state.password} onChange={this.passwordHandle} />
                    </FormGroup>
                    <Button color='primary' onClick={this.sendUser}>Add</Button>
                </Form>
            
            </Container>

          
      </div>


        );
    }
}

export default registerAdminUser;