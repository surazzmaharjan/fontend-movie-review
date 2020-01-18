import React from 'react';
import axios from 'axios';
import {
    Container, Form, FormGroup, Label, Input, Button,Alert,CustomInput
} from 'reactstrap'
import Navigation from '../../navigation/navigation';

class AddMovie extends React.Component{


    constructor(props) {
        super(props)

          
        this.state = {
            title:'',
            description:'',
            mimage:null,
            genre:'',
            year:'',
            rating:'',
            review:'',
            newrelease:false,
            successmessage:"",
            errormessage:"",
            currentuser:{
                    id:localStorage.getItem('userid'),
                    name:localStorage.getItem('userfirstname')
            },
            config: {
                headers: { 
                    'content-type': 'multipart/form-data',
                    'Authorization': `Bearer ${localStorage.getItem('token')}` 
                }
            }
        }


        
    }

   

    handleChange = (e) => {
        this.setState(
            { [e.target.name]: e.target.value }
        )
    }

    handleImageChange = (e) => {
        this.setState({
          mimage: e.target.files[0]
        })
      };
    
      toggleChangeRelease = () => {
        this.setState(prevState => ({
          newrelease: !prevState.newrelease,
        }));
      }
 
  
  
    addMovie = (e) =>{
        e.preventDefault();
       
      console.log(this.state.newrelease)

        let form_data = new FormData();
        if(this.state.mimage){
            form_data.append('mimage', this.state.mimage, this.state.mimage.name);
        }
        else{
            return(
                this.setState({
                    errormessage: "Please choose a image"
            })
           )
        }
        form_data.append('title', this.state.title);
        form_data.append('description', this.state.description);
        form_data.append('genre', this.state.genre);
        form_data.append('review', this.state.review);
        form_data.append('year', this.state.year);
        form_data.append('rating', this.state.rating);
        form_data.append('newrelease', this.state.newrelease);
        
       console.log(form_data)
    //    console.log(this.state.config)

        axios.post('http://localhost:4000/movie',form_data,this.state.config)
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
                <h2>Add Movie</h2>
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
                        <Label for='title'>Movie Title</Label>
                        <Input type='text' name='title' id='title'
                            value={this.state.title} onChange={this.handleChange} />
                    </FormGroup>
                    
                    <FormGroup>
                        <Label for='genre'>Genre</Label>
                        <Input type='text' name='genre' id='genre'
                            value={this.state.genre} onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <Label for='year'>Year</Label>
                        <Input type='text' name='year' id='year'
                            value={this.state.year} onChange={this.handleChange} />
                    </FormGroup>
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
                        <Label for='description'>Description</Label>
                        <Input type='textarea' name='description' id='description'
                            value={this.state.description} onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='review'>Review</Label>
                        <Input type='textarea' name='review' id='review'
                            value={this.state.review} onChange={this.handleChange} />
                    </FormGroup>

                    

                    <FormGroup>
                        <Label for="newrelease">New Release</Label>
                        <div>
                        <CustomInput type="checkbox" id="checked" label="True" checked={this.state.newrelease}  onChange={this.toggleChangeRelease} />
                        </div>
                    </FormGroup>

                    <FormGroup>
                        <Label for='mimage'>Image</Label>
                        <Input type='file' name='mimage' id='mimage'
                            onChange={this.handleImageChange} />
                    </FormGroup>

                    <Button color='primary' onClick={this.addMovie}>Add New Movie</Button>
                </Form>
            
            </Container>
            </div>
               


        );
    }
}

export default AddMovie;