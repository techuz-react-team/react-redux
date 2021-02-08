import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import * as Actions from '../store/posts/postAction'

import history from '../history'
const axios = require('axios');


const EditPost = (props) => {
    const {id} = props.match.params;
    const loading = useSelector(state => state.loading)
    const userId = useSelector(state => state.userId)
    const POST = useSelector(state => state.postData)
    const dispatch = useDispatch()
    let currenPost = POST.filter(item => item.id == id)
    currenPost = currenPost[0];
    //console.log('currenPost',currenPost)
    
    const [title, setTitle] = useState(currenPost.title)
    const [content, setContent] = useState(currenPost.body)

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    const onTitleChanged = (e) => (
        setTitle(e.target.value)
    )

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
        axios({
            method: 'PUT',
            url: `https://jsonplaceholder.typicode.com/posts/${id}`,
            headers:  {
                'Content-type': 'application/json; charset=UTF-8',
              }, 
            data: JSON.stringify({
                id:id,
                title: title,
                body: content,
                userId: userId,
              })
          }).then( response => {
              alert('Post Updated successfully...')
              setTimeout( ()=> {history.replace('/')},200)
              });

    }

    return(
        <section>
        <h2>Edit Post</h2>
            {loading  ? <h1>Loading...</h1> : ''}
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

                <button type="button"  disabled={!canSave} onClick={onSavePostClicked}>Update Post</button>  
            </form>
        </section>
    )
}

export default EditPost;