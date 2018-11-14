import { combineReducers } from 'redux';

// calling the global reducer to create a link
import globalReducer from './global-reducer';

const rootReducers = combineReducers({
    // add reducer files references here
    global: globalReducer
});

export default rootReducers;