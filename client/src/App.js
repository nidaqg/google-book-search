import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar/index';
import Homepage from './pages/Homepage';
import Saved from './pages/Saved';


function App() {
  return (
    <div>
      <Router>
      <Navbar/>
      <Route exact path="/" component= {Homepage}/>
      <Route exact path="/search" component= {Homepage}/>
      <Route exact path="/saved" component= {Saved}/>
      </Router>
    </div>
  );
}

export default App;
