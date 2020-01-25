import React from 'react';
import axios from 'axios';
import {
    Container, Form, FormGroup, Label, Input, Button,Alert
} from 'reactstrap'
import Navigation from '../../navigation/userNavigation';

class AddComment extends React.Component{


    constructor(props) {
        super(props)

        this.state = {
            feedback:'',
            rating:'',
            currentuser:{
                    id:localStorage.getItem('userid'),
                    name:localStorage.getItem('userfirstname'),
            },
            successmessage:"",
            errormessage:"",
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            }
        }
    }
    

    handleChange = (e) => {
        this.setState(
            { [e.target.name]: e.target.value }
        )
    }
    
  
  
    addComment = (e) =>{
        e.preventDefault();
       


        const data = {
        feedback: this.state.feedback,
        rating:this.state.rating,
        movieid :this.props.match.params.id,
        movietitle: this.props.match.params.title,
        authorid: this.state.currentuser.id,
        authorfirstname: this.state.currentuser.name
        
              
        };

       console.log(data)
       console.log(this.state.config)


        axios.post('http://localhost:4000/comment',data,this.state.config)
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
                <h2>Add Comment</h2>
                <Form>
                <div className="alert-section-message"> 
                    <Alert color="success"  style={{ display: this.state.successmessage!=="" ? "" : "none" }}>
                    {this.state.successmessage}
                    </Alert>
                    <Alert color="danger" style={{ display: this.state.errormessage!=="" ? "" : "none" }}>
                    {this.state.errormessage}
                    </Alert>
                </div>
                    <h2><b>Movie Title:</b> {this.props.match.params.title}</h2>

                    <FormGroup>
                        <Label for='rating'>Rating</Label>
                        <Input type="select" name="rating" id="rating" value={this.state.value} onChange={this.handleChange}  >
                        <option value="" selected default disabled>Choose One</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        </Input>
                       
                    </FormGroup>
                    <FormGroup>
                        <Label for='feedback'>Give Feedback:</Label>
                        <Input type='textarea' name='feedback' id='feedback'
                            value={this.state.feedback} onChange={this.handleChange} />
                    </FormGroup>
                   
                   

                    <Button color='primary' onClick={this.addComment}>Add Comment</Button>
                </Form>
            
            </Container>
            </div>
               


        );
    }
}

export default AddComment;