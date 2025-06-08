<template>
  <div class="p-fortune-contents">
    <h1>タロット占い🔮</h1>
    <button @click="drawCard">カードを引く</button>

    <div class="p-results">
      <h2>今日の運勢</h2>
      <div class="p-results-card" v-if="selectedCard">
        <p>ID: {{ selectedCard.id }}</p>
        <p>名前: {{ selectedCard.name }}</p>
        <p>状態: {{ isReversed ? '正位置' : '逆位置' }}</p>
        <p>意味: {{ isReversed ? selectedCard.normalMeaning : selectedCard.reverseMeaning }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { tarotCards, type TarotCard } from '@/data/tarotCards'
import { ref, type Ref } from 'vue' // ref型を使う

// 選ばれたカード の型付け
// const selectedCard: Ref<number | string | null> = ref(null);
const selectedCard: Ref<TarotCard | null> = ref(null)

// 正位置か逆位置か
const isReversed = ref(true)

// カードを一枚選ぶ関数 drawCard
function drawCard() {
  const index = Math.floor(Math.random() * tarotCards.length)
  const card = tarotCards[index]
  selectedCard.value = card

  // 向き（正か逆か）もランダムに決める
  isReversed.value = Math.random() < 0.5
}
</script>

<style scoped></style>
