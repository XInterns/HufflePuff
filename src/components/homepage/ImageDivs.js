import React from 'react';
import {NavLink} from 'react-router-dom';
import './ImageDivs.css';
import { connect } from 'react-redux';

const ImageDivs=(props) => {
    let classname= props.classname;
    const { isLogged } = props;
    return (
        <div className={classname}>
            <div className={(classname==="pimg1")? "ptextXPL text": "ptext text"}>
                <NavLink className="border" to= {isLogged ? "/contests" : "/batsmen"}>
                  {props.imageText}
                </NavLink> 
               
               {(classname==="pimg1") ? (
                    <div> </div>
                )
                :(<NavLink to="/instructions">
                  <button className="button">
                    <span>INSTRUCTIONS</span>
                  </button>
                </NavLink> )}

            </div>
           
            <div>
                {(classname==="pimg1")
                ? (
                    <div className="linkContainer">
                    <div>
                    <a className="sportLink"href="#cricket">Cricket</a>
                    </div>
                    <div>
                    <a className="sportLink" href="#tabletennis">Table Tennis</a>
                    </div>
                    <div>
                    <a className="sportLink" href="#football">Football</a>
                    </div>
                    </div>)
                : (<div> </div>)
                }
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return{
      isLogged: state.auth.isLogged
    }
  };

export default connect(mapStateToProps)(ImageDivs);