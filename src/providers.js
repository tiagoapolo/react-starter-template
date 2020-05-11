import 'utils/numeralLocale';
import 'index.css';

// redux
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducers from 'redux/rootReducers';
import createSagaMiddleware from 'redux-saga'; // SAGA
import rootSagas from 'redux/rootSagas';

// Styles
import { ThemeProvider } from 'styled-components';
import { boticarioTheme } from 'themes';

// Router
import { BrowserRouter } from 'react-router-dom';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducers, {}, composeEnhancers(applyMiddleware(sagaMiddleware)));

// run the saga
sagaMiddleware.run(rootSagas);

export default class extends Component {
    render() {
        const {
            props: { children },
        } = this;

        return (
            <Provider store={store}>
                <ThemeProvider theme={boticarioTheme}>
                    <BrowserRouter>{children}</BrowserRouter>
                </ThemeProvider>
            </Provider>
        );
    }
}
