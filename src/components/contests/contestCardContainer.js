import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import "./contests.css";
import {connect} from 'react-redux';
import ContestCard from "./contestCard";

class ContestCardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: this.props.chooseContest[0]
    };
  }

  nextgame = () => {
    const newIndex = this.state.game.index + 1;
    // console.log('nextgame:'+newIndex);
    this.setState({
      game: this.props.chooseContest[newIndex]
    });
  };

  prevgame = () => {
    const newIndex = this.state.game.index - 1;
    this.setState({
      game: this.props.chooseContest[newIndex]
    });
  };

  render() {
    const { game } = this.state;
    const {chooseContest} = this.props;
    // console.log('game:'+ game.index);
    // console.log('choosecontest:'+ chooseContest);    
    return (
      <div className="game-container">
        <div className="page">
          <div className="games">
            <button
              className="prev"
              onClick={() => this.prevgame()}
              disabled={game.index === 0}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <ContestCard game={game} />

            <button
              className="next"
              onClick={() => this.nextgame()}
              disabled={game.index === chooseContest.length - 1}
            >
              {/* {console.log("length:"+chooseContest.length)} */}
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    chooseContest: state.contest.games
  }
};

export default connect(mapStateToProps)(ContestCardContainer);



