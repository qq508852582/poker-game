<template>
  <div class="poker-table">
    <PokerPlayer
      v-for="player in players"
      :key="player.id"
      :totalPlayers="totalPlayers"
      :player="player"
      :showdown="status === 'done'"
    />

    <div v-if="status === 'init' || status === 'done'" @click="deal()">
      DEAL
    </div>
    <div v-if="status === 'drawn'" @click="showdown()">SHOWDWON</div>
    <div v-if="status === 'done'" @click="deal()">
      WINNER IS {{ winner.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import Rule from './rule/Rule'
import PokerPlayer from './PokerPlayer.vue'
import { PlayersFactory } from './player/PlayersFactory'
import { Dealer } from './dealer/Dealer'
import { PokerDeckFactory } from './poker/PokerDeckFactory'
import { computed, reactive, ref } from 'vue'
import { ScoreCalculator } from './score/ScoreCalculator'

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

.player {
  position: absolute;
  width: 80px;
  height: 80px;
  background-color: #f0f0f0;
  border: 2px solid #000;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
}
</style>
