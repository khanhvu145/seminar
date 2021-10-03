const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine","ejs");
app.set('views', path.join(__dirname, 'views'));

app.get('/about', (req, res) => {
  res.render('about');
})

app.get('/', (req, res) => {
  let clubs = [
    {
      name: "Arsenal",
      logo: "/imgs/teams/Arsenal.png",
      stadium_name: "Emirates Stadium",
      stadium_img: "/imgs/teams/Arsenal_stadium.jpg",
      color: "#F00000",
    },
    {
      name: "Aston Villa",
      logo: "/imgs/teams/AstonVilla.png",
      stadium_name: "Villa Park",
      stadium_img: "/imgs/teams/Aston_stadium.jpg",
      color: "#670E36",
    },
    {
      name: "Brentford",
      logo: "/imgs/teams/Brentford.png",
      stadium_name: "Brentford Community Stadium",
      stadium_img: "/imgs/teams/Brentford_stadium.jpg",
      color: "#C61D23",
    },
    {
      name: "Brighton and Hove Albion",
      logo: "/imgs/teams/Brighton.png",
      stadium_name: "Amex Stadium",
      stadium_img: "/imgs/teams/Brighton_stadium.jpg",
      color: "#0054A6",
    },
    {
      name: "Burnley",
      logo: "/imgs/teams/Burnley.png",
      stadium_name: "Turf Moor",
      stadium_img: "/imgs/teams/Burnley_stadium.jpg",
      color: "#81204C",
    },
    {
      name: "Chelsea",
      logo: "/imgs/teams/Chelsea.png",
      stadium_name: "Stamford Bridge",
      stadium_img: "/imgs/teams/Chelsea_stadium.jpg",
      color: "#001489",
    },
    {
      name: "Crystal Palace",
      logo: "/imgs/teams/Crystal.png",
      stadium_name: "Selhurst Park",
      stadium_img: "/imgs/teams/Crystal_stadium.jpg",
      color: "#0055A5",
    },
    {
      name: "Everton",
      logo: "/imgs/teams/Everton.png",
      stadium_name: "Goodison Park",
      stadium_img: "/imgs/teams/Everton_stadium.jpg",
      color: "#00019E",
    },
    {
      name: "Leeds United",
      logo: "/imgs/teams/Leeds.png",
      stadium_name: "Elland Road",
      stadium_img: "/imgs/teams/Leeds_stadium.jpg",
      color: "#A99651",
    },
    {
      name: "Leicester City",
      logo: "/imgs/teams/Leicester.png",
      stadium_name: "King Power Stadium",
      stadium_img: "/imgs/teams/Leicester_stadium.jpg",
      color: "#0B56A4",
    },
    {
      name: "Liverpool",
      logo: "/imgs/teams/Liverpool.png",
      stadium_name: "Anfield",
      stadium_img: "/imgs/teams/Liverpool_stadium.jpg",
      color: "#E31B23",
    },
    {
      name: "Manchester City",
      logo: "/imgs/teams/ManCity.png",
      stadium_name: "Etihad Stadium",
      stadium_img: "/imgs/teams/ManCity_stadium.jpg",
      color: "#98C5E9",
    },
    {
      name: "Manchester United",
      logo: "/imgs/teams/Mu.png",
      stadium_name: "Old Trafford",
      stadium_img: "/imgs/teams/Mu_stadium.jpg",
      color: "#C70101",
    },
    {
      name: "Newcastle United",
      logo: "/imgs/teams/Newcastle.png",
      stadium_name: "St. James' Park",
      stadium_img: "/imgs/teams/Newcastle_stadium.jpg",
      color: "#231F20",
    },
    {
      name: "Norwich City",
      logo: "/imgs/teams/Norwich.png",
      stadium_name: "Carrow Road",
      stadium_img: "/imgs/teams/Norwich_stadium.jpg",
      color: "#00A651",
    },
    {
      name: "Southampton",
      logo: "/imgs/teams/Southampton.png",
      stadium_name: "St. Mary's Stadium",
      stadium_img: "/imgs/teams/Southampton_stadium.jpg",
      color: "#FF0028",
    },
    {
      name: "Tottenham Hotspur",
      logo: "/imgs/teams/Tottenham.png",
      stadium_name: "Tottenham Hotspur Stadium",
      stadium_img: "/imgs/teams/Tottenham_stadium.jpg",
      color: "#111836",
    },
    {
      name: "Watford",
      logo: "/imgs/teams/Watford.png",
      stadium_name: "Vicarage Road",
      stadium_img: "/imgs/teams/Watford_stadium.jpg",
      color: "#E9D464",
    },
    {
      name: "West Ham United",
      logo: "/imgs/teams/WestHam.png",
      stadium_name: "London Stadium",
      stadium_img: "/imgs/teams/WestHam_stadium.jpg",
      color: "#7D2B3A",
    },
    {
      name: "Wolverhampton Wanderers",
      logo: "/imgs/teams/Wolver.png",
      stadium_name: "Molineux Stadium",
      stadium_img: "/imgs/teams/Wolver_stadium.jpg",
      color: "#FDB913",
    },
  ];
  let schedules = [
    {
      date: 'Thứ 7, 02/10/2021',
      infors: [
        {
          team_1: 'Manchester United',
          team_2: 'Everton',
          time: '18 : 30',
        },
        {
          team_1: 'Burnley',
          team_2: 'Norwich City',
          time: '21 : 00',
        },
        {
          team_1: 'Chelsea',
          team_2: 'Southampton',
          time: '21 : 00',
        },
        {
          team_1: 'Leeds United',
          team_2: 'Watford',
          time: '21 : 00',
        },
        {
          team_1: 'Wolverhampton Wanderers',
          team_2: 'Newcastle United',
          time: '21 : 00',
        },
        {
          team_1: 'Brighton and Hove Albion',
          team_2: 'Arsenal',
          time: '23 : 30',
        },
      ]
    },
    {
      date: 'Chủ nhật, 03/10/2021',
      infors: [
        {
          team_1: 'Crystal Palace',
          team_2: 'Leicester City',
          time: '20 : 00',
        },
        {
          team_1: 'Tottenham Hotspur',
          team_2: 'Aston Villa',
          time: '20 : 00',
        },
        {
          team_1: 'West Ham United',
          team_2: 'Brentford',
          time: '20 : 00',
        },
        {
          team_1: 'Liverpool',
          team_2: 'Manchester City',
          time: '22 : 30',
        },
      ]
    },
  ];
  let clubs_point = [
    {
      name: "Arsenal",
      played: 6,
      win: 3,
      drawn: 0,
      lost: 3,
      GF: 5,
      GA: 10,
      point: 9,
    },
    {
      name: "Aston Villa",
      played: 6,
      win: 3,
      drawn: 1,
      lost: 2,
      GF: 9,
      GA: 7,
      point: 10,
    },
    {
      name: "Brentford",
      played: 6,
      win: 2,
      drawn: 3,
      lost: 1,
      GF: 8,
      GA: 5,
      point: 9,
    },
    {
      name: "Brighton and Hove Albion",
      played: 6,
      win: 4,
      drawn: 1,
      lost: 1,
      GF: 8,
      GA: 5,
      point: 13,
    },
    {
      name: "Burnley",
      played: 6,
      win: 0,
      drawn: 2,
      lost: 4,
      GF: 5,
      GA: 11,
      point: 2,
    },
    {
      name: "Chelsea",
      played: 6,
      win: 4,
      drawn: 1,
      lost: 1,
      GF: 12,
      GA: 2,
      point: 13,
    },
    {
      name: "Crystal Palace",
      played: 6,
      win: 1,
      drawn: 3,
      lost: 2,
      GF: 6,
      GA: 9,
      point: 6,
    },
    {
      name: "Everton",
      played: 6,
      win: 4,
      drawn: 1,
      lost: 1,
      GF: 12,
      GA: 7,
      point: 13,
    },
    {
      name: "Leeds United",
      played: 6,
      win: 0,
      drawn: 3,
      lost: 3,
      GF: 6,
      GA: 14,
      point: 3,
    },
    {
      name: "Leicester City",
      played: 6,
      win: 2,
      drawn: 1,
      lost: 3,
      GF: 7,
      GA: 10,
      point: 7,
    },
    {
      name: "Liverpool",
      played: 6,
      win: 4,
      drawn: 2,
      lost: 0,
      GF: 15,
      GA: 4,
      point: 14,
    },
    {
      name: "Manchester City",
      played: 6,
      win: 4,
      drawn: 1,
      lost: 1,
      GF: 12,
      GA: 1,
      point: 13,
    },
    {
      name: "Manchester United",
      played: 6,
      win: 4,
      drawn: 1,
      lost: 1,
      GF: 13,
      GA: 5,
      point: 13,
    },
    {
      name: "Newcastle United",
      played: 6,
      win: 0,
      drawn: 3,
      lost: 3,
      GF: 7,
      GA: 14,
      point: 3,
    },
    {
      name: "Norwich City",
      played: 6,
      win: 0,
      drawn: 0,
      lost: 6,
      GF: 2,
      GA: 16,
      point: 0,
    },
    {
      name: "Southampton",
      played: 6,
      win: 0,
      drawn: 4,
      lost: 2,
      GF: 4,
      GA: 7,
      point: 4,
    },
    {
      name: "Tottenham Hotspur",
      played: 6,
      win: 3,
      drawn: 0,
      lost: 3,
      GF: 4,
      GA: 9,
      point: 9,
    },
    {
      name: "Watford",
      played: 6,
      win: 2,
      drawn: 1,
      lost: 3,
      GF: 7,
      GA: 9,
      point: 7,
    },
    {
      name: "West Ham United",
      played: 6,
      win: 3,
      drawn: 2,
      lost: 1,
      GF: 13,
      GA: 8,
      point: 11,
    },
    {
      name: "Wolverhampton Wanderers",
      played: 6,
      win: 2,
      drawn: 0,
      lost: 4,
      GF: 3,
      GA: 5,
      point: 6,
    },
  ];
  let players = [
    {
      name: 'Cristiano Ronaldo',
      club: 'Manchester United',
      position: 'Tiền đạo',
      img: '/imgs/players/CR7.jpg'
    },
    {
      name: 'Son Heung-min',
      club: 'Tottenham Hotspur',
      position: 'Tiền vệ',
      img: '/imgs/players/son.jpg'
    },
    {
      name: 'Mohamed Salah',
      club: 'Liverpool',
      position: 'Tiền đạo',
      img: '/imgs/players/salah.jpg'
    },
    {
      name: 'Kevin De Bruyne',
      club: 'Manchester City',
      position: 'Tiền vệ',
      img: '/imgs/players/bruyne.jpg'
    },
    {
      name: 'Adama Traoré',
      club: 'Wolverhampton Wanderers',
      position: 'Tiền đạo',
      img: '/imgs/players/traore.jpg'
    },
    {
      name: 'Romelu Lukaku',
      club: 'Chelsea',
      position: 'Tiền đạo',
      img: '/imgs/players/lukaku.jpg'
    },
    {
      name: 'Michail Antonio',
      club: 'West Ham United',
      position: 'Tiền vệ',
      img: '/imgs/players/antonio.jpg'
    },
    {
      name: 'Jamie Vardy',
      club: 'Leicester City',
      position: 'Tiền đạo',
      img: '/imgs/players/vardy.jpg'
    },
    {
      name: 'James Rodríguez',
      club: 'Everton',
      position: 'Tiền vệ',
      img: '/imgs/players/jame.jpg'
    },
    {
      name: 'Jesse Lingard',
      club: 'Manchester United',
      position: 'Tiền vệ',
      img: '/imgs/players/lingard.jpg'
    },
  ]
  /**Sắp xếp bảng xếp hạng theo điểm / hiệu số */
  let tg;
  for(let i = 0; i < clubs_point.length - 1; i++){
    for(let j = i + 1; j < clubs_point.length; j++){
      if(clubs_point[i].point < clubs_point[j].point){
        tg = clubs_point[i];
        clubs_point[i] = clubs_point[j];
        clubs_point[j] = tg;  
      }
      else{
        if(clubs_point[i].point == clubs_point[j].point){
          if((clubs_point[i].GF - clubs_point[i].GA) < (clubs_point[j].GF - clubs_point[j].GA)){
            tg = clubs_point[i];
            clubs_point[i] = clubs_point[j];
            clubs_point[j] = tg;  
          }
        }
      }
    }
  }
  res.render('home', {
    clubs: clubs, 
    schedules: schedules,
    clubs_point: clubs_point,
    players: players
  });
})



app.listen(port, () => {
  console.log(`Example app listening at h:${port}`);
})