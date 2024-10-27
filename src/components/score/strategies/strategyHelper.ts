import type { Poker, POKER_NUMBER, POKER_SUIT } from '@/components/poker/Poker'
import Rule from '@/components/rule/Rule'
import { groupBy } from 'lodash'

export const getMostAndBigestCardGroup = (cards: Poker[]) => {
  return Object.values(groupBy(cards, (card: Poker) => card.number)).reduce(
    (ret, groups) => {
      if (groups.length > ret.length) {
        return groups
      }
      if (groups.length < ret.length) {
        return ret
      }
      if (
        getPokerNumberValue(groups[0].number) >
        getPokerNumberValue(ret[0].number)
      ) {
        return groups
      }
      return ret
    },
    [],
  )
}

export const getPokerNumberValue = (number: POKER_NUMBER) => {
  return Rule.numberSort.findIndex(r => r === number)
}

export const getPokerSuitValue = (suit: POKER_SUIT) => {
  return Rule.suitsSort.findIndex(r => r === suit)
}
