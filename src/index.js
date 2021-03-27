import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import reducer, { intialState } from './reducer';
import { StateProvider } from './StateProvider';

ReactDOM.render(
    <StateProvider intialState={intialState} reducer={reducer}>
        <App />
    </StateProvider>
    , document.getElementById('root')
);