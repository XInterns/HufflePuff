const initState = {

    players: [
      {
        playerid: "001",
        team: "India",
        pic:"https://www.jagranjosh.com/imported/images/E/Articles/virat_kohli.jpg",
        name: "Virat Kohli",
        type:"batsman"
       
        
      },
      {
        playerid: "002",
        team: "India",
        pic:"https://www.jagranjosh.com/imported/images/E/Articles/virat_kohli.jpg",
        name: "Sachin",
        type:"bowler"
        
      },
      {
        playerid: "003",
        team: "India",
        pic:"https://www.jagranjosh.com/imported/images/E/Articles/virat_kohli.jpg",
        name: "Dhoni",
        type:"allrounder"
        
      },
      {
        playerid: "004",
        team: "India",
        pic:"https://www.jagranjosh.com/imported/images/E/Articles/virat_kohli.jpg",
        name: "Rahul",
        type:"wicketkeeper"
        
      },
      {
        playerid: "005",
        team: "India",
        pic:"https://www.jagranjosh.com/imported/images/E/Articles/virat_kohli.jpg",
        name: "Anushka",
        type:"allrounder"
        
      }
    ]
  }

const playerReducer = (state = initState, action) => {
    return state;
}

export default playerReducer;
