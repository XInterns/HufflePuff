import React from 'react'
import {connect} from 'react-redux';
import './admin.css';

class UpdatePlayerScore extends React.Component {
    constructor() {
        super();
        this.state= {
            playerName: '',
            playerScore: '',
        }
    }

    handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value
        })
        console.log(this.state);
      }

    handleSubmit = (e) => {
        const {playerName, playerScore} = this.state;
        e.preventDefault();
        console.log(this.state);
        this.props.updateScore(playerScore, playerName);
        console.log(this.props.playerName, this.props.playerScore);
      }
      render() {
          console.log(this.props.playerName, this.props.playerScore);
        return (
            <div class="updateScoreContainer">
        <form className="white" onSubmit= {this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Update Player Score</h5>
          <div className="input-field">
            <label htmlFor="playerName">Player Name</label>
            <input type="text" id='playerName' onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="playerScore">Player Score</label>
            <input type="text" id='playerScore' onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0 updatebtn" >Update</button>
          </div>
        </form>
      </div>
    )
      }
    
}
const mapStateToProps =(state)=> {
    return{
        playerName: state.admin.playerName,
        playerScore: state.admin.playerScore,
    }
}
const mapDispatchToProps=(dispatch) => {
    return{
        updateScore: (playerScore,playerName) => dispatch({type: 'UPDATE_SCORE', payload: {playerScore,playerName}})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UpdatePlayerScore);
