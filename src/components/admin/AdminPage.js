import React from 'react'
import {NavLink} from 'react-router-dom';
import SideBar from './SideBar';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import UpdatePlayerScore from './UpdatePlayerScore';
import './admin.css';
 
function AdminPage() {
    return (
        <BrowserRouter>
            <div className="adminPage">
            <SideBar />

            <Switch>
                <Route path="/updateScore" component={UpdatePlayerScore} />
            </Switch>
        </div>
        </BrowserRouter>
        
    )
}

export default AdminPage
