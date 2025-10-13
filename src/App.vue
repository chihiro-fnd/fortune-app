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

      <!-- <pre>{{ horoscope }}</pre> -->
      <div v-if="userHoroscope">
        <h2>{{ userHoroscope.sign }} の今日の運勢</h2>
        <p>順位: {{ userHoroscope.rank }}</p>
        <p>{{ userHoroscope.content }}</p>
        <p>ラッキーアイテム: {{ userHoroscope.item }}</p>
        <p>ラッキーカラー: {{ userHoroscope.color }}</p>
      </div>
      <button @click="fetchHoroscope">占い結果を取得</button>
      <div v-if="isLoading">読み込み中</div>
      <div v-else-if="errorMessages">エラー：{{ errorMessages }}</div>
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
const isLoading = ref(false)
const errorMessages = ref('')
// ユーザーの星座の運勢
const userHoroscope = ref(null)

const fetchHoroscope = async () => {
  // 今日の日付 'YYYY-MM-DD' 形式 にする
  const today = new Date().toISOString().split('T')[0]
  // console.log(today) // 2025-08-01
  const todaySlash = today.replace(/-/g, '/')
  // console.log(todaySlash) // 2025/08/01
  // 今日の運勢を取得
  const url = `/api/api/horoscope/free/${todaySlash}`
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error('データの取得に失敗しました')
    }
    const data = await response.json()
    // console.log(data) // ← 一旦中身を確認
    // {{horoscope}} にデータを格納
    horoscope.value = data

    // 今日の配列
    const resultArray = data.horoscope?.[todaySlash]

    // zodiacSign（ユーザーの星座） と一致するデータを検索
    userHoroscope.value = resultArray.find(
      (item: { sign: string }) => item.sign === zodiacSign.value,
    )
  } catch (error) {
    console.error('エラー:', error)
    // errorの型エラーを解消
    errorMessages.value = (error as Error).message
  } finally {
    // ローディング状態の管理
    isLoading.value = false
  }
}
</script>

<style scoped>
.p-horoscope-contents {
  margin-top: 40px;
}
</style>
