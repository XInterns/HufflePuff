
import React from 'react';
import './bid.css';

class Bid extends React.Component {

  render() {
    return (

        <div >
             <ul class="collapsible">
              <li>
                <div class="collapsible-header"><i class="material-icons"> keyboard_arrow_down</i>Player Info</div>
                <div class="collapsible-body points"><span>
                  
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