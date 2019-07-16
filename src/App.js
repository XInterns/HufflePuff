import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Mainpage from './components/homepage/Mainpage';
// import SignIn from './components/auth/SignIn';
import Navbar from './components/navbar/NavbarContainer';
import AddPlayers from './components/select players/AddPlayers';
import Contests from "./components/contests";
import pools from "./components/pools";
// import Quiz from './components/quiz/Quiz';
import QuizStart from './components/quiz/QuizStart';
import total from './components/quiz/quiztest';

class App extends React.Component {

  render() {
  return (
    <BrowserRouter>
    <div>
      <Navbar/>
        <Switch>
          <Route exact path='/' component={Mainpage} />
          {/* <Route path='/signup' component={SignUp }/> */}
          <Route path='/batsmen' component={AddPlayers} />
          <Route path="/CricketPool1" component={pools} />
          <Route path="/contests" exact component={Contests} />
          {/* <Route path="/quiz" exact component={Quiz} /> */}
          <Route path="/quizStart" exact component={QuizStart} />
          <Route path="/quiz" exact component={total} />
        </Switch>
    </div>
     </BrowserRouter>
  );
  }
}

export default App;
