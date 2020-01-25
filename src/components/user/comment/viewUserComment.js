import React, { Component } from 'react'
import Axios from 'axios';
import Navigation from '../../navigation/userNavigation';
import GetComment from './getUserComment';
import {
    Table,Container
  } from 'reactstrap';


class ViewUserCommentList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            comments: [],
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
        Axios.get('http://localhost:4000/comment', this.state.config)
            .then((response) => {
console.log(response.data)
                this.setState({
                    comments: response.data
                })
            });
    }

    render() {
        const alldata = this.state.comments.map((hlists,index)=>{

            if(this.state.currentuser.id===hlists.authorid){
                
                return <GetComment numberlist={index + 1} userrating={hlists.rating} key={hlists._id} feedback={hlists.feedback} 
                title={hlists.movietitle} fullname={hlists.authorfirstname} 
                hide_id={hlists._id}/>
            }
            
        })
        return (
            <div>
           <Navigation/>
            <Container className="main-container">
                <h2>View Comment List</h2>
             <Table striped className="container-margin" responsive>
            <thead>
                <tr>
                
                <th>Movie Title</th>
                <th>Rating</th>
                <th>Feedback</th>
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
export default ViewUserCommentList