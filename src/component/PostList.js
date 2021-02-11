import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Tag, Space } from "antd";
import * as ACTIONS from "../actions/actions";
import { Link } from "react-router-dom";
import { Button } from "antd";
const { Column } = Table;

const PostList = () => {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.allPosts);
  

  useEffect(() => {
    // dispatch(ACTIONS.SHOW_LOADER());
    dispatch(ACTIONS.getPosts());
  }, []);

  const deletePost = (postId) => {
    dispatch(ACTIONS.deletePost(postId))
  };

  return (
    <Table dataSource={postList} rowKey={(posts) => posts.id}>
      <Column title="Id" dataIndex="id" key="id" />
      <Column title="Title" dataIndex="title" key="title" />
      <Column
        title="Action"
        key="action"
        render={(text, record) => (
          <Space size="middle">
            <Link to={`/posts/${text.id}`}>View</Link>
            <Link to={`/edit-post/${text.id}`}>Edit</Link>
            <Button type="link" onClick={() => deletePost(text.id)}>
              Delete
            </Button>
          </Space>
        )}
      />
    </Table>
  );
};

export default PostList;
