//Brandon Ezovski, 10/22/2025, .js file to compute player statistics for the currently ranked players 
// and import them into the rankings.html file

//array of player names
var players = ["Dew2", "Paulo", "Mammoth", "Alan$", "Brando"];

//rank 1 data (Dew2)
var rank1Player = players[0];
var rank1Char = "R.O.B.";
var rank1Peak = 1;
var rank1Avg = (1+2+2+3+1+1+1+2)/8;
var rank1SetsPlayed = 1573+490;
var rank1WinRate = (1573/rank1SetsPlayed)*100;

//rank 2 data (Paulo)
var rank2Player = players[1];
var rank2Char = "Fox";
var rank2Peak = 2;
var rank2Avg = (2+6+5+2+4+2+2+3+4)/9;
var rank2SetsPlayed = 1017+643;
var rank2WinRate = (1017/rank2SetsPlayed)*100;

//rank 3 data (Mammoth)
var rank3Player = players[2];
var rank3Char = "Donkey Kong and Yoshi";
var rank3Peak = 3;
var rank3Avg = (3+3+4+3+6+7+8)/7;
var rank3SetsPlayed = 1938+1445;
var rank3WinRate = (1938/rank3SetsPlayed)*100;

//rank 4 data (Alan$)
var rank4Player = players[3];
var rank4Char = "Ike";
var rank4Peak = 4;
var rank4Avg = (4+5+9+7)/4;
var rank4SetsPlayed = 243+175;
var rank4WinRate = (243/rank4SetsPlayed)*100;

//rank 5 data (Brando)
var rank5Player = players[4];
var rank5Char = "Falco";
var rank5Peak = 5;
var rank5Avg = (5+8+8+9+10+10+8)/7;
var rank5SetsPlayed = 511+378;
var rank5WinRate = (511/rank5SetsPlayed)*100;

//get element by ID
document.getElementById("rankings-breakdown").innerHTML = "Current Rankings Breakdown";

//get elements by querySelector
document.querySelector(".playerName").innerHTML = "1st: " + rank1Player;

//get elements by Class Name
document.getElementsByClassName("playerName")[1].innerHTML = "2nd: " + rank2Player;
document.getElementsByClassName("playerName")[2].innerHTML = "3rd: " + rank3Player;
document.getElementsByClassName("playerName")[3].innerHTML = "4th: " + rank4Player;
document.getElementsByClassName("playerName")[4].innerHTML = "5th: " + rank5Player;

//get elements by Tag Name
document.getElementsByTagName("p")[0].innerHTML = "Main Character: <strong>" + rank1Char + "</strong><br> Peak Ranking: <strong>" + rank1Peak + "</strong><br>Average Ranking: <strong>" + rank1Avg.toFixed(3) + "</strong><br>Sets Played: <strong>" + rank1SetsPlayed + "</strong><br>Win Rate: <strong>" + rank1WinRate.toFixed(2) + "%</strong>";

document.getElementsByTagName("p")[1].innerHTML = "Main Character: <strong>" + rank2Char + "</strong><br> Peak Ranking: <strong>" + rank2Peak + "</strong><br>Average Ranking: <strong>" + rank2Avg.toFixed(3) + "</strong><br>Sets Played: <strong>" + rank2SetsPlayed + "</strong><br>Win Rate: <strong>" + rank2WinRate.toFixed(2) + "%</strong>";

document.getElementsByTagName("p")[2].innerHTML = "Main Character: <strong>" + rank3Char + "</strong><br> Peak Ranking: <strong>" + rank3Peak + "</strong><br>Average Ranking: <strong>" + rank3Avg.toFixed(3) + "</strong><br>Sets Played: <strong>" + rank3SetsPlayed + "</strong><br>Win Rate: <strong>" + rank3WinRate.toFixed(2) + "%</strong>";

document.getElementsByTagName("p")[3].innerHTML = "Main Character: <strong>" + rank4Char + "</strong><br> Peak Ranking: <strong>" + rank4Peak + "</strong><br>Average Ranking: <strong>" + rank4Avg.toFixed(3) + "</strong><br>Sets Played: <strong>" + rank4SetsPlayed + "</strong><br>Win Rate: <strong>" + rank4WinRate.toFixed(2) + "%</strong>";

document.getElementsByTagName("p")[4].innerHTML = "Main Character: <strong>" + rank5Char + "</strong><br> Peak Ranking: <strong>" + rank5Peak + "</strong><br>Average Ranking: <strong>" + rank5Avg.toFixed(3) + "</strong><br>Sets Played: <strong>" + rank5SetsPlayed + "</strong><br>Win Rate: <strong>" + rank5WinRate.toFixed(2) + "%</strong>";

