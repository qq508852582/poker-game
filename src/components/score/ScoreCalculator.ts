import type { Poker } from '../poker/Poker'
import { MostSameCardNumberScoreStrategy } from './strategies/MostSameCardNumberScoreStrategy'
import { MostSameCardScoreStrategy } from './strategies/MostSameCardScoreStrategy'
import { MostSameCardSuitScoreStrategy } from './strategies/MostSameCardSuitScoreStrategy'

export class ScoreCalculator {
  static strategies = [
    new MostSameCardScoreStrategy(),
    new MostSameCardNumberScoreStrategy(),
    new MostSameCardSuitScoreStrategy(),
  ]

  static getScore(cards: Poker[]): number[] {
    return this.strategies.reduce(
      (ret: number[], s) => [...ret, s.getScore(cards)],
      [],
    )
  }

  static getMaxScore(s0: number[], s1: number[]): 1 | -1 {
    const [s0FirstScore, ...s0Rest] = s0
    const [s1FirstScore, ...s1Rest] = s1
    if (s0FirstScore > s1FirstScore) {
      return -1
    }
    if (s0FirstScore < s1FirstScore) {
      return 1
    }
    return ScoreCalculator.getMaxScore(s0Rest, s1Rest)
  }
}
