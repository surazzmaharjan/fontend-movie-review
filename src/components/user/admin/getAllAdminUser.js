import React from 'react'
import axios from 'axios'
import {
     Button
} from 'reactstrap'


class GetAdmins extends React.Component{


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

    deleteAdmin=()=>{
        axios.delete('http://localhost:4000/deleteadmin/' + this.props.hide_id,this.state.config)
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
                <td>{this.props.adminfirstname}</td>
                <td>{this.props.adminlastname}</td>
                <td>{this.props.adminemail}</td>
                <td>{this.props.adminaddress}</td>
                <td><Button color="danger" onClick={this.deleteAdmin}>Delete</Button></td>
                </tr>

        )

    }
}

export default GetAdmins

  
  
  