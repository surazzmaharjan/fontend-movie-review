import React, { Component } from 'react'
import Axios from 'axios';
import Navigation from '../../navigation/userNavigation';
import GetWishList from './getWishList';
import {
    Table,Container
  } from 'reactstrap';


export default class ViewWishList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            favouritelists: [],
            currentuser:{
                id:localStorage.getItem('userid'),
                name:localStorage.getItem('userfirstname')
            },
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            }
        }
    }

   
   
    componentDidMount() {
        Axios.get('http://localhost:4000/favourite', this.state.config)
            .then((response) => {

                this.setState({
                    favouritelists: response.data
                })
            });
    }

    render() {
        const alldata = this.state.favouritelists.map((hlists,index)=>{

            if(this.state.currentuser.id===hlists.currentid){
            return <GetWishList numberlist={index + 1} key={hlists._id} movieid={hlists.movieid}
            title={hlists.moviename} fullname={hlists.currentuser}  year={hlists.movieyear}
            genre={hlists.moviegenre} 
            hide_id={hlists._id}/>
            }
        })
        return (
            <div>
           <Navigation/>
            <br/>
            <Container className="main-container">
            <h2>View Favourite List</h2>

             <Table striped className="container-margin" responsive>
            <thead>
                <tr>
                <th>Movie Title</th>
                <th>Movie Genre</th>
                <th>Release Year</th>
                <th>Comment Action</th>
                <th>Delete Action</th>
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
