import React from 'react';
import {NavLink} from 'react-router-dom';
import './ImageDivs.css';

const ImageDivs=(props) => {
    let classname= props.classname;
    return (
        <div className={classname}>
            <div className={(classname==="pimg1")? "ptextXPL text": "ptext text"}>
               <NavLink className="border" to= "/contests">
                   {props.imageText}
               </NavLink>
               {(classname==="pimg1")
                ? (
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

export default ImageDivs;