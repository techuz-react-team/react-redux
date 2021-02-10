import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddPost from "./component/AddPost";
import EditPost from "./component/EditPost";
import Navbar from "./component/Navbar";
import PostList from "./component/PostList";
import SinglePost from "./component/singlePost";
import history from "./history";

const Routes = () => {
  return (
    <div>
      <Router history={history}>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={PostList} />
            <Route exact path="/add-post" component={AddPost} />
            <Route exact path="/posts/:id" component={SinglePost} />
            <Route exact path="/edit-post/:id" component={EditPost} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default Routes;
