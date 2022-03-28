import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import configureStore from '../src/redux/store/configureStore';
import { asyncDetailsAdmin } from './redux/actions/adminDetailsAction';

const store = configureStore() 
    store.subscribe(() => {
        console.log('store update', store.getState())
})

// if (localStorage.getItem('token')){
//     store.dispatch(asyncDetailsAdmin(localStorage.getItem('token')))
// }

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter> 
            <App />
        </BrowserRouter>
    </Provider>
   , document.getElementById('root'))