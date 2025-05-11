<template>
  <div class="p-fortune-contents">
    <h1>タロット占い🔮</h1>
    <button @click="drawCard">カードを引く</button>

    <div class="p-results">
      <h2>今日の運勢</h2>
      <div class="p-results-card">
        <p></p>
        <p>カードの名前</p>
        <p>カードの内容</p>
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

// カードを一枚選ぶ関数 drawCard
function drawCard() {
  const index = Math.floor(Math.random() * tarotCards.length)
  const card = tarotCards[index]
  selectedCard.value = card
}
</script>

<style scoped></style>
