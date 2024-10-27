export type POKER_NUMBER =
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | 'J'
  | 'Q'
  | 'K'
  | 'A'

export enum POKER_SUIT {
  SPADE = 'Spade',
  HEARD = 'Heart',
  DIAMOND = 'Diamond',
  CLUB = 'Club',
}
export const POKER_ICON = {
  [POKER_SUIT.SPADE]: '♠',
  [POKER_SUIT.HEARD]: '♥',
  [POKER_SUIT.DIAMOND]: '♦',
  [POKER_SUIT.CLUB]: '♧',
}

export const POKER_COLOR = {
  [POKER_SUIT.SPADE]: 'black',
  [POKER_SUIT.HEARD]: 'red',
  [POKER_SUIT.DIAMOND]: 'red',
  [POKER_SUIT.CLUB]: 'black',
}

export interface Poker {
  number: POKER_NUMBER
  suit: POKER_SUIT
}
