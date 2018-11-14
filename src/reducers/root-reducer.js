import { combineReducers } from 'redux';

// calling the global reducer to create a link
import globalReducer from './global-reducer';
import { routerReducer } from 'react-router-redux'
import sampleChildReducer from '../routes/SampleChildComponent/modules/samplechildcomponent';

const rootReducers = combineReducers({
    // add reducer files references here
    global: globalReducer,
    router: routerReducer,
    samplechild: sampleChildReducer
});

export default rootReducers;