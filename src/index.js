import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './containers/AppContainer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import thunk from 'redux-thunk'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import routes from './routes';
import Authentication from './containers/AppContainer';
import CoreLayout from './layouts/CoreLayout'

const middleware = [thunk]
const store = createStore(
    reducers,
    applyMiddleware(...middleware)
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path='/' exact component={Authentication(CoreLayout)} />
            </Switch>
        </Router>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
