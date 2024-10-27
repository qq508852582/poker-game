import type { Poker } from '../poker/Poker'
import { ScoreCalculator } from '../score/ScoreCalculator'

export class Player {
  cards: Poker[]
  name: string
  score: number[]
  constructor(public readonly id: number) {
    this.cards = []
    this.name = 'P' + id
    this.score = []
  }

  fold() {
    this.cards = []
    this.score = []
  }
  draw(card: Poker) {
    this.cards = [...this.cards, card]
  }

  calculateScore() {
    this.score = ScoreCalculator.getScore(this.cards)
  }
}
