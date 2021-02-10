import * as ACTION_TYPES from "../actions/actionTypes";

const InitialState = {
  allPosts: [],
  singlePost: [],
  userId: 1,
  loading: false,
};

const PostReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_ALL_POST:
      return {
        ...state,
        allPosts: action.payload,
        singlePost: [],
        // loading: false,
      };

    case ACTION_TYPES.ADD_POST:
      return {
        ...state,
        postData: action.payload,
        // loading: false,
      };

    case ACTION_TYPES.DELETE_POST:
      return {
        ...state,
        singlePost: null,
      };

    case ACTION_TYPES.GET_POST_BY_ID:
      return {
        ...state,
        singlePost: action.payload,
      };

    case ACTION_TYPES.UPDATE_POST:
      return {
        ...state,
        postData: action.payload,
        // loading: false,
      };

    case ACTION_TYPES.SHOW_LOADER:
      return {
        ...state,
        loading: true,
      };
    case ACTION_TYPES.HIDE_LOADER:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default PostReducer;
