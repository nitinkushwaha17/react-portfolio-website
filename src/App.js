import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutMe from './components/pages/AboutMe';
import Skills from './components/pages/Skills';
import Projects from './components/pages/Projects';
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/AboutMe' component={AboutMe} />
          <Route path='/skills' component={Skills} />
          <Route path='/projects' component={Projects} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;