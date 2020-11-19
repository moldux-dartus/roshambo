const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;

class Player {
  constructor(name, move) {
    this.move = move;
    this.name = name;
    console.log(`${name} plays ${move}`);
  }
  static moveSet = ["rock", "paper", "scissors"];

  static selectWinner(player1, player2) {
    const result = 
    (Player.moveSet.indexOf(player1.move)+1)**2+
    (Player.moveSet.indexOf(player2.move)+1)**2*(-1);
    switch(result)
    {
      case 0 :
        console.log("~This round is a tie~");
        break
      case 3:
      case 5:
      case -8:
        console.log(`~${player1.name} wins.~`);
        break
      case -3:
      case -5:
      case 8:
        console.log(`~${player2.name} wins.~`);
        break
    }
  }
}

class HumanPlayer extends Player {
  constructor() {
    super("Player", argv.move);
  }
}

class ComputerPlayer extends Player {
  constructor() {
    super("Computer", Player.moveSet[Math.floor(Math.random() * 3)]);
  }
}

const human = new HumanPlayer();
const computer = new ComputerPlayer();

for (var x = 0; x < 27; x++){
Player.selectWinner(human, computer);
}