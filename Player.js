const GameState = require("./src/GameState");
const lowThreshold = 14;
const midThreshold = 10;
class Player {
  static get VERSION() {
    return "0.1";
  }

  static betRequest(gameState, bet) {
    var game = new GameState(gameState);
    if (game.me().score() > lowThreshold) {
      game.toRaise();
    } else if (game.me().score() > midThreshold) {
      game.toCall();
    }
    bet();
  }
  static showdown(gameState) {}
}

module.exports = Player;
