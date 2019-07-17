import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
 
const ContestCard = (props) => {

  
  const { index, pic, team_1, team_2, date, link} = props.game;

  function handleGame(){
    props.gameHandler();
    // console.log(e.target.value);
    // console.log(props)
  }
  
  return (
    <label htmlFor="join game button">
    <div id={`contestCard-${index}`} className="contestCard">
      <img src={pic} className="game-img" alt="unabletodisplay" />
      <div className="details">
        {/* <span className="index">{index + 1}</span> */}
        <p className="date">{date}</p>
        <p className="match">
          {team_1} vs {team_2}
        </p>
        <div className="game">
          <Link to={link}>
            <button id="join game button" className="joinGame" value={index} onClick={handleGame}>Enter Game</button>
          </Link>
        </div>
      </div>
    </div>
    </label>
  );
};

// ContestCard.propTypes = {
//   game: PropTypes.object.isRequired
// };

const mapStateToProps = (state) => {
  return{
    isContestChosen: state.contest.games
  }
}


const mapDispatchToProps = (dispatch) => {
  return{
    gameHandler: () => dispatch({type: 'GAME_CHOSEN'})
  }
}
//payload...

export default connect(mapStateToProps,mapDispatchToProps)(ContestCard);
// export default ContestCard;