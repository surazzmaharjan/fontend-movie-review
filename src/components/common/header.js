import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../homepage/home';
import Login from '../user/login';
import Register from '../user/register';
import PrivateRoute from '../utils/PrivateRoute';
import Dashboard from '../dashboard/dashboard';
import CustomerDashboard from '../dashboard/CustomerDashboard';
import AddMovie from '../user/movie/addMovie';
import ViewList from '../user/movie/viewListMovie';
import EditMovie from '../user/movie/editMovie';
import EditProfile from '../user/profile/editProfile';
import EditUserProfile from '../user/profile/editUserProfile';
import AddAdmin from '../user/admin/addAdminUser';
import ViewAdminList from '../user/admin/viewAdminUser';
import ViewCommentList from '../user/comment/viewComment';
import AddComment from '../user/comment/addcomment';
import ViewUserCommentList from '../user/comment/viewUserComment';
import EditComment from '../user/comment/editComment';
import ViewWishList from '../user/wishlist/viewWishlist';
import NoPageFound from './pageNotFound';

class userHeader extends React.Component{


    render(){

          return (
            <div>


            <Switch>
                 <Route exact path="/" component={Home}/>

                  <Route path="/login" component={Login}/>
                  <Route path="/register"  component={Register}/>

                  <PrivateRoute path='/dashboard' component={Dashboard} />
                  <PrivateRoute path='/user/dashboard' component={CustomerDashboard} />

                  <PrivateRoute path='/addmovie' component={AddMovie} />
                  <PrivateRoute path='/viewallmovie' component={ViewList} />
                  <PrivateRoute path="/single/movie/:id" exact component={EditMovie}/>
                  <PrivateRoute path="/edit/profile/:id" exact component={EditUserProfile}/>
                  <PrivateRoute path="/admin/edit/profile/:id" exact component={EditProfile}/>
                  <PrivateRoute path="/addadmin"  component={AddAdmin}/>
                  <PrivateRoute path="/viewalladmin"  component={ViewAdminList}/>
                  <PrivateRoute path="/viewcomments"  component={ViewCommentList}/>
                  <PrivateRoute path="/viewallcomments"  component={ViewUserCommentList}/>
                  <PrivateRoute path="/add/comment/:id/:title"  component={AddComment}/>
                  <PrivateRoute path="/single/comment/:id"  component={EditComment}/>
                  <PrivateRoute path="/viewallwishlist"  component={ViewWishList}/>
                  <Route>
                    <NoPageFound />
                  </Route>

                  </Switch>
          </div>


          );
      }
  }

  export default userHeader;