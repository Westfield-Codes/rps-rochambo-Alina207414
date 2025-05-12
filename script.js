/* Steps 
*  0. Refer to https://lucid.app/lucidchart/3da5e3b5-33fe-4823-875c-81fb61c9d84c/view
*  1. Create Documentation and stubs for each function. //
*  2. Unit Test each function:
*     a. Add pseudocode based on flowchart, picking version
*     b. Test with console.log using stubs
*     c. Commit when it works.
*     d. Move to next function
*  3. System Test finished version (does it work right in all conditions?)
*/

function main(){
    let winner = "";
    let rounds = setRounds
}


function setRounds(){
 let rounds = prompt("Number of rouns?");
 if (rounds % 2 == 0) {
    alert("must be odd try again");
    return setRounds();
 }
    let round = 1;
}

/*RPS Rounds
*plays a round of RPS and tells the winner
* @param: none
* @ Return: none
*/
function rpsRound(){
    let u = "";
    let c = "";
    while (u == c){
    u = userTurn();
    c = cpuTurn();
    if (u == c) alert("We both chose " + c);
}
    let winner = findWinner(u,c);
    alert("you chose " + u + " and i chose " + c + " so " + winner + " won!");
}


/* userTurn
user can chose r, p, or s. If bad Input, give new choice.
* @param: none
* @return: choice
*/
function userTurn(){
    let choice = prompt("enter r, p, or s");
    const letters = ["r","p","s"];
    if (!letters.includes(choice)){
            alert("invalid input");
        
    }
    return userTurn;
}

/* cpuTurn chose a random number 0-2,returns the associated RPS  move.
* @param: none
* @return: choise
*/
function cpuTurn(){
    let choice = Math.floor(Math.random()*3);
    let moves = ["r","p","s"];
    return moves[choice];
}

/* findwinner
*/
function findWinner(){
    let combo = u + c;
    let match = "";
    let winner = "";
    let winArray = [["r","p","I"],["r","s","You"],["s","r","I"],["p","r","You"],["p","s","I"],["s","p","you"]];
    for ( i = 0; i < winArray.length; i++){
        match = winArray[i][0] + winArray[i][1];
        if (match==combo){
            winner = winarray[i][2];
        }
    }
    return winner;
}