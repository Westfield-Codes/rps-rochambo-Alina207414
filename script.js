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


let score = [0,0];


function main(){
    let winner = "";
    let rounds = setRounds();
     for (let round = 1; round <= rounds; round++) {
        winner = rpsRound();
        score[winner]++;
     }
     alert("you have " + score[0] + " and I have " + score[1]);
}


function setRounds(){
 let rounds = prompt("Number of rouns?");
 if (rounds % 2 == 0) {
    alert("must be odd try again");
    return setRounds();
 }
    return rounds;
}

/*RPS Rounds
*plays a round of RPS and tells the winner. 
*Returns the index (0,1) in score for the winner
* @param: none
* @ Return:winner
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
   let winValues = ["you","I"];
   winner = winValues.indexOf(winner);
    return winner;
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
         return userTurn();
    }
    return choice;
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
* Takes user and computerns turn
* Decides who is winner is 
* Return winner
* @param: u,c
* @return: winner
*/
function findWinner(u,c){
    let combo = u + c;
    let match = "";
    let winner = "";
    let winArray = [["r","p","I"],["r","s","You"],["s","r","I"],["p","r","You"],["p","s","I"],["s","p","you"]];
    for ( i = 0; i < winArray.length; i++){
        match = winArray[i][0] + winArray[i][1];
        if (match==combo){
            winner = winArray[i][2];
        }
    }
    return winner;
}