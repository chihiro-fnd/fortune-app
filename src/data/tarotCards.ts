// 型（type）定義
export type TarotCard = {
  id: number
  name: string
  normalMeaning: string
  reverseMeaning: string
}

// 配列に型をつける
export const tarotCards: TarotCard[] = [
  {
    id: 0,
    name: '愚者（The Fool）',
    normalMeaning: '自由、冒険、無限の可能性',
    reverseMeaning: '無計画、不安定、軽率',
  },
  {
    id: 1,
    name: '魔術師（The Magician）',
    normalMeaning: '創造力、チャンス、行動力',
    reverseMeaning: '詐欺、自己中心、実力不足',
  },
  {
    id: 2,
    name: '女教皇（The High Priestess）',
    normalMeaning: '直感、秘密、知恵',
    reverseMeaning: '無知、優柔不断、冷淡',
  },
  {
    id: 3,
    name: '女帝（The Empress）',
    normalMeaning: '愛情、豊かさ、母性',
    reverseMeaning: '過保護、浪費、甘やかし',
  },
  {
    id: 4,
    name: '皇帝（The Emperor）',
    normalMeaning: '安定、支配、責任感',
    reverseMeaning: '頑固、独裁、支配的',
  },
  {
    id: 5,
    name: '教皇（The Hierophant）',
    normalMeaning: '慣習、信頼、道徳',
    reverseMeaning: '偏見、形式的、束縛',
  },
  {
    id: 6,
    name: '恋人（The Lovers）',
    normalMeaning: '愛、選択、調和',
    reverseMeaning: '優柔不断、誘惑、関係のトラブル',
  },
  {
    id: 7,
    name: '戦車（The Chariot）',
    normalMeaning: '勝利、意志の力、前進',
    reverseMeaning: '暴走、挫折、焦り',
  },
  {
    id: 8,
    name: '力（Strength）',
    normalMeaning: '勇気、内面の強さ、忍耐',
    reverseMeaning: '弱さ、不安、自信喪失',
  },
  {
    id: 9,
    name: '隠者（The Hermit）',
    normalMeaning: '内省、孤独、真理の探求',
    reverseMeaning: '孤立、閉じこもり、迷い',
  },
  {
    id: 10,
    name: '運命の輪（Wheel of Fortune）',
    normalMeaning: '幸運、チャンス、変化',
    reverseMeaning: '不運、停滞、チャンスを逃す',
  },
  {
    id: 11,
    name: '正義（Justice）',
    normalMeaning: '公平、バランス、判断力',
    reverseMeaning: '不正、偏り、不公平',
  },
  {
    id: 12,
    name: '吊るされた男（The Hanged Man）',
    normalMeaning: '忍耐、自己犠牲、新しい視点',
    reverseMeaning: '無駄な犠牲、停滞、逃避',
  },
  {
    id: 13,
    name: '死神（Death）',
    normalMeaning: '終わりと始まり、再生',
    reverseMeaning: '抵抗、変化を拒む、停滞',
  },
  {
    id: 14,
    name: '節制（Temperance）',
    normalMeaning: '調和、バランス、節度',
    reverseMeaning: '不調和、極端、無節制',
  },
  {
    id: 15,
    name: '悪魔（The Devil）',
    normalMeaning: '欲望、束縛、魅力',
    reverseMeaning: '解放、執着を手放す、中毒',
  },
  {
    id: 16,
    name: '塔（The Tower）',
    normalMeaning: '崩壊、衝撃、目覚め',
    reverseMeaning: '回避、寸前の危機、抵抗',
  },
  {
    id: 17,
    name: '星（The Star）',
    normalMeaning: '希望、癒し、インスピレーション',
    reverseMeaning: '失望、現実逃避、希望喪失',
  },
  {
    id: 18,
    name: '月（The Moon）',
    normalMeaning: '直感、夢、不安定',
    reverseMeaning: '混乱、誤解、真実が見えない',
  },
  {
    id: 19,
    name: '太陽（The Sun）',
    normalMeaning: '喜び、成功、成長',
    reverseMeaning: '傲慢、空回り、過信',
  },
  {
    id: 20,
    name: '審判（Judgement）',
    normalMeaning: '再生、許し、決断',
    reverseMeaning: '過去への執着、優柔不断',
  },
  {
    id: 21,
    name: '世界（The World）',
    normalMeaning: '完成、達成、旅の終わり',
    reverseMeaning: '未完成、停滞、終わらない課題',
  },
]
