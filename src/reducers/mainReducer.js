import {combineReducers} from 'redux';
import blockReducer from './blockReducer';
import transactionReducer from './transactionReducer';
import searchReducer from './searchReducer';


const mainReducer = combineReducers({
    blockReducer,
    searchReducer,
    transactionReducer
    
});

export default mainReducer;