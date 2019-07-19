
import React from 'react';
import './bid.css';
import {connect} from 'react-redux';

class Bid extends React.Component {

  render() {

    const {userPlayers, userContests, userPools, userScore} = this.props;

    return (

        <div>
             {/* <ul className="collapsible"> */}
             {/* <ul>
              <li> */}
                {/* <div className="collapsible-header"><i className="material-icons"> keyboard_arrow_down</i>Player Info</div>
                <div className="collapsible-body points"><span>
                   */}
                  <table>
                    <tbody>
                    <tr>
                    <th>Players</th>
                    <th>Credits</th>
                    </tr>
                    { userPlayers && userPlayers.map(up => {
                        return(<tr>
                        <td>{up.name.toString()}</td>
                        <td>{up.credit.toString()}</td>
                        </tr>);
                    })
                  }
                    <tr>
                    <th>Contests</th>
                    <th>Date</th>
                    </tr>
                    { userContests && userContests.map(uc => {
                      return(<tr>
                      <td>{uc.team_1.toString()}vs{uc.team_2.toString()}</td>
                      <td>{uc.date}</td>
                      </tr>);
                      })
                    }
                    <tr>
                    <th>Pool Entered</th>
                    <th>Prize</th>
                    </tr>
                     { userPools && userPools.map(ups => {
                      return(<tr>
                      <td>{ups.entry.toString()}</td>
                      <td>{ups.prize.toString()}</td>
                      </tr>);
                      })
                    }
                    </tbody>
                  </table>
                  
                  {/* </span></div> */}
                  {/* </li>
            </ul> */}
            <div>
            </div>
        </div>
    )
}
}

const mapStateToProps = (state) => {
  return{
    userPlayers: state.player.user.players_selected,
    userContests: state.contest.user.contests_selected,
    userPools: state.contest.user.pools_selected,
    userScore: state.quizEnd.user.user_score,
  }
};

// const mapDispatchToProps = (dispatch) => {
//   return{
//     bidHandler: (props) => dispatch({type: 'BID_PLACED', payload: props})
//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Bid);
export default connect(mapStateToProps)(Bid);