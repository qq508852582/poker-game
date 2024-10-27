<template>
  <div class="card" :style="PokerStyle">
    <div v-if="showdown" class="top">{{ poker.number }}</div>
    <div v-if="showdown" class="suit">{{ icon }}</div>
    <!-- <div class="bottom">{{ poker.number }}</div> -->
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'
import type { Poker } from './poker/Poker'
import { POKER_ICON, POKER_COLOR } from './poker/Poker'
const props = defineProps<{
  poker: Poker
  showdown: boolean
}>()
const PokerStyle = computed(() => ({
  color: POKER_COLOR[props.poker.suit],
}))

const icon = computed(() => POKER_ICON[props.poker.suit])
</script>

<style scoped>
.card {
  min-width: 50px;
  height: 75px;
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4px;
  font-weight: bold;
}

.card .top {
  align-self: center;
}

.card .suit {
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}
</style>
