export const games = [
    {
      _id: "001",
      index: 0,
      team_1: "India",
      pic:
        "http://assets-news-bcdn-ll.dailyhunt.in/cmd/resize/400x400_60/fetchdata15/images/79/bc/95/79bc95d586a30c7b9a71d4b447ba185b.jpg",
      team_2: "Bangladesh",
      date: "05-07-19",
      link: "/CricketPool1",
      pool_value:'pool001',
      
    },
    {
      _id: "002",
      index: 1,
      team_1: "Pakistan",
      pic:
        "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/09/26/736256-mushfiqur-rahim-afp.jpg",
      team_2: "Bangladesh",
      date: "11-07-19",
      link: "/CricketPool2",
      pool_value:'pool002',
    },
    {
      _id: "003",
      index: 2,
      team_1: "England",
      pic: "https://i.ytimg.com/vi/x0hjmj06Ee4/maxresdefault.jpg",
      team_2: "Bangladesh",
      date: "15-07-19",
      link: "/CricketPool3",
      pool_value:'pool003',
    },
    {
      _id: "004",
      index: 3,
      team_1: "WestIndies",
      pic: "https://www.cricket.com.au/-/media/News/2018/08/1DreRuss.ashx",
      team_2: "Bangladesh",
      date: "17-07-19",
      link: "/CricketPool4",
      pool_value:'pool004',
    },
    {
      _id: "005",
      index: 4,
      team_1: "India",
      pic:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201906/vkapr-770x433.jpeg?dLHgTcvNeIE4IMtnA5KnD.gB_vjH9N89",
      team_2: "England",
      date: "21-07-19",
      link: "/CricketPool5",
      pool_value:'pool005',
    }
  ]

export const contests = [
  { id: 'cc001', sport:'cricket', teamA:'india', teamB:'bangladesh' }
]

export const pools = [
  {    id: 'cp001', entry: 10, prize: 100, chosen:false },
  {    id: 'cp002', entry: 15, prize: 200, chosen:false },
  {    id: 'cp003', entry: 50, prize: 500, chosen:false }        
]

export const players = [
  {
    playerid: "001",
    team: "India",
    pic:"https://www.cricket.com.au/-/media/Players/Men/International/India/ODIWC19/Rohit-Sharma-CWC19.ashx",
    name: "Rohit Sharma",
    type:"batsman",
    playerinfo:"Rohit Sharma oozes batting talent: malleable wrists, knack to find the gaps, and the extra half a second when he plays his shots. However, for a player of his class, the first six years of his international career were frustrating for him, the team, and the spectators, as the odd delightful innings was followed and preceded by plenty of failures. It all came together finally in 2013, when Rohit was promoted to open the innings in ODIs. The move turned out to be a masterstroke, as Rohit found form in the Champions Trophy, and then went into overdrive in the ODI series against Australia, scoring two centuries, including 209, only the third double in ODI cricket.",
    selected : "false"        
  },
  {
    playerid: "002",
    team: "India",
    pic:"https://www.cricket.com.au/-/media/Players/Men/International/India/ODIWC19/Shikhar-Dhawan-CWC19.ashx?h=548",
    name: "Shikhar Dhawan",
    type:"batsman",
    playerinfo:"Shikhar Dhawan stunned all observers, and Australia, when he stroked his way to the fastest Test century by a debutant. That debut, in Mohali in 2012-13, came to Dhawan in his ninth year of first-class cricket after he had been written off by almost everybody, not least because India's opening combination had been fixed to the most prolific combination in their Test history: Virender Sehwag and Gautam Gambhir.",
    selected : "false"
  },
  {
    playerid: "003",
    team: "India",
    pic:"https://www.searchpng.com/wp-content/uploads/2019/03/MS-Dhoni-PNG-Image-715x715.png",
    name: "Mahendra Singh Dhoni",
    type:"wicketkeeper",
    playerinfo:"Barring Sachin Tendulkar, MS Dhoni is arguably the most popular and definitely the most scrutinised cricketer from India. He has done so coming from the cricketing backwaters, the mining state of Jharkhand, and through a home-made batting and wicketkeeping technique, and a style of captaincy that scales the highs and lows of both conservatism and unorthodoxy. Under Dhoni's captaincy, India have won the top prize in all formats: the No.1 Test ranking for 18 months starting December 2009, the 50-over World Cup in 2011 and the World Twenty20 on his captaincy debut in 2007.",
    selected : "false"        
  },
  {
    playerid: "004",
    team: "India",
    pic:"https://www.kcricketscore.com/public/images/players/6698.jpg",
    name: "Kannaur Lokesh Rahul",
    type:"batsman",
    playerinfo:"A tall, elegant right-hand batsman who can keep wicket in a crisis, KL Rahul is among the most highly rated opening batsmen in India's next generation. Rahul was a part of India's squad in the 2010 Under-19 World Cup and made his first-class debut later that year. Having taken a while to establish himself as a first-class cricketer, he enjoyed a breakthrough 2013-14 season, laying the foundation for Karnataka's Ranji Trophy victory with 1033 runs, which included three centuries, three nineties, and a Man-of-the-Match performance in the final. ",
    selected:"false"        
  },
  {
    playerid: "005",
    team: "India",
    pic:"https://iplstatic.s3.amazonaws.com/players/284/1124.png",
    name: "Jasprit Jasbirsingh Bumrah",
    type:"bowler",
    playerinfo:"Jasprit Bumrah grabbed eyeballs first with his unorthodox action, and then his bowling skills. Armed with an anomalous, sling-arm action and natural pace, the peculiar release point of Bumrah's deliveries makes it hard for batsmen to pick him.",
    selected:"false"
    
  },
  {
    playerid: "006",
    team: "India",
    pic:"https://icc-corp-2013-live.s3.amazonaws.com/players/champions-trophy-2017/284/116.png",
    name: "Bhuvneshwar Kumar Singh",
    type:"bowler",
    playerinfo:"Bhuvneshwar Kumar, like the other wily Kumar, Praveen, comes from Meerut, a northern Indian town known for - among other things - the industrial production of sports goods, most famously those under the brand SG. No wonder then that once thrown the new SG ball, Bhuvneshwar can make it hoop around corners, mostly back into the right-hand batsman but he gets it to hold its line often enough to be a genuine threat. Like the other Kumar, though, Bhuvneshwar operates at a middling pace of early 130s, but India weren't spoilt enough for choices to deny him an international debut season at the age of 22, in late 2012. ",
    selected:"false"
    
  },
  {
    playerid: "007",
    team: "Bangladesh",
    pic:"https://sportycious.com/wp-content/uploads/2015/10/shakib-al-hasan.png",
    name: "Shakib Al Hasan",
    type:"allrounder",
    playerinfo:"When the annals of Bangladesh cricket are sifted by future generations, Shakib Al Hasan will emerge and re-emerge as the greatest cricketer of its first two decades. His on-field performances and off-field professionalism set a benchmark that was followed by peers and juniors alike. As a bowler, Shakib is accurate, consistent and canny; aggression and a wide range of strokes are the keys to his batting. ",
    selected:"false"
    
  },
  {
    playerid: "008",
    team: "India",
    pic:"https://2.bp.blogspot.com/-D8Tlgp7b79I/V7mKrWwoVQI/AAAAAAAAMo0/eB_YbbqgvvcVC0DOZyhGTza0Y4091rZnACLcB/s1600/ravindra-jadeja.png",
    name: "Ravindra Jadeja",
    type:"allrounder",
    playerinfo:"First they ignore you, then they laugh at you, then they fight you, then you win. A fellow Gujarati, Mahatma Gandhi, could well have meant to say this about Ravindra Jadeja. The best of observers ignored his steady left-arm spin at first, then he was ridiculed for his three triple-centuries in Ranji Trophy, the idea of Jadeja the Test player was contested when India gave him debut in 2012-13 against conventional wisdom, but in India's series win against Australia, Jadeja won them all over, not least by dismissing Michael Clarke five times in six innings.",
    selected:"false"
    
  },
  {
    playerid: "009",
    team: "Bangladesh",
    pic:"https://upload.wikimedia.org/wikipedia/commons/a/a6/Tamim-Iqbal-wt20.png",
    name: "Tamim Iqbal Khan",
    type:"batsman",
    playerinfo:"Tamim Iqbal was already one of Bangladesh's most assured batsmen at the time of his 21st birthday, and will be a vital component at the top of the order for years to come. His promise was apparent when, batting for the Under-19s against England at the end of 2005, he smashed 112 from just 71 balls to help Bangladesh cruise to victory. The left-hander is regarded as one of the most exciting prospects in Bangladesh cricket and is arguably the hardest hitter of the cricket ball in the country. ",
    selected:"false"
    
  },
  {
    playerid: "010",
    team: "India",
    pic:"https://www.cricket.com.au/-/media/Players/Men/International/India/Yuzvendra_Chahal_T2018.ashx",
    name: "Yuzvendra Singh Chahal",
    type:"bowler",
    playerinfo:"Yuzvendra Chahal is an attacking legspinner who first attracted attention when he took 34 wickets in the National Under-19 Cooch Behar Trophy in 2009, ending the tournament as its leading wicket-taker. A former chess player who represented India at junior levels, Chahal made his first-class debut for Haryana the same year and was signed by Mumbai Indians in 2011 to be part of their IPL squad. ",
    selected:"false"
    
  },
  {
    playerid: "011",
    team: "Bangladesh",
    pic:"https://www.cricket.com.au/-/media/Players/Men/International/Bangladesh/Mustafizur-Rahman-CWC19.ashx",
    name: "Mustafizur Rahman",
    type:"bowler",
    playerinfo:"Mustafizur Rahman is a left-arm pace bowler who came to Dhaka to try out for a fast-bowling camp in 2012, after he had impressed in an Under-17 tournament in Satkhira, some 300km from Dhaka. He got admitted to the BCB's pace foundation and soon caught the coaches' attention to make the Bangladesh Under-19 side for the 2014 World Cup. ",
    selected:"false"
    
  },
  {
    playerid: "012",
    team: "Bangladesh",
    pic:"data:image/jpeg;base64,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",
    name: "Mohammad Mushfiqur Rahim",
    type:"wicketkeeper",
    playerinfo:"A wild-card inclusion for Bangladesh's maiden tour of England in 2005, Mushfiqur Rahim was just 16 when he was selected for that daunting trip - two Tests in May, followed by six ODIs against England and Australia - even though he hadn't been named in the preliminary squad of 20. Mushfiqur was principally selected as an understudy to the ever-present wicketkeeper, Khaled Mashud, but his inclusion was further evidence of Bangladesh's determination to build for a better future.  ",
    selected:"false"
    
  }        
]

export const user = 
  {
    user_details : {},
    players_selected : [],
    contests_selected : [],
    pools_selected : [],
  }
