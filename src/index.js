import Player from './player';

class Application {
  static get Player() {
    return Player;
  }
}

let player1 = new Application.Player();
let player2 = new Application.Player(1);

console.log(player1.id);
console.log(player2.id);
