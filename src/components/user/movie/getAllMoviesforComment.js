import React from 'react'
import axios from 'axios'

import { Card, CardBody, CardTitle, CardText, Col } from 'reactstrap';


class GetMoviesforComment extends React.Component{


    constructor(props) {
        super(props)

        this.state = {
            title:'',
            description:'',
            mimage:'',
            genre:'',
            year:'',
            rating:'',
            review:'',
            currentuser:{
                    id:localStorage.getItem('userid'),
                    name:localStorage.getItem('userfirstname')
            },
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            }
        }
    }


   



    render(){
              return(        
                
                <Col sm="6" className="single-card-box">
                <Card body className="card-movie">
                <CardBody>
                
                <img width="100%" src={`http://localhost:4000/movie/uploads/${this.props.image}`} alt={this.props.title} />
                </CardBody>
                <CardTitle><b>Movie Title:</b> {this.props.title}</CardTitle>
                <CardText><b>Movie Genre:</b> {this.props.genre}</CardText>
                <CardText><b>Release Year:</b> {this.props.year}</CardText>
                <CardText><b>Rating:</b> {(this.props.rating) === null ? "Not rated": this.props.rating+"/5"}</CardText>
                <CardText><b>Description: </b><br/>{this.props.description}</CardText>
                <CardText><b>Review:</b> <br/>{this.props.review}</CardText>
               
                </Card>
                </Col>
           
             

        )

    }
}

export default GetMoviesforComment

  
  
  