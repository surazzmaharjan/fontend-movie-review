import React from 'react';
import GethomePageMovieList from './getMovielist';
import {  Row, Container } from 'reactstrap';

import Axios from 'axios'
class homepageMovieList extends React.Component{

    constructor(props) {
        super(props)

        this.state = {
            movies: [],
           
        }
    }

    
   
    componentDidMount() {
        Axios.get('http://localhost:4000/homepage/viewallmovies')
            .then((response) => {

                this.setState({
                    movies: response.data.movielists
                })
            });
    }

    render(){

        const allmoviesdata = this.state.movies.map((hlists,index)=>{
            return <GethomePageMovieList numberlist={index + 1} key={hlists._id}
             title={hlists.title} genre={hlists.genre} year={hlists.year} rating={hlists.rating} image={hlists.mimage}
             description={hlists.description} review={hlists.review}
            hide_id={hlists._id}/>
        })
 
          return (
            <div className="moviecontainer main-container">
              
                    {allmoviesdata}
            </div>
          );
      }
  }
  
  export default homepageMovieList;
