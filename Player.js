const GameState = require("./src/GameState");
const lowThreshold = 20;
const midThreshold = 16;
const PAIR_SCORE = 1;

const matcher = (card1, card2) => {
  if (card1.rank() + 1 === card2.rank() || card2.rank() + 1 === card1.rank()) {
    return PAIR_SCORE;
  }
};

const hasPair = (cards) => {
  return cards[0].rank() === cards[1].rank();
};
class Player {
  static get VERSION() {
    return "0.2";
  }

  static calculateScore(commonCards, selfCards) {
    let val = 0;
    for (const card1 of commonCards) {
      for (const card2 of selfCards) {
        val += matcher(card1, card2);
      }
    }
    return val;
  }

  static betRequest(gameState, bet) {
    throw new Error();
    asdfsdfgjh
    var game = new GameState(gameState);
    const commonCards = game.communityCards();
    const selfCards = game.me().holeCards();
    const baseScore = this.calculateScore(commonCards, selfCards);

    const adjustedScore = game.me().score();
    if (adjustedScore >= lowThreshold || hasPair(game.me().holeCards())) {
      bet(game.toRaiseByBlinds(50));
    } else if (adjustedScore > midThreshold) {
      bet(game.toCall());
    }
    bet(0);
  }
  static showdown(gameState) {}
}

module.exports = Player;
