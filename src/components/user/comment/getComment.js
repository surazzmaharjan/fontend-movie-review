import React from 'react'
import axios from 'axios'
import {
     Button
} from 'reactstrap'


class GetMovies extends React.Component{


    constructor(props) {
        super(props)

        this.state = {
            title:'',
            description:'',
            mimage:'',
            genre:'',
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

    deleteComment=()=>{
        axios.delete('http://localhost:4000/comment/' + this.props.hide_id,this.state.config)
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
                <th scope="row">{this.props.numberlist}</th>
                <td>{this.props.fullname}</td>
                <td>{this.props.title}</td>
                <td>{(this.props.movierating) === 0 ? "Not rated": this.props.movierating+"/5"}</td>

                <td>{this.props.feedback}</td>
                <td><Button color="danger" onClick={this.deleteComment}>Delete</Button></td>
                </tr>

        )

    }
}

export default GetMovies

  
  
  