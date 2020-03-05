import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css'

import { rootReducer } from './redux/reducers/index'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'

const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(logger, thunk))
)

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById('root'));

