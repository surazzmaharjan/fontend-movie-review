import React from 'react';
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom';
import {
    Container, Form, FormGroup, Label, Input, Button, FormText ,Alert
} from 'reactstrap'
import LoginHeader from '../common/login_signup_header';


class userLogin extends React.Component{
     
       
  
    constructor(){
        super();
        this.state={
            email:"",
            password:"",
            isLoggedIn:false,
            isAdmin:false,
            successmessage:"",
            errormessage:""
           
        }
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

  
    userLogin = (e) =>{
        const data = {
        email: this.state.email,
        password: this.state.password       
        };
        e.preventDefault();
        axios.post("http://localhost:4000/login",data)
        .then((response) => {
            // console.log(response.data)


            localStorage.setItem('token', response.data.token)
            localStorage.setItem('userid', response.data.user.userId)
            localStorage.setItem('userfirstname', response.data.user.firstname)
            localStorage.setItem('userlastname', response.data.user.lastname)

            if(response.data.user.isAdmin===true){
                localStorage.setItem('mainadmin', 'Admin:')
            }
            if(response.data.user.isAdmin===true){
                localStorage.setItem('userrole', 'Admin')
            }else{
                localStorage.setItem('userrole', 'Normal User')

            }
            this.setState({ isLoggedIn: true,isAdmin:response.data.user.isAdmin })


        }).catch(error=>{
            // handle error
            if(error.response.status===400){
                this.setState({
                    errormessage: "Password does not match !"
               })
            }

            if(error.response.status===401){
                this.setState({
                    errormessage: "Email not found!"
               })
            }else{
                this.setState({
                    errormessage: "Wrong Credentials"
               })
            }

            }) 
             
        
             
        }


  render(){
        if (this.state.isLoggedIn === true && this.state.isAdmin===true) {
            return <Redirect to='/dashboard' />
        }

        if (this.state.isLoggedIn === true && this.state.isAdmin===false) {
            return <Redirect to='/user/dashboard' />
        }
        return (
    <div>
        <LoginHeader/>
    
        <Container className="login-form main-container">
                <h2>Sign In</h2>
                <Form>
                <div className="alert-section-message"> 
                    <Alert color="success"  style={{ display: this.state.successmessage!=="" ? "" : "none" }}>
                    {this.state.successmessage}
                    </Alert>
                    <Alert color="danger" style={{ display: this.state.errormessage!=="" ? "" : "none" }}>
                    {this.state.errormessage}
                    </Alert>
                </div>
                        <FormGroup >
                            <Label for='email'>Email</Label>
                            <Input type='text' name='email' id='email' value={this.state.email} onChange={this.emailHandle} />
                        </FormGroup>
                 
                   
                        <FormGroup>
                            <Label for='password'>Password</Label>
                            <Input type='password' name='password' id='password' value={this.state.password} onChange={this.passwordHandle} />
                        </FormGroup>
                    
                    <Button color="primary"  onClick={this.userLogin} type="submit">Sign In</Button>
                    <FormText>Don't have an account yet? <Link to='/register'> Sign Up here!</Link></FormText>
                </Form>
            </Container>
            </div>       

                
       
        );
    }
}

 export default userLogin;