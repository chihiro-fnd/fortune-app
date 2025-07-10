<template>
  <div class="fortune-wrap">
    <div class="p-tarot-contents">
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
    <div class="p-horoscope-contents">
      <h1>星座占い</h1>
      <div class="p-birthday">
        <label for="birthday">生年月日</label>
        <input type="date" id="birthday" name="birthday" v-model="birthday" :max="today" />
      </div>
      <p>星座： {{ zodiacSign }}</p>
      <div class="p-results">
        <h2>今日の運勢</h2>
      </div>
      <!-- <button @click="fetchHoroscope">占い結果を取得</button>
      <pre>{{ horoscopeResult }}</pre> -->

      <pre>{{ horoscope }}</pre>
      <button @click="fetchHoroscope">データを取得</button>
      <!-- 使用するWEB APIのリンク -->
      <ul class="p-link">
        <li>powerd by <a href="http://jugemkey.jp/api/waf/api_free.php">JugemKey</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { tarotCards, type TarotCard } from '@/data/tarotCards'
import { ref, type Ref } from 'vue' // ref型を使う
import { computed } from 'vue' // ref型を使う

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

// 誕生日のデータを文字列としてリアクティブに保持する
const birthday = ref('')
// 今日の日付 'YYYY-MM-DD' 形式 にする
const today = new Date().toISOString().split('T')[0]
// リアクティブなbirthdayに基づいて Date オブジェクトを作る（computedを使う）
const birthDate = computed(() => new Date(birthday.value))

// 月・日を取得
const month = computed(() => birthDate.value.getMonth() + 1)
const day = computed(() => birthDate.value.getDate())

// 星座判定
const zodiacSign = computed(() => {
  const m = month.value
  const d = day.value

  if ((m === 3 && d >= 21) || (m === 4 && d <= 19)) return '牡羊座'
  if ((m === 4 && d >= 20) || (m === 5 && d <= 20)) return '牡牛座'
  if ((m === 5 && d >= 21) || (m === 6 && d <= 21)) return '双子座'
  if ((m === 6 && d >= 22) || (m === 7 && d <= 22)) return '蟹座'
  if ((m === 7 && d >= 23) || (m === 8 && d <= 22)) return '獅子座'
  if ((m === 8 && d >= 23) || (m === 9 && d <= 22)) return '乙女座'
  if ((m === 9 && d >= 23) || (m === 10 && d <= 23)) return '天秤座'
  if ((m === 10 && d >= 24) || (m === 11 && d <= 22)) return '蠍座'
  if ((m === 11 && d >= 23) || (m === 12 && d <= 21)) return '射手座'
  if ((m === 12 && d >= 22) || (m === 1 && d <= 20)) return '山羊座'
  if ((m === 1 && d >= 21) || (m === 2 && d <= 18)) return '水瓶座'
  if ((m === 2 && d >= 19) || (m === 3 && d <= 20)) return '魚座'
  return ''
})

// 占いAPIを取得する
const horoscope = ref(null)

const fetchHoroscope = async () => {
  const url = '/api/api/horoscope/free/2025/07/01'
  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error('データの取得に失敗しました')

    const data = await res.json()
    console.log(data) // ← 一旦中身を確認
    horoscope.value = data
  } catch (error) {
    console.error('エラー:', error)
  }
}
</script>

<style scoped>
.p-horoscope-contents {
  margin-top: 40px;
}
</style>
