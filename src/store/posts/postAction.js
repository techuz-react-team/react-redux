import * as ActionType from './postActionType';
import history from '../../history'

const axios = require('axios');

// export const getAllPost = () => {
//     return {
//         type:ActionType.GET_ALL_POST,
//         payload:posts
//     }    
// }

// export const getPostById = (post) => {
//     return {
//         type:ActionType.GET_POST_BY_ID,
//         payload:post
//     }    
// }

export const getAllPost = () => {
    return function(dispatch) {
        return  axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            dispatch({
                type: ActionType.GET_ALL_POST,
                payload:response.data
            });
        })
        .catch(error=>{
            console.log('error.message',error.message)
        })
    }
}


export const getPostById = (postID) => {
    return function(dispatch) {
       return axios.get(`https://jsonplaceholder.typicode.com/posts/${postID}`)
                .then(response=>{
                    dispatch({
                        type:ActionType.GET_POST_BY_ID,
                        payload:response.data
                    })
                })
                .catch(error=>{
                    console.log('error.message',error.message)
                })
    } 
}

export const createPost = (post) => {
    return function(dispatch) {
       return axios({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            headers:  {
                'Content-type': 'application/json; charset=UTF-8',
              }, 
            data: post
          }).then( response => {
              alert('Post Created successfully...')
              history.replace('/')
              });
    }
   
}

export const updatePost = (data,id) => {
    
    return function(dispatch) {
        return axios({
            method: 'PUT',
            url: `https://jsonplaceholder.typicode.com/posts/${id}`,
            headers:  {
                'Content-type': 'application/json; charset=UTF-8',
                }, 
            data: data
            }).then( response => {
                alert('Post Updated successfully...')
                history.replace('/')
                });
        }
   
}


export const deletePost = (id) => {
    return function(dispatch){
        return  axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response=> {
          alert('Post deleted successfully..')
          dispatch({
            type:ActionType.HIDE_LOADING  
          })
        }).catch(err => console.log(err.message))
    }
}


export const loading = () => {
    return {
        type:ActionType.LOADING
    }    
}
