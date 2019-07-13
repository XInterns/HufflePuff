import React from 'react'
import { NavLink ,Link} from 'react-router-dom';
import './SelectPlayerNavbar.css'

function SelectPlayerNavbar(props) {
    return (
      <>
        <nav class="nav-extended navbar">
        <div class="nav-wrapper">
          <Link to={props.link} class="heading">{props.heading}</Link>
          {/* <a href="#" data-target="mobile-demo" class="sidenav-trigger"></a> */}
        </div>

        { props.id==="select player" && 
        <div class="nav-content">
          <ul class="tabs tabs-transparent">
            <li class="tab"><NavLink activeStyle={{color:'orange'}} to="/batsmen" >{props.link1}</NavLink></li>
            <li class="tab"><NavLink activeStyle={{color:'orange'}} to="/wicketKeeper" >{props.link2}</NavLink></li>
            <li class="tab"><NavLink activeStyle={{color:'orange'}} to="/bowler" >{props.link3}</NavLink></li>
            <li class="tab"><NavLink activeStyle={{color:'orange'}} to="/allRounder" >{props.link4} </NavLink></li>
          </ul>
        </div>
        }
      </nav>
    
      {/* <div id="test1" class="col s12">Test 1</div>
      <div id="test2" class="col s12">Test 2</div>
      <div id="test3" class="col s12">Test 3</div>
      <div id="test4" class="col s12">Test 4</div> */}
      </>
    );
}

export default SelectPlayerNavbar;
