import type { Poker } from '@/components/poker/Poker'

export interface ScoreStrategy {
  getScore(cards: Poker[]): number
}
