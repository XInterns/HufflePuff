
import React from 'react';
import './Instructions.css';

class Instructions extends React.Component {

  render() {
    return (

        <div >
             <ul class="collapsible">
              <li>
               <div class="collapsible-header"><i class="material-icons">keyboard_arrow_down</i>Introduction</div>
               <div class="collapsible-body"><span>You can pick your own team made up of real players for Cricket, Football, Table Tennis. Create your team within a maximum budget of 100 credits. Your team earns points based on your chosen players' performance in the real-life matches. It's time to showcase your skill and go for glory!
               <br/>
</span></div>
              </li>
              <li>
                <div class="collapsible-header"><i class="material-icons">keyboard_arrow_down</i>Create Your Team</div>
                <div class="collapsible-body"><span>
                <b>Step 1: Select a Contest</b><br/>
                Select any upcoming match from the list of ongoing and upcoming series<br/><br/>
                
                <b>Step 2: Select a Pool</b><br/>
                Select any pool of your choice.<br/><br/>

                <b>Step 3: Select players </b><br/>
                Select the desired players from the list to create your team. You can select 11 players at max.<br/><br/>

               <b> Step 4: Review</b><br/>
                Here revview all your selected options from the previous steps.<br/><br/>

                <b>You are all set!</b><br/>

                <b>Best of luck!</b>
                
                
                 </span></div>
              </li>
              
              <li>
                <div class="collapsible-header"><i class="material-icons"> keyboard_arrow_down</i>Points System</div>
                <div class="collapsible-body points"><span>
                  
                  <table>
                    <tr>
                    <th>Type of Points</th>
                    <th>Points</th>

                    </tr>
                    <tr>
                      <td>Being a part of the starting XI</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td>Every run scored</td>
                      <td>0.5</td>
                    </tr>
                    <tr>
                      <td>Every wicket taken (excluding run out)</td>
                      <td>10</td>
                    </tr>
                    <tr>
                      <td>Catch Taken</td>
                      <td>4</td>
                    </tr>
                    <tr>

                      <td>Caught & Bowled</td>
                      <td>14</td>
                    </tr>
                    <tr>
                      <td>Stumping/ Run Out (direct)</td>
                      <td>6</td>
                    </tr>

                    <tr>
                      <td>Run Out (Thrower/Catcher)</td>
                      <td>4/2</td>
                    </tr>
                    <tr>
                      <td>Dismissal for a Duck (only for batsmen, wicket-keepers and all-rounders)</td>
                      <td>-2</td>
                    </tr>

                  </table>
                  
                  </span></div>
                  </li>

              <li>
                <div class="collapsible-header"><i class="material-icons"> keyboard_arrow_down</i>FAQ</div>
                <div class="collapsible-body"><span>
                <b> How many  teams can I create with the same email Id?</b><br/>

                You can create only one account with one email id . Creation of multiple accounts by a single gamer is strictly prohibited and violates our FairPlay policy.
                <br/><br/>
                
                <b>I don't know much about sport – can I still play?</b><br/>
              
                 Of course, you can! You can always visit our ‘How to Play’ section to learn how to play on Dream11.</span>
                 </div>
              </li>
            </ul>
        </div>
    )
}
}

export default Instructions