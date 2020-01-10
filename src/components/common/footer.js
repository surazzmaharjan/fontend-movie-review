import React from 'react';
import '../css/footer.css'
class userFooter extends React.Component{

   


    render(){
 
          return (

            <footer className="footer-area footer--light">
         

            <div className="mini-footer">
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <div className="copyright-text">
                        <p>© 2020
                        <a href="/"> Movie Review</a>. All rights reserved. Created by
                        <a href="https://www.facebook.com/tsurajmaharjan" target="_blank"> Suraj Maharjan</a>
                      
                        </p>
                        <p>
                        <span className="social-icon">
                        <a  href="https://twitter.com/tsuraj123" target="_blank">
                                <img src={process.env.PUBLIC_URL + '/images/twitter.png'} alt="instagram"/> 
                        </a>
                            <a  href="https://www.instagram.com/tsurajmaharjan/"  target="_blank">
                                <img src={process.env.PUBLIC_URL + '/images/instagram.png'} alt="instagram"/> 
                        </a>
                        <a  href="https://www.facebook.com/tsurajmaharjan" target="_blank">
                                <img src={process.env.PUBLIC_URL + '/images/facebook.png'} alt="instagram"/> 
                        </a>

                        </span>
                        </p>
                    </div>

                    </div>
                </div>
                </div>
            </div>
            </footer>
           
            

          );
      }
  }
  
  export default userFooter;