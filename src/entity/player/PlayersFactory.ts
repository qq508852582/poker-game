import { Player } from './Player'

export class PlayersFactory {
  static factory(playerCountLimit: number) {
    let players: Player[] = []
    for (let i = 1; i <= playerCountLimit; i++) {
      players = [...players, new Player(i)]
    }
    return players
  }
}
