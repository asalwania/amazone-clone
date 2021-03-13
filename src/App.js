import React from 'react';
import './App.css';
import {BrowserRouter, Switch,Route} from 'react-router-dom'
import Navbar from './components/Navbar'


function App() {
    return (
        <>
        <BrowserRouter>
        <Navbar /> 
        <Switch>
            <Route excat path = '/'/>
        </Switch>
        </BrowserRouter>
           
        </>
    )
}

export default App;