import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'

function App() {
  return (
    <Router>
      <Link to='/'></Link>
      <Link to='/about'></Link>
      <Link to='/contact'></Link>


      <Route path='/' exact component={Home}/>
      <Route path='/about' exact component={About}/>
      <Route path='/contact' exact component={Contact}/>
    </Router>
  );
}

export default App;
