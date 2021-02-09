import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import * as Actions from '../store/posts/postAction'
import history from '../history'

const axios = require('axios');


const CreatePost = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const userId = useSelector(state => state.userId)
    const loading = useSelector(state => state.loading)
    const dispatch = useDispatch();
    const onTitleChanged = (e) => (
        setTitle(e.target.value)
    )

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    const onContentChanged = (e) => (
        setContent(e.target.value)
    )

    const onSavePostClicked = () => {
        if(title && content) {
            savePost();
        }
    }

    const savePost = () => {
        dispatch(Actions.loading())
        const data = JSON.stringify({
            title: title,
            body: content,
            userId: userId,
            })
        dispatch(Actions.createPost(data)) 
    }

    return(
        <section>
        <h2>New Post</h2>
            {loading ? <h1>Loading...</h1> : ''}
            <form>
            <label htmlFor="postTitle">Post Title:</label>
                <input 
                    type="text" 
                    id="postTitle" 
                    name="postTitle"
                    placeholder="Enter Title"
                    value={title}
                    onChange={onTitleChanged} 
                />
               <label htmlFor="postBody">Body:</label>
                <textarea
                    id="postBody"
                    name="postBody"
                    placeholder="Enter Body"
                    value={content}
                    onChange={onContentChanged}
                />

                <button type="button"  disabled={!canSave} onClick={onSavePostClicked}>Save Post</button>  
            </form>
        </section>
    )
}


export default CreatePost;