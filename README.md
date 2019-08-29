# matching-game

## Our Team
 - Biniam Tesfamariam
 - Darrik Puetz
 - Enrique A Rivera De Leon
 - Rachael Rice
 
 ## Project Description
 We wanted to create a game for users that allows them to enhance their memory skills. Memory plays a vital role in processing information. The memory game is a card flip-and-match system that implements the HTML, CSS, and JavaScript which we learned throughout the Code Fellows 201 course.

## Problem Domain
We had two project options, we decided to go for the one that seemed easier so we would have more time to edit and style it; our choice turned out to be harder than anticipated.

We started simple; a randomizer function gets two images from a folder, duplicates them and appends them into 4 pre-existing divs.

Once that worked, we realized we needed a way to limit the clicks for each image,a timer to display the revealed images, and a way for the JS to realize when both the images revealed were a match.

All of the changes made by javascript to the HTML were afecting the way images showed up in the page, sometimes when revealed, and sometimes when you started the game. Eventually we found CSS ways to give our website the right style and design.

We needed a way to keep track of the time it takes the user to solve, and than store it to use in our leaderboard in order to make it competitive, this was one of the trickiest parts of our week.

At one point, we decided to add an "Easter-Egg" to our website, whenever you finished the game within certain time, or beat the highest score, a pop up would show for one or two seconds at the end of the game. Due to lack of time we just added it as a part of the game.


## Version History

V 1.0 - Clicking on an image would give it a Javascript class, however the back of the card image and front of the card image were displayed at the same time.

V 1.1 - The card image is hidden behind the code fellows logo and is only revealed once clicked. However a user can keep clicking images while the flipped cards are displayed. Clicking a revealed card twice will incorrectly give it a class of 'correct'. A timer is added to keep track of how long it takes the user to solve the puzzle.

V 1.2 - The logic is edited so only two cards will display as flipped (using Javascript's setTimeout function). More logic is added to test if the user clicked on the same div twice, so clicking on the same card will no longer result in a class of 'correct'. Unique div's with the same dataset must be selected. Local storage is added.

V 1.3 - The 'toasty' feature is added. If a user finishes the game while the seconds position of the clock is < 30 seconds will result in a 'toasty' pop up. All links are updated for Github pages deployment.
