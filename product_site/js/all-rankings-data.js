//Brandon Ezovski, 10/30/2025, .js file to fill out the player search section of the rankings.html file for
//all 30 players that have been ranked in RI at some point since Summer 2022

//player list
var players = ["808", "9Volt", "Abruzaza", "Alan$", "Brando", "Cheech", "Craftis", "Dew2", "DYL", "Ethan", 
    "Heatsurge", "Jimnub", "Komeng", "Leviathan", "MAMMOTH", "MaRune", "Melooong", "Nazier", "Paulo", "Phin!", 
    "Random", "Shawnzo", "Sloth", "Sol", "Stupid Moron", "Sylviris", "Tetrahedryn", "ThetDranimal", "TyDie", "Xaria"];
//list of each player's peak ranking
var peakRanking = [3, 4, 8, 4, 5, 9, 1, 1, 6, 10, 9, 4, 10, 1, 3, 7, 9, 9, 2, 6, 5, 3, 8, 3, 8, 6, 6, 5, 9, 2];
//list of each player's current rank
var currentRanking = ["N/A", "N/A", "N/A", "4th", "5th", "N/A", "N/A", "1st",  "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "3rd", "N/A", "N/A", "N/A", "2nd", 
    "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A"];
//list of the number of times each player has been ranked
var timesRanked = [5, 2, 4, 4, 9, 1, 11, 12, 6, 1, 3, 2, 1, 5, 9, 1, 2, 1, 13, 1, 4, 4, 1, 10, 1, 1, 3, 2, 2, 8];
//list of each player's main character
var mainCharacter = ["King K. Rool", "Pikachu", "Incineroar", "Ike", "Falco", "Wolf", "Sonic", "R.O.B.", "Steve", "King K. Rool",
    "R.O.B.", "Roy", "Villager", "Zero Suit Samus", "Donkey Kong", "Sonic", "Captain Falcon", "Mr Game & Watch",
    "Fox", "Mii Gunner", "Byleth", "Pikachu", "Yoshi", "Link", "Little Mac", "Zelda", "Zelda", "Roy", "Terry", "Bayonetta"];
//list of each player's secondary character(s), if applicable
var secondaryCharacters = ["Steve", "N/A", "Diddy Kong, Cloud, Palutena", "Wario", "N/A", "Mii Brawler", "Sora", "Mii Brawler", "N/A", "Mr. Game & Watch, Bowser", 
    "Dr. Mario", "Palutena", "Incineroar", "Joker, Wolf, Sheik", "Yoshi", "Pyra & Mythra", "N/A", "Shulk, Sephiroth, Roy", "N/A", "N/A", "Pyra & Mythra, Bayonetta, Lucina", 
    "N/A", "N/A", "N/A", "Min Min", "N/A", "N/A", "N/A", "Ryu", "Min Min, Snake"];

//query for all playerCard div elements
var playerCards = document.querySelectorAll("div.playerCard");
for(var i = 0; i < playerCards.length; i++){
    // If there are more cards than data, hide the extras
    if (i >= players.length) {
        playerCards[i].style.display = "none";
        continue;
    }
    //update player name heading, and info section
    var player = playerCards[i].querySelector("h3.playerName");
	player.textContent = players[i];
    var info = playerCards[i].querySelector("p.info");
    var rank = (peakRanking[i]).toString();
    //if-else-elseif statement to add suffix to rank numbers
    if(rank == 1){
        rank+="st";
    }
    else if(rank == 2){
        rank+="nd";
    }
    else if(rank == 3){
        rank+="rd";
    }
    else{
        rank+="th";
    }
    //set info as a variable for easier access
    var infoString = "Main Character: <strong>" + mainCharacter[i] +"</strong><br>Secondary Character(s): <strong>" + secondaryCharacters[i] + "</strong><br>Peak Ranking: <strong>" + rank + "</strong><br>Current Ranking: <strong>" + currentRanking[i] + "</strong><br>Number of Times Ranked: <strong>" + timesRanked[i] + "</strong>";
    info.innerHTML = infoString;
    //get image url using mainCharacter
    var imageUrl = "images/" + mainCharacter[i] + ".png";
    var image = playerCards[i].querySelector("img.characterImage");
	image.src = imageUrl;
	image.alt = mainCharacter[i];
    // Store metadata on the card for easy filtering
    playerCards[i].dataset.timesRanked = timesRanked[i];
    playerCards[i].dataset.peakRanking = peakRanking[i];
}

// Hook up the filter dropdown (id matches rankings.html)
var filterDropdown = document.getElementById('rankings-filter');

function applyFilter() {
    if (!filterDropdown) return;
    var selected = filterDropdown.value; // "All", "1", "2", "3", "4", "5"

    playerCards.forEach(function(card) {
        // Skip cards without data
        var times = parseInt(card.dataset.timesRanked || "0", 10);
        var peak = parseInt(card.dataset.peakRanking || "999", 10);
        
        var show = true;
        switch (selected) {
            case '1': // Ranked Only Once
                show = (times == 1);
                break;
            case '2': // Ranked Multiple Times
                show = (times > 1);
                break;
            case '3': // Ranked Top 5 (peak <= 5)
                show = (peak <= 5);
                break;
            case '4': // Ranked Top 3 (peak <= 3)
                show = (peak <= 3);
                break;
            case '5': // Ranked 1st (peak == 1)
                show = (peak == 1);
                break;
            case 'All':
            default:
                show = true;
        }

        card.style.display = show ? '' : 'none';
    });
}

if (filterDropdown) {
    filterDropdown.addEventListener('change', applyFilter);
    // Initialize on load so state reflects current selection
    applyFilter();
}