<template>
  <div class="player-seat" :style="playerStyle">
    <div class="player-portrait">{{ player.name }}</div>

    <div class="poker-container">
      <PokerCard
        :showdown="showdown"
        v-for="card in player.cards"
        :poker="card"
        :key="card.number + card.suit"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { defineProps } from 'vue'
import { Player } from '../entity/player/Player'
import PokerCard from './PokerCard.vue'
const props = defineProps({
  totalPlayers: {
    type: Number,
    required: true,
  },
  player: {
    type: Player,
    required: true,
  },
  showdown: {
    type: Boolean,
    requird: true,
  },
})

const playerStyle = computed(() => ({
  '--total-players': props.totalPlayers,
  '--angle': `calc(360deg / ${props.totalPlayers} * ${props.player.id})`,
  transform: `rotate(var(--angle)) translate(0, -250px) rotate(calc(-1 * var(--angle)))`,
}))
</script>

<style scoped>
.player-seat {
  position: absolute;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.player-portrait {
  width: 80px;
  height: 80px;
  font-size: 16px;
  font-weight: bold;
  background-color: #f0f0f0;
  border: 2px solid #000;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.poker-container {
  display: flex;
}
</style>
