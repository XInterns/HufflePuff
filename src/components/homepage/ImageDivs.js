import React from 'react';
import {NavLink} from 'react-router-dom';
import './ImageDivs.css';
import { connect } from 'react-redux';
import SignInModalLauncher from '../sign_in/SignInModalLauncher';

const ImageDivs=(props) => {
    let classname= props.classname;
    const { isLogged } = props;
    return (
        <div className={classname}>
            <div className={(classname==="pimg1")? "ptextXPL text": "ptext text"}>
                <NavLink className="border" to= {isLogged ? "/contests" : "/batsmen"}>
                   {props.imageText}
                </NavLink> )
                
                {/* Make changes to open the Modal if user isn't logged in!! ) */}
                {/* or else provide this option when we click on CRICKET!! */}
                {/* or bring back to HOMEPAGE to signin */}
               
               {(classname==="pimg1") ? (
                    <div> </div>
                )
                :(<button className="button">
                    <span>Instructions</span>
                  </button> )}

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