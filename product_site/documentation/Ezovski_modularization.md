# Modularization

# Describe the specific code segments you plan to modularize into functions. Explain what each function will do and whether it will have parameters, arguments, or return values.
- my code, specifically the all-rankings-data.js file, has several things that are used repeatedly, mostly as part of the loop section where data is set on each player's ranking card. I am planning on making one function which takes in all of the needed data to write to each player card, one that takes in a rank and returns the rank with it's correct suffix appended (i.e. 1 -> 1st), and another simple one just for a title, as that is needed for this assignment as well. 

# Discuss why you chose to convert these sections into functions. Focus on how modularization improves your code’s readability, reduces repetition, and simplifies debugging or future updates.
- I chose these functions as it makes reading the code so much simpler. 
- For the setContent function, instead of using array[i] for every single different array of data like we did originally, I will just be setting my data with variables named things like "name", "main character" "peak ranking" etc. This will also declutter the logic in the main function, allowing for simpler debugging and understanding.
- The suffix function will also take a lot of the clutter out of the setContent function, which will in turn make that function easier to read. 
- The addSearchTitle function is just a simple one to fulfill the simple function requirement. I don't normally make these overly simple functions as their content can just be placed in one or 2 lines. I like using functions to abstract large amounts of work away from main/other functions to make them easier to understand at a glance.

# Propose any new functions that could enhance your site’s features or improve user interaction. For each new function, describe its purpose, what parameters it will take, whether it will return a value, and how it fits into your overall project.
- setContent: function to set the content on the individual player cards in the player search section
    - parameters: card, name, mainCharacter, secondaryCharacters, peakRank, currRank, timesRanked
    - return value: nothing
    - fits into the project as it was work that was already being done by the JavaScript code
- getRankSuffix: function to add the appropriate suffix to the rank number (i.e. 2 -> 2nd)
    - parameters: rank (number 1-10)
    - return value: rank with correct suffix appended
    - fits into the project as it was work that was already being done by the JavaScript code, abstracted to this function to remove clutter
- addSearchTitle: simple function to add a title to the search section
    - parameters: none
    - return value: nothing
    - not the most necessary function, but it's needed for this assignment :)