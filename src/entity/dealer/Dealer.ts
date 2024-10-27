import type { Player } from '../player/Player'
import type { Poker } from '../poker/Poker'

export class Dealer {
  constructor(
    private cardStack: Poker[],
    private players: Player[],
    private cardNumberForEachPlayer: number,
  ) {}

  deal() {
    this.players.forEach(player => player.fold())

    for (let i = 0; i < this.cardNumberForEachPlayer; i++) {
      this.players.forEach(player => {
        player.draw(this.cardStack.shift()!)
      })
    }
  }
}
