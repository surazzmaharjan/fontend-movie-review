import React, { Component } from 'react'
import Axios from 'axios';
import Navigation from '../navigation/userNavigation';
import {  Row, Container } from 'reactstrap';
import GetUserMovieforComment from '../user/movie/getAllMoviesUserComment';


export default class Dashboard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            movies: [],
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            }
        }
    }

    
   
    componentDidMount() {
        Axios.get('http://localhost:4000/movie', this.state.config)
            .then((response) => {

                this.setState({
                    movies: response.data
                })
            });
    }


    render() {

        const allnewreleasedata = this.state.movies.map((hlists,index)=>{
            if(hlists.newrelease ===true){
            return <GetUserMovieforComment numberlist={index + 1} movienewrelease={hlists.newrelease} key={hlists._id} image={hlists.mimage}
             title={hlists.title} genre={hlists.genre} year={hlists.year} rating={hlists.rating} 
             description={hlists.description} review={hlists.review}
            hide_id={hlists._id}/>
            }})

        const alldata = this.state.movies.map((hlists,index)=>{
            if(hlists.newrelease ===false){
            return <GetUserMovieforComment numberlist={index + 1} movienewrelease={hlists.newrelease} key={hlists._id} image={hlists.mimage}
             title={hlists.title} genre={hlists.genre} year={hlists.year} rating={hlists.rating} 
             description={hlists.description} review={hlists.review}
            hide_id={hlists._id}/>
            }
        })

        
        return (
            <div><Navigation/>
            <Container className="main-container">
            <div className="new-movie-release">
             <h2>New Movie Release</h2>

            </div>
            <Row className="card-row-box">
            {allnewreleasedata}
            </Row>

            <div className="all-movie">
             <h2>All Movie List </h2>
            </div>
            <Row className="card-row-box">
            {alldata}
            </Row>

            </Container>
            </div>
                                       
               
              
        )
    }
}
