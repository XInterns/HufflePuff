import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";

import "./contests.css";

import contestData from "../../data/ContestData";


import ContestCard from "./contestCard";

class ContestCardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: contestData.games[0]
    };
  }

  nextgame = () => {
    const newIndex = this.state.game.index + 1;
    this.setState({
      game: contestData.games[newIndex]
    });
  };

  prevgame = () => {
    const newIndex = this.state.game.index - 1;
    this.setState({
      game: contestData.games[newIndex]
    });
  };

  render() {
    const { game } = this.state;
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
              disabled={game.index === contestData.games.length - 1}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ContestCardContainer;
