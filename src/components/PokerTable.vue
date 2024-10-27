<template>
  <div class="poker-table">
    <PokerPlayer
      v-for="player in players"
      :key="player.id"
      :totalPlayers="totalPlayers"
      :player="player"
      :showdown="status === 'done'"
    />

    <div class="winner" v-if="status === 'done'" @click="deal()">
      WINNER IS {{ winner.name }}
    </div>
    <div
      class="button"
      v-if="status === 'init' || status === 'done'"
      @click="deal()"
    >
      DEAL
    </div>
    <div class="button" v-if="status === 'drawn'" @click="showdown()">
      SHOWDWON
    </div>
  </div>
</template>

<script setup lang="ts">
import Rule from '../entity/rule/Rule'
import PokerPlayer from './PokerPlayer.vue'
import { PlayersFactory } from '../entity/player/PlayersFactory'
import { Dealer } from '../entity/dealer/Dealer'
import { PokerDeckFactory } from '../entity/poker/PokerDeckFactory'
import { computed, reactive, ref } from 'vue'
import { ScoreCalculator } from '../entity/score/ScoreCalculator'

const totalPlayers = Rule.playerCountLimit
const players = reactive(PlayersFactory.factory(totalPlayers))
const status = ref<'init' | 'drawn' | 'done'>('init')
function deal() {
  const decks = PokerDeckFactory.factory(Rule.deckLimit)
  const dealer = new Dealer(decks, players, Rule.cardNumberForEachPlayer)
  dealer.deal()
  status.value = 'drawn'
}

function showdown() {
  players.forEach(player => {
    player.calculateScore()
  })
  status.value = 'done'
}

const winner = computed(() => {
  if (status.value === 'done') {
    const sortedPlayers = [...players].sort((p0, p1) =>
      ScoreCalculator.getMaxScore(p0.score, p1.score),
    )
    const winner = sortedPlayers[0]
    return winner
  }
  return { name: '' }
})
</script>

<style scoped>
.poker-table {
  position: relative;
  width: 600px;
  height: 600px;
  background-color: #2e8b57;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
}
.button {
  cursor: pointer;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  background-color: white;
  padding: 8px;
}
.button:hover {
  color: #666;
  border: 1px solid #666;
  background-color: f0f0f0;
}

.winner {
  color: #fff;
  font-weight: bold;
  font-size: 28px;
}
</style>
