# Poker Game

## Game Rule

As Given rule is not explicit, now let's list the game rule.

1. we have 52 poker cards.
2. cards are in 4 suits(sorted by value max -> min): Spade(♠)/heart(♥)/diamond(♦)/club(♧)
3. cards are in 13 numbers(sorted by value min -> max ): 2/3/4/5/6/7/8/9/10/J/Q/K/A
4. before each round of game, we shuffle first.
5. after shuffle we deal to 4 players in turn, each player holds 3 cards.
6. then we find the winner.
7. the player with most same number cards, win. if play has groups of card with same count, choose the group with bigger number.
8. if players tie on rule 7, comparing the cards choosen from rule 7, the player with bigger card number win(accoring to rule 3).
9. if tie,comparing the cards choosen from rule 7, player with bigger suit win(according to rule 2).
10. if tie according to 9, choose a winner from the tie players randomly.(only for 2 more decks case)

- rules 2/3/5 are configurable.
