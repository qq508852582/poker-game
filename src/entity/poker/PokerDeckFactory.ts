import { POKER_SUIT, type Poker, type POKER_NUMBER } from './Poker'
import Rule from '../rule/Rule'
import { shuffle } from 'lodash'
export class PokerDeckFactory {
  static factory(deckLimit: number): Poker[] {
    let decks: Poker[] = []
    let oneDeck: Poker[] = []

    Rule.numberSort.forEach(number => {
      Rule.suitsSort.forEach(suit => {
        oneDeck = [
          ...oneDeck,
          { number: number as POKER_NUMBER, suit: suit as POKER_SUIT },
        ]
      })
    })

    for (let deckIndex = 0; deckIndex < deckLimit; deckIndex++) {
      decks = [...decks, ...oneDeck]
    }

    debugger
    return shuffle([...decks])
  }
}
