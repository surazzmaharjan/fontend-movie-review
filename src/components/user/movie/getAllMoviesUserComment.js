import React from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom';

import { Card, Row,CardBody,Button, CardTitle, CardText, Col,Alert, Container } from 'reactstrap';


class GetUserMoviesforComment extends React.Component{


    constructor(props) {
        super(props)

        this.state = {
            title:'',
            description:'',
            mimage:'',
            genre:'',
            rating:'',
            review:'',
            successmessage:"",
            errormessage:"",
            currentuser:{
                    id:localStorage.getItem('userid'),
                    name:localStorage.getItem('userfirstname')
            },
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            }
        }
    }

    deleteMovie=()=>{
        axios.delete('http://localhost:4000/deletemovie/' + this.props.hide_id,this.state.config)
        .then(response=> {
           alert(response.data.message);
               
          })
          .catch(error=>{
            // handle error
            alert(error.response.data.message);


           
            })
    }

    addWishList=()=>{
        const data = {
            movieid : this.props.hide_id,
            moviename: this.props.title,
            movieyear: this.props.year,
            moviegenre: this.props.genre,
            currentid: this.state.currentuser.id,
            currentuser: this.state.currentuser.name,
                        
            };

            console.log(data);

            axios.post('http://localhost:4000/favourite',data,this.state.config)
            .then(response=> {
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
              return(    
             
                
                <Col sm="6" className="single-card-box">
                <Card body className="card-movie">
                <CardBody >
                <img width="100%" src={`http://localhost:4000/movie/uploads/${this.props.image}`} alt={this.props.title} />
                </CardBody>
              
                <CardTitle><b>Movie Title:</b> {this.props.title}</CardTitle>
                <CardText><b>Movie Genre:</b> {this.props.genre}</CardText>
                <CardText><b>Release Year:</b> {this.props.year}</CardText>
                <CardText><b>Rating:</b> {(this.props.rating) === null ? "Not rated": this.props.rating+"/5"}</CardText>
                <CardText><b>Description: </b><br/>{this.props.description}</CardText>
                <CardText><b>Review:</b> <br/>{this.props.review}</CardText>
                <br/>
                <div className="button-comment">
                
                <div className="comment-button">
                    <span>
                        <NavLink to={"/add/comment/"+this.props.hide_id+"/"+this.props.title}><Button>Add Comment</Button></NavLink>
                        </span>
                       
                </div>
                <div className="favourite-button">
                    
                        <span>
                        <Button color="primary" onClick={this.addWishList}>+ Add To Favourite</Button>
                        </span>
                </div>
                </div>
                <div > 
                <Alert color="success" className="alert-section-message-card" style={{ display: this.state.successmessage!=="" ? "" : "none" }}>
                {this.state.successmessage}
                </Alert>
                <Alert color="danger"  className="alert-section-message-card" style={{ display: this.state.errormessage!=="" ? "" : "none" }}>
                {this.state.errormessage}
                </Alert>
                </div>
                
                </Card>

             
                </Col>    
        )

    }
}

export default GetUserMoviesforComment

  
  
  