function main(){
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

function userTurn(){
    let choice = prompt("enter r, p, or s");
    const letters = ["r","p","s"];
    if (!letters.includes(choice)){
            alert("invalid input");
    }
    return userTurn;
}


function cpuTurn(){
    let choice = Math.floor(Math.random()*3);
    let moves = ["r","p","s"];
    return moves[choice];
}

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
