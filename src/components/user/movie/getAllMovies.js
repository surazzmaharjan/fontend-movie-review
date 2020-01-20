import React from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom';
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

    deleteMovie=(e)=>{
        e.preventDefault();
        axios.delete('http://localhost:4000/movie/' + this.props.hide_id,this.state.config)
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
                
                <td><img width="80" src={`http://localhost:4000/movie/uploads/${this.props.imagename}`} alt={this.props.title} /></td>
                <td>{this.props.title}</td>
                <td>{this.props.genre}</td>
                <td>{this.props.year}</td>
                <td>{(this.props.rating) === null ? "Not rated": this.props.rating+"/5"}</td>

                <td><Button color="danger" onClick={this.deleteMovie}>Delete</Button></td>
                <td><NavLink to={"/single/movie/"+this.props.hide_id}><Button color="primary" >Edit</Button></NavLink></td>
                </tr>

        )

    }
}

export default GetMovies

  
  
  