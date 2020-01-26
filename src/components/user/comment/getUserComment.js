import React from 'react'
import {NavLink} from 'react-router-dom';
import {
     Button
} from 'reactstrap'


class GetUserComment extends React.Component{


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



    



    render(){
       
              return(        
                
                <tr>
                <td>{this.props.title}</td>
                <td>{(this.props.userrating) === null ? "Not rated": this.props.userrating+"/5"}</td>
                <td>{this.props.feedback}</td>
                <td><NavLink to={"/single/comment/"+this.props.hide_id}><Button color="primary" >Edit</Button></NavLink></td>
                </tr>

        )

    }
}

export default GetUserComment

  
  
  