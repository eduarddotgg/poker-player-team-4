const GameState = require('./GameState');

class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    var game = new GameState(gameState);
    console.log(game.me().highestPocketValue());
    bet(0);
  }

  static showdown(gameState) {
  }
}

module.exports = Player;

