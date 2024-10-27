import type { Poker } from '@/components/poker/Poker'
import type { ScoreStrategy } from './ScoreStrategy.interface'
import { getMostAndBigestCardGroup } from './strategyHelper'
export class MostSameCardScoreStrategy implements ScoreStrategy {
  getScore(cards: Poker[]): number {
    return getMostAndBigestCardGroup(cards).length
  }
}
