import React,{useEffect} from 'react';
import {useDispatch} from 'react-redux'
import {getPosts} from './actions/posts'
import './App.css';
import {BrowserRouter as Router,Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import Home from './pages/home/Home';
import User from './pages/User/User';
import Admin from './pages/Admin/Admin';


function App() {
  const dispatch = useDispatch();
 
  useEffect(()=>{
    dispatch(getPosts())
  },[dispatch])

 
  return (
    <Router>
      <Navbar/>
        <Routes>
       
          <Route path='/' element={<Home/>}/>
          <Route path='/posts/' element={<User/>}/>
          <Route path='/admin' element={<Admin/>}/>
        </Routes>
    </Router>
  );
}

export default App;
