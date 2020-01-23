import React, { Component } from 'react'
import Axios from 'axios';
import Navigation from '../navigation/navigation';
import { Row, Container } from 'reactstrap';
import GetMovieforComment from '../user/movie/getAllMoviesforComment';


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
        const alldata = this.state.movies.map((hlists,index)=>{
            return <GetMovieforComment numberlist={index + 1} key={hlists._id}
             title={hlists.title} genre={hlists.genre} year={hlists.year} rating={hlists.rating} image={hlists.mimage}
             description={hlists.description} review={hlists.review}
            hide_id={hlists._id}/>
        })
        return (
            <div><Navigation/>
            <Container className="main-container">
            <Row className="card-row-box">
            {alldata}
            </Row>
            </Container>
            </div>
                                       
               
              
        )
    }
}
