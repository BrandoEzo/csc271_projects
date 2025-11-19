function Player(name, mainCharacter, secondaryCharacters, peakRank, currRank, timesRanked){
    this.name = name;
    this.mainCharacter = mainCharacter;
    this.secondaryCharacters = secondaryCharacters;
    this.peakRankNumeric = peakRank; 
    this.currRank = currRank;
    this.timesRanked = timesRanked;
    
    // rank suffix function to add suffix to peak rank number
    this.getRankSuffix = function(rank){
        if(rank == 1){
            rank+="st";
        } else if(rank == 2){
            rank+="nd";
        } else if(rank == 3){
            rank+="rd";
        } else {
            rank+="th";
        }
        return rank;
    };
    
    // function to get image url based on main character
    this.getImageUrl = function(){
        return "images/" + this.mainCharacter + ".png";
    };
    
    // set values using functions
    this.peakRank = this.getRankSuffix(peakRank);
    this.imageUrl = this.getImageUrl();
    
    //method to set the content on the individual player card
    this.setContent = function(card){
        //update player name heading, and info section
        var player = card.querySelector("h3.playerName");
        player.textContent = this.name;
        var info = card.querySelector("p.info");
        var infoString = "Main Character: <strong>" + this.mainCharacter + "</strong><br>Secondary Character(s): <strong>" + this.secondaryCharacters + "</strong><br>Peak Ranking: <strong>" + this.peakRank + "</strong><br>Current Ranking: <strong>" + this.currRank + "</strong><br>Number of Times Ranked: <strong>" + this.timesRanked + "</strong>";
        info.innerHTML = infoString;
        var image = card.querySelector("img.characterImage");
        image.src = this.imageUrl;
        image.alt = this.mainCharacter;
        
        // Store metadata on the card for filtering
        card.dataset.timesRanked = this.timesRanked;
        card.dataset.peakRanking = this.peakRankNumeric;
    };
}

//player object array (that's a lot of dudes!)
var playersData = [
    new Player("808", "King K. Rool", "Steve", 3, "N/A", 5),
    new Player("9Volt", "Pikachu", "N/A", 4, "N/A", 2),
    new Player("Abruzaza", "Incineroar", "Diddy Kong, Cloud, Palutena, Joker", 8, "N/A", 4),
    new Player("Alan$", "Ike", "Wario", 4, "4th", 4),
    new Player("Brando", "Falco", "N/A", 5, "5th", 9),
    new Player("Cheech", "Wolf", "Mii Brawler", 9, "N/A", 1),
    new Player("Craftis", "Sonic", "Sora", 1, "N/A", 11),
    new Player("Dew2", "R.O.B.", "Mii Brawler", 1, "1st", 12),
    new Player("DYL", "Steve", "N/A", 6, "N/A", 6),
    new Player("Ethan", "King K. Rool", "Mr. Game & Watch, Bowser", 10, "N/A", 1),
    new Player("Heatsurge", "R.O.B.", "Dr. Mario", 9, "N/A", 3),
    new Player("Jimnub", "Roy", "Palutena", 4, "N/A", 2),
    new Player("Komeng", "Villager", "Incineroar", 10, "N/A", 1),
    new Player("Leviathan", "Zero Suit Samus", "Joker, Wolf, Sheik", 1, "N/A", 5),
    new Player("MAMMOTH", "Donkey Kong", "Yoshi", 3, "3rd", 9),
    new Player("MaRune", "Sonic", "Pyra & Mythra", 7, "N/A", 1),
    new Player("Melooong", "Captain Falcon", "Wolf", 9, "N/A", 2),
    new Player("Nazier", "Mr Game & Watch", "Shulk, Sephiroth, Roy", 9, "N/A", 1),
    new Player("Paulo", "Fox", "N/A", 2, "2nd", 13),
    new Player("Phin!", "Mii Gunner", "N/A", 6, "N/A", 1),
    new Player("Random", "Byleth", "Pyra & Mythra, Bayonetta, Lucina", 5, "N/A", 4),
    new Player("Shawnzo", "Pikachu", "N/A", 3, "N/A", 4),
    new Player("Sloth", "Yoshi", "N/A", 8, "N/A", 1),
    new Player("Sol", "Link", "N/A", 3, "N/A", 10),
    new Player("Stupid Moron", "Little Mac", "Min Min, Hero", 8, "N/A", 1),
    new Player("Sylviris", "Zelda", "N/A", 6, "N/A", 1),
    new Player("Tetrahedryn", "Zelda", "N/A", 6, "N/A", 3),
    new Player("ThetDranimal", "Roy", "N/A", 5, "N/A", 2),
    new Player("TyDie", "Terry", "Ryu", 9, "N/A", 2),
    new Player("Xaria", "Bayonetta", "Min Min, Snake", 2, "N/A", 8)
];

// Add title to the player search section
function addSearchTitle() {
    var title = "Player Search";
    var content = document.getElementById("title");
    if (content) {
        content.textContent = title;
    }
}

// Render all player cards
function renderPlayerCards() {
    var playerCards = document.querySelectorAll("div.playerCard");
    for(var i = 0; i < playerCards.length; i++){
        // If there are more cards than data, hide the extras
        if (i >= playersData.length) {
            playerCards[i].style.display = "none";
            continue;
        }
        // Use the Player object's setContent method
        playersData[i].setContent(playerCards[i]);
    }
}

// filter dropdown logic
function initRankingsFilter() {
    var filterDropdown = document.getElementById('rankings-filter');
    if (!filterDropdown) return;
    
    var playerCards = document.querySelectorAll("div.playerCard");
    
    function applyFilter() {
        var selected = filterDropdown.value; // "All", "1", "2", "3", "4", "5"

        playerCards.forEach(function(card) {
            // Skip cards without data
            var times = parseInt(card.dataset.timesRanked || "0", 10);
            var peak = parseInt(card.dataset.peakRanking || "999", 10);

            var show = true;
            switch (selected) {
                case '1': // Ranked Only Once
                    show = (times === 1);
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
                    show = (peak === 1);
                    break;
                case 'All':
                default:
                    show = true;
            }

            card.style.display = show ? '' : 'none';
        });
    }

    filterDropdown.addEventListener('change', applyFilter);
    // Initialize on load so state reflects current selection
    applyFilter();
}

// Initialize everything when DOM is ready
addSearchTitle();
renderPlayerCards();
initRankingsFilter();
