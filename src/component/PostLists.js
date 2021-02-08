import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import * as Actions from '../store/posts/postAction'
import { Link } from 'react-router-dom'
const axios = require('axios');

const PostLists = () => {
    const  posts = useSelector(state => state.postData);
    const loading = useSelector(state => state.loading)
    const dispatch = useDispatch();
    
    useEffect( ()=> {
      setTimeout(()=>{getPosts()},200)
    },[])

    const getPosts = () => {
        dispatch(Actions.loading())
        axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(response=>{
                const posts =response.data;
                //console.log('Posts',posts)
                dispatch(Actions.getAllPost(posts))
                })
                .catch(error=>{
                    console.log('error.message',error.message)
                })
    }

    const renderedPosts = posts.map(post => (
        <article className="post-excerpt" key={post.id}>
          <h3>{post.title}</h3>
          <p className="post-content">{post.body.substring(0, 100)}</p>
         <Link style={{margin:'5px'}} to={`/posts/${post.id}`} className="button muted-button">
            View Post
          </Link>
          <Link  style={{margin:'5px'}} to={`/postedit/${post.id}`} className="btn btn-info">
            Edit Post
          </Link>
        </article>
      ))

    return(
        <div>
            {loading && !posts ? <h1>Loading...</h1> : ''}
            {posts  ? renderedPosts : 'No data found'}
        </div>
    )
}
export default PostLists;