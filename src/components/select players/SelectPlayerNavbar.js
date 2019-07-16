import React from 'react'
import { NavLink ,Link} from 'react-router-dom';
import './SelectPlayerNavbar.css'

function SelectPlayerNavbar(props) {
    return (
      <>
        <nav className="nav-extended navbar">
        <div className="nav-wrapper">
          <Link to={props.link} className="heading">{props.heading}</Link>
          {/* <a href="#" data-target="mobile-demo" className="sidenav-trigger"></a> */}
        </div>

        { props.id==="select player" && 
        <div className="nav-content">
          <ul className="tabs tabs-transparent">
            <li className="tab"><NavLink activeStyle={{color:'orange'}} to="/batsmen" >{props.link1}</NavLink></li>
            <li className="tab"><NavLink activeStyle={{color:'orange'}} to="/bowler" >{props.link2}</NavLink></li>
            <li className="tab"><NavLink activeStyle={{color:'orange'}} to="/wicketkeeper" >{props.link3}</NavLink></li>
            <li className="tab"><NavLink activeStyle={{color:'orange'}} to="/allRounder" >{props.link4} </NavLink></li>
          </ul>
        </div>
        }
      </nav>
    
      {/* <div id="test1" className="col s12">Test 1</div>
      <div id="test2" className="col s12">Test 2</div>
      <div id="test3" className="col s12">Test 3</div>
      <div id="test4" className="col s12">Test 4</div> */}
      </>
    );
}

export default SelectPlayerNavbar;
