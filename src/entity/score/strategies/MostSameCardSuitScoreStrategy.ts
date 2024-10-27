import type { Poker } from '@/components/poker/Poker'
import type { ScoreStrategy } from './ScoreStrategy.interface'
import { getMostAndBigestCardGroup, getPokerSuitValue } from './strategyHelper'
export class MostSameCardSuitScoreStrategy implements ScoreStrategy {
  getScore(cards: Poker[]): number {
    return getMostAndBigestCardGroup(cards).reduce(
      (sum, card) => sum + getPokerSuitValue(card.suit),
      0,
    )
  }
}
