//Brandon Ezovski, 11/16/2025, javascript file to handle event interest buttons on event_series.html
// when the user clicks the interested button it increments the number of interested players and changes the button image


// get event buttons after DOM loads
document.addEventListener('DOMContentLoaded', function() {
    var interestedCards = document.querySelectorAll('.interestCard');

    // array of players interested in each event 
    var interestedPlayers = [18, 30, 46];

    // initialize headers and attach click handlers — index is used for counts
    interestedCards.forEach(function(card, index) {
        var header = card.querySelector('h5');
        if (header) {
            header.textContent = 'Currently interested: ' + (interestedPlayers[index] || 0);
        }

        card.addEventListener('click', function() {
            var image = card.querySelector('.interestImage');
            if (!image || !header) return;
            var filename = image.src.split('/').pop();
            if (filename === 'interested_question_button.png') {
                // user is selecting interest
                interestedPlayers[index] = (interestedPlayers[index] || 0) + 1;
                image.src = 'images/interested_button.png';
            } else {
                // user is deselecting; don't allow negative counts
                interestedPlayers[index] = Math.max(0, (interestedPlayers[index] || 0) - 1);
                image.src = 'images/interested_question_button.png';
            }
            header.textContent = 'Currently interested: ' + interestedPlayers[index];
        });
    });
});