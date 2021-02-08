import React, {Component} from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import PostLists from './component/PostLists'
import history from './history'

import Header from './component/Header'
import SinglePost from './component/SinglePost'
import CreatePost from './component/CreatePost'
import EditPost from './component/EditPost';

class Routes extends Component{
    render(){
        return(
            <Router history={history}>
            <Header />
            <Switch>
                <Route path='/' exact  component={PostLists}/>
                <Route path='/posts/:id'   component={SinglePost}/>
                <Route path='/create-post'   component={CreatePost}/>
                <Route path='/postedit/:id'   component={EditPost}/>
            </Switch>
            </Router>
        )
    }
}

export default Routes;