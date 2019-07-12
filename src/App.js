import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Mainpage from './components/homepage/Mainpage';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Navbar from './components/layout/Navbar';
import AddPlayers from './select players/AddPlayers';
import Contests from "./components/contests";
import pools from "./components/pools";

class App extends React.Component {

  render() {
  return (
    <BrowserRouter>
    <div>
      <Navbar />
        <Switch>
          <Route exact path='/' component={Mainpage} />
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp }/>
          <Route path='/batsmen' component={AddPlayers} />
          <Route path="/CricketPool1" component={pools} />
          <Route path="/contests" exact component={Contests} />
        </Switch>
    </div>
     </BrowserRouter>
  );
  }
}

export default App;
