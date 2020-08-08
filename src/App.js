import React from 'react';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import Portfolio from './components/Portfolio'

function App() {
  return (
  
    <Router   >
      <Link style={{margin:'60px'}} to='/'>Home</Link>
      <Link  style={{margin:'60px'}} to='/about'>About</Link>
      <Link  style={{margin:'60px'}} to='/contact'>Contact</Link>
      <Link style={{margin:'60px'}} to='/services'>Services</Link>
      <Link style={{margin:'60px'}} to='/portfolio'>Portfolio</Link>



      <Route path='/' exact component={Home}/>
      <Route path='/about' exact component={About}/>
      <Route path='/contact' exact component={Contact}/>
      <Route path='/services' exact component={Services}/>
      <Route path='/portfolio' exact component={Portfolio}/>

      
    </Router>
    
  );
}

export default App;
