import React, { Component } from 'react'
import Axios from 'axios';
import Navigation from '../../navigation/navigation';
import GetMovie from './getAllMovies';
import {
    Table, Container
  } from 'reactstrap';


export default class ViewListMovie extends Component {

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
            return <GetMovie numberlist={index + 1}
             key={hlists._id} title={hlists.title} imagename={hlists.mimage} 
             genre={hlists.genre} year={hlists.year} rating={hlists.rating} 
             hide_id={hlists._id}/>
        })
        return (
            <div>
           <Navigation/>
            <br/>
            <Container className="main-container">
            <h2>View Movie List</h2>

             <Table striped className="container-margin" responsive>
            <thead>
                <tr>
                <th>#</th>
                <th>Movie Image</th>
                <th>Movie Title</th>
                <th>Genre</th>
                <th>Year</th>
                <th>Rating</th>
                <th>Delete Action</th>
                <th>Edit Action</th>
                </tr>
            </thead>
            <tbody>
                    {alldata}
            </tbody>
            </Table>
            </Container>
            </div>                           
               
              
        )
    }
}
