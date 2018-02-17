import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import {reducer as formReducer} from 'redux-form';
import Reducer from './reducers/Reducer';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk);

const store = createStore(
    combineReducers({
    	Reducer: Reducer,
    	form: formReducer
    }),
    compose(middleware,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default store;