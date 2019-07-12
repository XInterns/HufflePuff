import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ModalLauncher from './ModalLauncher';
import Modal from './sign_in/auth_modal/Modal';
import Dashboard from './Dashboard';


class App extends Component {
    render() {
        return (
          <BrowserRouter>  
            <div className="App">
                <ModalLauncher/>
                <Switch>
                    {/* <Route exact path='/' component={ModalLauncher} /> */}
                    <Route path='/dashboard' component={Dashboard} />
                    <Route path='/authmodal' component={Modal} />
                </Switch>

            </div>
            </BrowserRouter>  
        )
    }
}

export default App;
