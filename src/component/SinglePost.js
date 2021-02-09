import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import * as Actions from '../store/posts/postAction'
import { Link } from 'react-router-dom'

const SinglePost = (props) => {
    const {id} = props.match.params;
    
    const singlePost = useSelector(state => state.singlePost);
    const loading = useSelector(state => state.loading)
    const dispatch = useDispatch();


    useEffect( ()=> {
        dispatch(Actions.loading())
        dispatch(Actions.getPostById(id))
    },[Actions.getPostById])


    const randersinglePost =  (
        <div>
            <h3>{singlePost.title}</h3>
          <p className="post-content">{singlePost.body}</p>
            <Link to={`/`} className="button muted-button">
                Back to Post
            </Link>
        </div>
    )

    return(
        <div>
            <div>
            {loading ? <h1>Loading...</h1> : ''}
            {singlePost  ? randersinglePost : 'No data found'}
        </div>
        </div>
    )
}   

export default SinglePost;