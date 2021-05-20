import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar/index';
import Homepage from './pages/Homepage';
import Saved from './pages/Saved';
import Header from './images/header.png';


function App() {
  return (
    <div>
      <Router>
      <Navbar/>
      <img className="img-fluid" src={Header} alt="header"/>

      <Switch>
      <Route exact path="/" component= {Homepage}/>
      <Route exact path="/search" component= {Homepage}/>
      <Route exact path="/saved" component= {Saved}/>
      </Switch>
      
      </Router>
    </div>
  );
}

export default App;
