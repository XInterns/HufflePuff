
import React from 'react';
import './bid.css';

class Bid extends React.Component {

  render() {
    return (

        <div>
             <ul className="collapsible">
              <li>
                <div className="collapsible-header"><i className="material-icons"> keyboard_arrow_down</i>Player Info</div>
                <div className="collapsible-body points"><span>
                  
                  <table>
                    <tr>
                    <th>Players</th>
                    <th>Points</th>

                    </tr>
                    <tr>
                      <td>Being a part of the starting XI</td>
                      <td>2</td>
                    </tr>

                  </table>
                  
                  </span></div>
                  </li>
            </ul>
        </div>
    )
}
}

export default Bid;