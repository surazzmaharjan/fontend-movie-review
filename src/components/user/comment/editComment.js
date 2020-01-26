import React from 'react';
import axios from 'axios';
import {
    Container, Form, FormGroup, Label, Input, Button,Alert
} from 'reactstrap'
import Navigation from '../../navigation/userNavigation';

class EditComment extends React.Component{


    constructor(props) {
        super(props)

        this.state = {
            feedback:'',
            rating:'',
            selected:'',
            successmessage:"",
            errormessage:"",
            movieid:'',
            movietitle:'',
         
            currentuser:{
                    id:localStorage.getItem('userid'),
                    name:localStorage.getItem('userfirstname'),
            },
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
    
  
    updateComment = (e) =>{
        e.preventDefault();


        const data = {
            feedback: this.state.feedback,
            rating:this.state.rating
                  
            };


        axios.put("http://localhost:4000/comment/"+this.props.match.params.id, data,this.state.config)
        .then(response=> {
            // handle success
        //   console.log(response.status)
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


    componentDidMount(){
            axios.get("http://localhost:4000/comment/"+this.props.match.params.id,this.state.config)
            .then(res => {
                this.setState({
                  feedback: res.data.feedback,
                  rating: res.data.rating,
                  movieid:res.data.movieid,
                  movietitle:res.data.movietitle,
                
                 
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
                <h2>Update Comment</h2>
                <Form>
                <div className="alert-section-message"> 
                    <Alert color="success"  style={{ display: this.state.successmessage!=="" ? "" : "none" }}>
                    {this.state.successmessage}
                    </Alert>
                    <Alert color="danger" style={{ display: this.state.errormessage!=="" ? "" : "none" }}>
                    {this.state.errormessage}
                    </Alert>
                </div>
                    <p><b>Movie Title:</b> {this.state.movietitle}</p>

                    <FormGroup>
                        <Label for='rating'>Rating</Label>
                        <Input type="select" name="rating" id="rating" value={this.state.value} onChange={this.handleChange}  >
                        <option value={this.state.rating} selected disabled>{this.state.rating}</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option  value="4">4</option>
                        <option value="5">5</option>
                        </Input>
                       
                    </FormGroup>
                    <FormGroup>
                        <Label for='feedback'>Feedback</Label>
                        <Input type='textarea' name='feedback' id='feedback'
                            value={this.state.feedback} onChange={this.handleChange} />
                    </FormGroup>
                   
                   

                    <Button color='primary' onClick={this.updateComment}>Update Comment</Button>
                </Form>
            
            </Container>
            </div>
               


        );
    }
}

export default EditComment;