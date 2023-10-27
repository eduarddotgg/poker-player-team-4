const GameState = require("./src/GameState");
const lowThreshold = 14;
const midThreshold = 10;
const PAIR_SCORE = 1;

const matcher = (card1, card2) => {
  if (card1.rank() + 1 === card2.rank() || card2.rank() + 1 === card1.rank()) {
    return PAIR_SCORE;
  } 
}
class Player {
  static get VERSION() {
    return "0.1";
  }


  static calculateScore(commonCards, selfCards) {
    let val = 0;
    for (const card1 of commonCards) {
      for (const card2 of selfCards) {
        val += matcher(card1, card2)
      }
    }
    return val;
  }

  static betRequest(gameState, bet) {
    var game = new GameState(gameState);
    const commonCards = game.communityCards()
    const selfCards = game.me().holeCards()
    const baseScore = this.calculateScore(commonCards, selfCards)
    const adjustedScore = game.me().score() + baseScore
    if (adjustedScore > lowThreshold) {
     return game.toRaise();
    } else if (adjustedScore > midThreshold) {
      return game.toCall();
    }
    return game.me().bet()
  }
  static showdown(gameState) {
    var game = gameState(gameState)
  }
}

module.exports = Player;
