import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Mainpage from './components/homepage/Mainpage';
// import SignIn from './components/auth/SignIn';
import Navbar from './components/navbar/NavbarContainer';
import AddPlayers from './components/select players/AddPlayers';
import Contests from "./components/contests";
import pools from "./components/pools";
import Instructions from './components/instructions/Instructions';
import SignInModalLauncher from './components/sign_in/SignInModalLauncher';
// import Quiz from './components/quiz/Quiz';
import QuizStart from './components/quiz/QuizStart';
import total from './components/quiz/quiztest';
import AdminPage from './components/admin/AdminPage';

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
          <Route path="/contests" component={Contests} />
          <Route path="/instructions" component={Instructions}/>
          <Route path="/signin" component={SignInModalLauncher} />  
          <Route path="/contests" exact component={Contests} />
          {/* <Route path="/quiz" exact component={Quiz} /> */}
          <Route path="/quizStart" exact component={QuizStart} />
          <Route path="/quiz" exact component={total} />
          <Route path="/admin" exact component={AdminPage} />
        </Switch>
    </div>
     </BrowserRouter>
  );
  }
}

export default App;
