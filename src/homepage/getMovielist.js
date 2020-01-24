import React from 'react'
import {  Col } from 'reactstrap';

class GetMovieListHomePage extends React.Component{


    constructor(props) {
        super(props)

        this.state = {
            title:'',
            description:'',
            mimage:'',
            genre:'',
            rating:'',
            review:''
          
        }
    }


    render(){
       
              return(        
      
                    <div>
                        <img src={`http://localhost:4000/movie/uploads/${this.props.image}`} title={this.props.title} alt={this.props.title}/>
                        <p class="movie-section"><span>{this.props.title}</span></p>
                    </div>
        
        )

    }
}

export default GetMovieListHomePage

  
  

