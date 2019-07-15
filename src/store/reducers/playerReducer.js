const initState = {

    players: [
      {
        playerid: "001",
        team: "India",
        picture:"http://assets-news-bcdn-ll.dailyhunt.in/cmd/resize/400x400_60/fetchdata15/images/79/bc/95/79bc95d586a30c7b9a71d4b447ba185b.jpg",
        name: "Virat Kohli",
        type:"batsman"
       
        
      },
      {
        playerid: "002",
        team: "India",
        picture:"http://assets-news-bcdn-ll.dailyhunt.in/cmd/resize/400x400_60/fetchdata15/images/79/bc/95/79bc95d586a30c7b9a71d4b447ba185b.jpg",
        name: "Sachin",
        type:"bowler"
        
      },
      {
        playerid: "003",
        team: "India",
        picture:"http://assets-news-bcdn-ll.dailyhunt.in/cmd/resize/400x400_60/fetchdata15/images/79/bc/95/79bc95d586a30c7b9a71d4b447ba185b.jpg",
        name: "Dhoni",
        type:"allrounder"
        
      },
      {
        playerid: "004",
        team: "India",
        picture:"http://assets-news-bcdn-ll.dailyhunt.in/cmd/resize/400x400_60/fetchdata15/images/79/bc/95/79bc95d586a30c7b9a71d4b447ba185b.jpg",
        name: "Rahul",
        type:"wicketkeeper"
        
      },
      {
        playerid: "005",
        team: "India",
        picture:"http://assets-news-bcdn-ll.dailyhunt.in/cmd/resize/400x400_60/fetchdata15/images/79/bc/95/79bc95d586a30c7b9a71d4b447ba185b.jpg",
        name: "Anushka",
        type:"allrounder"
        
      }
    ]
  }
}
const playerReducer = (state = initState, action) => {
    return state;
}

export default playerReducer;
