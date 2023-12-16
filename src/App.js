import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Home from './PAGES/HOME/Home';
import Contact from './PAGES/HOME/Contact';
import './App.css';


const App = () => {
  return (
  
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/Home' element = {<Home/>} />
      <Route path='/Contact' element = {<Contact/>} />
      <Route path='*' element = {<div>
        <h1>404 NOT FOUND</h1>
      </div>} />
    </Routes>
    </BrowserRouter>
   
 
  )
}
export default App;