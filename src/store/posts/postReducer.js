import * as ActionType from './postActionType';

const initial_state = {
    postData:[],
    userId:1,
    loading:false,
    singlePost:[]
}

const postReducer = (state = initial_state, action) => {
    switch(action.type) {
        case ActionType.GET_ALL_POST : return {
            ...state,
            postData:action.payload,
            singlePost:[],
            loading:false
        }
        case ActionType.GET_POST_BY_ID : return {
            ...state,
            singlePost:action.payload,
            loading:false
        }
        case ActionType.CREATE_POST : return {
            ...state,
            postData: [...state.postData, action.payload],
            loading:false
        }
        case ActionType.LOADING : return {
            ...state,
            loading:true
        }
        case ActionType.HIDE_LOADING : return {
            ...state,
            loading:false
        }

        default: return state
    }
}

export default postReducer;