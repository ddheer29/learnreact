import React from 'react';
import './App.css';
import Allmovies from './components/Allmovies';
import Header from './components/Header';

const App = () => {
    return(
        <div className='App'>
            <Header/>
            <Allmovies/>
        </div>
    )
}

export default App