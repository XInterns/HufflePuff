import React from 'react';
import './Toolbar.css';


const toolbar = () =>
{
   return (
   <header className="toolbar">
      <nav className="toolbar-navigation">

      
      <div className="logo"><a href="/">TheLogo</a></div>
      <div className="Appname">XPL</div>
      <div className="spacer" />
      <div className="navigation-items">
        <button class="btn-signIn">SignIn</button>
      </div>
      </nav>
     
    </header>
  );
}


export default toolbar;

