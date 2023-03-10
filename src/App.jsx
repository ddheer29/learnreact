import React from 'react';
import './App.css';
import Allmovies from './components/Allmovies';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import UseStateDemo from './components/UseStateDemo';
import Error from './components/Error';
import RecordKeeper from './components/RecordKeeper';
import UseEffect from './components/UseEffect';


const App = () => {
    return(
        <div className='App'>
            <Router>
                <Header/>
                <Routes>
                    <Route exact path='/' element={<Home/>} />
                    <Route path='/movies' element={<Allmovies/>} />
                    <Route path='/usestatedemo' element={<UseStateDemo/>} />
                    <Route path='/recordkeeper' element={<RecordKeeper/>} />
                    <Route path='/useeffect' element={<UseEffect/>} />
                    <Route path='*' element={<Error/>} />
                </Routes>
            </Router>
        </div>
    )
}

export default App