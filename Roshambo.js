class move {
    constructor() {
        this.moves = [];
    }

    addNewMove(move) {
        this.moves.push(move);
    }

    getComputerChoice() {
        let computerChoice = Math.random();

        if (computerChoice < 0.33) {
            return new rock;
        } else if (computerChoice <= 0.66) {
            return new paper;
        } else {
            return new scissors
        }
    }
    
    compareMoves(move1, move2) {
        var winner;
        console.log("Your move: " + move1.name);
        console.log("Computer's move: " + move2.name);
        if (move1.name === move2.weakness) {
            winner = move1.name;
        } else if (move2.name === move1.weakness) {
            winner = move2.name;
        } else {
           winner = "draw";
        }
        return winner;
    }

    runGame() {
        console.log(this.compareMoves(this.moves[0], this.moves[1]));
        
    }
}

class rock {
    constructor() {
        this.name = 'rock'
        this.strength = 'scisssors';
        this.weakness = 'paper';
    }

}

class paper {
    constructor() {
        this.name = 'paper'
        this.strength  = 'rock';
        this.weakness = 'scissors';
    }

}

class scissors {
    constructor() {
        this.name = 'scissors'
        this.strength = 'paper';
        this.weakness = 'rock';
    }
}

let game = new move();
let input = process.argv[2];
console.log(typeof input);

// game.addNewMove(input);
// game.addNewMove(game.getComputerChoice());
// game.runGame();


