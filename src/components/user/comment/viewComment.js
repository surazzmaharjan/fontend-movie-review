import React, { Component } from 'react'
import Axios from 'axios';
import Navigation from '../../navigation/navigation';
import GetComment from './getComment';
import {
    Table,Container
  } from 'reactstrap';


export default class ViewCommentList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            comments: [],
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            }
        }
    }

   
   
    componentDidMount() {
        Axios.get('http://localhost:4000/comment', this.state.config)
            .then((response) => {

                this.setState({
                    comments: response.data
                })
            });
    }

    render() {
        const alldata = this.state.comments.map((hlists,index)=>{
            return <GetComment numberlist={index + 1} movierating={hlists.rating} key={hlists._id} feedback={hlists.feedback} 
            title={hlists.movietitle} fullname={hlists.authorfirstname} 
            hide_id={hlists._id}/>

        })
        return (
            <div>
           <Navigation/>
            <br/>
            <Container className="main-container">
            <h2>View Comment List</h2>

             <Table striped className="container-margin" responsive>
            <thead>
                <tr>
                <th>#</th>
                <th>Commented By</th>
                <th>Movie Title</th>
                <th>Rating</th>
                <th>Feedback</th>
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
