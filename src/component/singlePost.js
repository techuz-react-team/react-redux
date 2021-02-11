import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as ACTIONS from "../actions/actions";
import { Card } from "antd";

const SinglePost = ({ match }) => {
  const { id } = match.params;
  const dispatch = useDispatch();
  const singlePost = useSelector((state) => state.singlePost);

  useEffect(() => {
    // dispatch(ACTIONS.SHOW_LOADER());
    dispatch(ACTIONS.getPostsById(id));
  }, []);

  return (
    <div className="site-card-border-less-wrapper">
      <Card title="Post Details" bordered={true} style={{ width: 500 }}>
        <p>
          <b>Id:</b> {singlePost.id}
        </p>
        <p>
          <b>Title:</b> {singlePost.title}
        </p>
        <p>
          <b>Content:</b> {singlePost.body}
        </p>
      </Card>
    </div>
  );
};

export default SinglePost;
