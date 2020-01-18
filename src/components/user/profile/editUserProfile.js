import React from 'react';
import axios from 'axios';
import {
    Container, Form, FormGroup, Label, Input, Button,Alert
} from 'reactstrap'
import Navigation from '../../navigation/userNavigation';


class editUserProfile extends React.Component{


    constructor(){
        super();

        this.state={
            firstname:"",
            lastname:"",
            address:"",
            email:"",
            password:"",
            successmessage:"",
            errormessage:"",
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            }
        }
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

    
    firstnameHandle = (event) => {
        this.setState({
            firstname : event.target.value
        })
    }

    updateUser = (e) =>{
        e.preventDefault();


        const data = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            address: this.state.address,
                  
            };
        axios.put("http://localhost:4000/user/update/"+this.props.match.params.id, data,this.state.config)
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
                errormessage: "Something went wrong"
           })
           
            })
        }


    componentDidMount(){
            axios.get("http://localhost:4000/user/single/"+this.props.match.params.id,this.state.config)
            .then(res => {
                this.setState({
                    firstname: res.data.firstname,
                    lastname: res.data.lastname,
                    address: res.data.address,
                });
              })
              .catch((error) => {
                console.log(error);
              })
            }

   

      
    

  render(){

           return (
            <div>
            <Navigation/>

            <Container className="container-margin main-container">
                <h2>Update Your Profile</h2>
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
                        <Label for='address'>Address</Label>
                        <Input type='text' name='address' id='address'
                            value={this.state.address} onChange={this.addressHandle} />
                    </FormGroup>
                   
                    <Button color='primary' onClick={this.updateUser}>Update</Button>

                </Form>
            </Container>   
            </div>
        );
    }
}

export default editUserProfile;