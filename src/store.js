import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger'
import promise from 'redux-promise-middleware';
import mainReducer  from './reducers/mainReducer';

const middleware = applyMiddleware(logger, promise());

export default(initialState) => {
    return createStore(mainReducer, initialState, middleware);
}
