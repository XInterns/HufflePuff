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
import Instructions from './components/instructions/Instructions';
import Bid from './components/confirm bidding/bid'
import SignInModalLauncher from './components/sign_in/SignInModalLauncher';
import SignOutConfirmationModal from './components/navbar/SignOutConfirmationModal';

class App extends React.Component {

  render() {
  return (
    <BrowserRouter>
    <div>
      <Navbar/>
        <Switch>
          <Route exact path='/' component={Mainpage} />
          {/* <Route path='/signup' component={SignUp}/> */}
          <Route path='/batsmen' component={AddPlayers} />
          <Route path="/CricketPool1" component={pools} />
          <Route path="/contests" exact component={Contests} />
          {/* <Route path="/quiz" exact component={Quiz} /> */}
          <Route path="/quizStart" exact component={QuizStart} />
          <Route path="/quiz" exact component={total} />
          <Route path="/contests" component={Contests} />
          <Route path="/instructions" component={Instructions}/>
          <Route path="/bidplaced" component={Bid}/>
          <Route path='/SignOutConfirmation' component={SignOutConfirmationModal} />
          <Route path="/signin" component={SignInModalLauncher} />  
        </Switch>
    </div>
     </BrowserRouter>
  );
  }
}

export default App;
