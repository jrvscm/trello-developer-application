import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import Reducer from './reducers/Reducer';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk);

const store = createStore(
    combineReducers({
    	Reducer: Reducer
    }),
    compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default store;