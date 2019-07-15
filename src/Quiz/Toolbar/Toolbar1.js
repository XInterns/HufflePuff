import React from 'react';
import './Toolbar1.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons';
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons';

const toolbar1 = () =>
{
   return (
   <header className="toolbar">
      <nav className="toolbar-navigation">

      
      {/* <div className="logo"><a href="/">TheLogo</a></div> */}
      <div className="Appname">XPL</div>
      <div className="spacer" />
      <div className="navigation-items">
        <FontAwesomeIcon icon={faUserCircle} className="dropbtn"/>
        

        <div className="dropdown-content">
            <div>MyProfile</div>
            <div>Balance</div>
            <div>Points System</div>
            
        </div>
        </div>
        
        {/* <button className="btn-signOut">Log Out</button> */}
        <div className="btn-logout">
        <FontAwesomeIcon icon={faSignOutAlt} />
        <div className="logout-txt">LogOut</div>
        </div>
    
      </nav>
     
    </header>
  );
}


export default toolbar1;
