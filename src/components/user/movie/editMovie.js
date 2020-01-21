import React from 'react';
import axios from 'axios';
import {
    Container, Form, FormGroup, Label, Input, Button,Alert,CustomInput
} from 'reactstrap'
import Navigation from '../../navigation/navigation';


class editMovie extends React.Component{



    constructor(){
        super();

        // this.nameHandle = this.nameHandle.bind(this);
        // this.descriptionHandle = this.descriptionHandle.bind(this);
        // this.updateStudent = this.updateStudent.bind(this);


        this.state={
            title:"",
            description:"",
            genre:"",
            year:"",
            review:"",
            rating:"",
            newrelease:'',
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
    

    toggleChangeRelease = () => {
        this.setState(prevState => ({
          newrelease: !prevState.newrelease,
        }));
      }
 

    updateMovie = (e) =>{
        e.preventDefault();


        const data = {
            title: this.state.title,
            description: this.state.description,
            genre: this.state.genre,
            year: this.state.year,
            rating: this.state.rating,
            review: this.state.review,
            newrelease:this.state.newrelease
                  
            };


        // alert(this.state.title)
        // alert(this.state.description)
        axios.put("http://localhost:4000/movie/"+this.props.match.params.id, data,this.state.config)
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


    componentDidMount(){
            axios.get("http://localhost:4000/movie/"+this.props.match.params.id,this.state.config)
            .then(res => {
                this.setState({
                  title: res.data.singlemovie.title,
                  description: res.data.singlemovie.description,
                  genre: res.data.singlemovie.genre,
                  year: res.data.singlemovie.year,
                  rating: res.data.singlemovie.rating,
                  review: res.data.singlemovie.review,
                  newrelease: res.data.singlemovie.newrelease,
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
                <h2>Update Movie</h2>
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
                        <Label for='title'>Movie Title</Label>
                        <Input type='text' name='title' id='title'
                            value={this.state.title} onChange={this.handleChange} disabled/>
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
                        <option value={this.state.rating} selected disabled>{this.state.rating}</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option  value="4">4</option>
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

                    <Button color='primary' onClick={this.updateMovie}>Update</Button>
                </Form>
            
            </Container>   
            </div>
        );
    }
}

export default editMovie;