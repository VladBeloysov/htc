import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app/app';
import { configureStore } from './store/store';
import './constants/constants.scss';
import './constants/fonts.scss';
import {createStore} from "redux";

const store = configureStore();
const saveState = (state) => {
    try {
        const serialisedState = JSON.stringify(state);
        window.localStorage.setItem('app_state', serialisedState);
    } catch (err) {
        // Log errors here, or ignore
    }
};
store.subscribe(() => {
    saveState(store.getState());
});


const Application = () => (
    <Provider store={ store }>
        <BrowserRouter basename='/'>
            <App />
        </BrowserRouter>
    </Provider>
);

const renderApplication = () => {
    ReactDOM.render(<Application/>, document.getElementById('react-app'));
}

renderApplication();