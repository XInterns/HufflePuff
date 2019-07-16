const initState = {

    players: [
      {
        playerid: "001",
        team: "India",
        pic:"http://cricketindia.info/wp-content/uploads/2016/07/virat-kohli.png",
        name: "Virat Kohli",
        type:"batsman"
       
        
      },
      {
        playerid: "002",
        team: "India",
        pic:"https://icc-corp-2013-live.s3.amazonaws.com/players/champions-trophy-2017/284/1124.png",
        name: "Jasprit Bumrah",
        type:"bowler"
        
      },
      {
        playerid: "003",
        team: "India",
        pic:"https://www.searchpng.com/wp-content/uploads/2019/03/MS-Dhoni-PNG-Image-715x715.png",
        name: "Dhoni",
        type:"allrounder"
        
      },
      {
        playerid: "004",
        team: "India",
        pic:"https://iplstatic.s3.amazonaws.com/players/284/2975.png",
        name: "Ishan Kishan",
        type:"wicketkeeper"
        
      },
      {
        playerid: "005",
        team: "India",
        pic:"https://www.cricket.com.au/-/media/Players/Men/International/India/ODIWC19/Ravindra-Jadeja-CWC19.ashx",
        name: "Ravindra Jadeja",
        type:"allrounder"
        
      },
      {
        playerid: "006",
        team: "India",
        pic:"https://icc-corp-2013-live.s3.amazonaws.com/players/champions-trophy-2017/284/102.png",
        name: "Dinesh Karthik",
        type:"wicketkeeper"
        
      },
      {
        playerid: "007",
        team: "Bangladesh",
        pic:"https://www.cricket.com.au/-/media/Players/Men/International/Bangladesh/Mustafizur-Rahman-CWC19.ashx",
        name: "Mustafizur Rahman",
        type:"bowler"
        
      }
    ]
  }

const playerReducer = (state = initState, action) => {
    return state;
}

export default playerReducer;
