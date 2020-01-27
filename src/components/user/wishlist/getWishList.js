import React from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom';
import {
     Button
} from 'reactstrap'


class GetWishList extends React.Component{


    constructor(props) {
        super(props)

        this.state = {
            
            currentuser:{
                    id:localStorage.getItem('userid'),
                    name:localStorage.getItem('userfirstname')
            },
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            }
        }
    }

    deleteWishList=()=>{
        axios.delete('http://localhost:4000/favourite/' + this.props.hide_id,this.state.config)
        .then(response=> {
           alert(response.data.message);
           window.location.reload();
               
          })
          .catch(error=>{
            // handle error
            alert(error.response.data.message);


           
            })
    }




    render(){
       
              return(        
                
                <tr>
                <td>{this.props.title}</td>
                <td>{this.props.genre}</td>
                <td>{this.props.year}</td>
                <td> <NavLink to={"/add/comment/"+this.props.movieid+"/"+this.props.title}>
                    <Button>Add Comment</Button></NavLink></td>

                <td><Button color="danger" onClick={this.deleteWishList}>Delete</Button></td>
                </tr>

        )

    }
}

export default GetWishList

  
  
  