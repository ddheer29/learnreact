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
import Nestedrouting from './components/Nestedrouting';
import Nested1 from './components/Nested1';
import Nested2 from './components/Nested2';
import ContextAPI from './ContextAPI';
import ComponentA from './contexapi/ComponentA';
import ComponentB from './contexapi/ComponentB';
import ComponentC from './contexapi/ComponentC';


const App = () => {
    return(
        <div className='App'>
            <Router>
                <Header/>
                <Routes>
                    <Route path='/'>
                        <Route index element={<Home/>} />
                        <Route exact path='/home' element={<Home/>}/>
                    </Route>
                    <Route path='/movies' element={<Allmovies/>} />
                    <Route path='/usestatedemo' element={<UseStateDemo/>} />
                    <Route path='/recordkeeper' element={<RecordKeeper/>} />
                    <Route path='/useeffect' element={<UseEffect/>}/>
                    <Route path='/nestedrouting' element={<Nestedrouting/>}>
                        <Route  index element={<Nested1/>} />
                        <Route  path='nested1' element={<Nested1/>} />
                        <Route path='nested2' element={<Nested2/>} />
                    </Route>
                    <Route path='/contextapi' element={<ContextAPI/>}>
                        <Route index element={<ComponentA/>} />
                        <Route path='componenta' element={<ComponentA/>} />
                        <Route path='componentb' element={<ComponentB/>} />
                        <Route path='componentc' element={<ComponentC/>} />
                    </Route>
                    <Route path='*' element={<Error/>} />
                </Routes>
            </Router>
        </div>
    )
}

export default App