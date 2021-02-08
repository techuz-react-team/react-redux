import {createStore} from 'redux';
import postReducer from './posts/postReducer';

const store = createStore(postReducer);
export default store;
