import type { Poker } from '@/components/poker/Poker'
import type { ScoreStrategy } from './ScoreStrategy.interface'
import {
  getMostAndBigestCardGroup,
  getPokerNumberValue,
} from './strategyHelper'
export class MostSameCardNumberScoreStrategy implements ScoreStrategy {
  getScore(cards: Poker[]): number {
    return getPokerNumberValue(getMostAndBigestCardGroup(cards)[0].number)
  }
}
