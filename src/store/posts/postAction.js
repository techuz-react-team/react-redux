import * as ActionType from './postActionType';

export const getAllPost = (posts) => {
    return {
        type:ActionType.GET_ALL_POST,
        payload:posts
    }    
}

export const getPostById = (post) => {
    return {
        type:ActionType.GET_POST_BY_ID,
        payload:post
    }    
}

export const createPost = (post) => {
    return {
        type:ActionType.CREATE_POST,
        payload:post
    }    
}



export const loading = () => {
    return {
        type:ActionType.LOADING
    }    
}