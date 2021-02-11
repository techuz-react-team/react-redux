import * as ACTION_TYPES from "./actionTypes";
import history from '../history';

const Axios = require("axios");

export const getPosts = () => {
  return (dispatch) => {
    return Axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        dispatch({
          type: ACTION_TYPES.GET_ALL_POST,
          payload: response.data
        });
      })
      .catch((error) => {
        console.log(error, error.code, error, "ERRORS");
      });
  };
};

export const savePost = (params) => {
  return (dispatch) => {
    dispatch({ type: ACTION_TYPES.ADD_POST });

    Axios.post("https://jsonplaceholder.typicode.com/posts", params)
      .then((response) => {
        if (response.status === 201 && response.data) {
          alert("Post Created successfully...");
          history.replace("/");
        }
      })
      .catch((error) => {
        console.log(error, error.code, error, "ERRORS");
      });
  };
};

export const deletePost = (postId) => {
  return (dispatch) => {
    return Axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => {
        alert('Post Deleted successfully...')
        dispatch({
          type: ACTION_TYPES.DELETE_POST,
          postId: postId,
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error, error.code, error, "ERRORS");
      });
  };
};

export const getPostsById = (postId) => {
  return (dispatch) => {
    return Axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((response) => {
      dispatch({
        type: ACTION_TYPES.GET_POST_BY_ID,
        payload: response.data
      });
    })
    .catch((error) => {
      console.log(error, error.code, error, "ERRORS");
    })
  }
};

export const updatePost = (params, postId) => {
  return (dispatch) => {
    dispatch({ type: ACTION_TYPES.UPDATE_POST });

    Axios.put(`https://jsonplaceholder.typicode.com/posts/${postId}`, params)
      .then((response) => {
        if (response.status === 200 && response.data) {
          alert("Post Edited successfully...");
          history.replace("/");
        }
      })
      .catch((error) => {
        console.log(error, error.code, error, "ERRORS");
      });
  };
};

export const SHOW_LOADER = () => {
  return {
    type: ACTION_TYPES.SHOW_LOADER,
  };
};

export const HIDE_LOADER = () => {
  return {
    type: ACTION_TYPES.HIDE_LOADER,
  };
};