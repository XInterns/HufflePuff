import React, { Component } from 'react';
// import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import ContainerChoosePool from './Container_ChoosePool';
import GamePool from './GamePool';

class App extends Component {

  render(){
    return(
      <Router>
        <Switch>
          <Route path="/CricketPools" component={ContainerChoosePool}/>
          <Route path="/" exact component={GamePool}/>
          
        </Switch>
      </Router>

    );
  }
  
  
}

export default App;
