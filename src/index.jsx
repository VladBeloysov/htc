import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app/app';
import { configureStore } from './store/store';
const store = configureStore();

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