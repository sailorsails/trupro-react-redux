import {combineReducers} from 'redux';
import blockReducer from './blockReducer';
import transactionReducer from './transactionReducer';
import searchReducer from './searchReducer';
import resultReducer from './resultReducer';


const mainReducer = combineReducers({
    blockReducer,
    searchReducer,
    transactionReducer,
    resultReducer
    
});

export default mainReducer;