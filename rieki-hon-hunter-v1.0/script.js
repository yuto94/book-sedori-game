// ===== 設定エリア =====
// あとから差し替えやすいように、URLや基本ルールはここにまとめています。
const gameConfig = {
  gameUrl: "https://example.com",
  timeLimit: 60,
  targetProfit: 10000
};

const adConfig = {
  title: "0からはじめる本せどり基礎マニュアル",
  catchCopy: "リアルでも本せどりゲーム楽しんじゃう？",
  description: "利益本の探し方や、初心者でも迷わない判断基準を基礎から学べます。",
  buttonText: "詳しく見る",
  url: "https://brmk.io/20lHrQ"
};

// ジャンル一覧と表紙テンプレートです。ジャンルを増やすときはここに1行追加します。
const genreConfigs = [
  { name: "ビジネス", coverColor: "blue", icon: "¥", layout: "stripe", highWeight: 5, middleWeight: 3 },
  { name: "スピリチュアル", coverColor: "green", icon: "月", layout: "circle", highWeight: 5, middleWeight: 2 },
  { name: "芸能人", coverColor: "pink", icon: "★", layout: "spotlight", highWeight: 5, middleWeight: 2 },
  { name: "マニアック専門書", coverColor: "black", icon: "鍵", layout: "label", highWeight: 5, middleWeight: 2 },
  { name: "料理", coverColor: "orange", icon: "鍋", layout: "stripe", highWeight: 5, middleWeight: 3 },
  { name: "心理学", coverColor: "purple", icon: "心", layout: "circle", highWeight: 1, middleWeight: 3 },
  { name: "スポーツ", coverColor: "red", icon: "走", layout: "spotlight", highWeight: 1, middleWeight: 3 },
  { name: "旅行", coverColor: "sky", icon: "旅", layout: "label", highWeight: 1, middleWeight: 2 },
  { name: "小説", coverColor: "navy", icon: "物", layout: "stripe", highWeight: 1, middleWeight: 1 },
  { name: "歴史", coverColor: "brown", icon: "城", layout: "label", highWeight: 1, middleWeight: 2 },
  { name: "健康", coverColor: "mint", icon: "整", layout: "circle", highWeight: 1, middleWeight: 2 },
  { name: "自己啓発", coverColor: "yellow", icon: "光", layout: "spotlight", highWeight: 1, middleWeight: 2 },
  { name: "育児", coverColor: "cream", icon: "親", layout: "stripe", highWeight: 1, middleWeight: 2 }
];

// ジャンルごとの架空タイトル候補です。同じゲーム内では重複しないように生成します。
const titlePools = {
  "ビジネス": ["小さな会社の数字の読み方", "朝5分の仕事整理術", "伝わるプレゼンの基本", "ひとり社長の時間術", "新人営業の教科書", "できる人の会議メモ", "週末起業の作戦ノート", "売れる棚づくり入門", "小さな店の利益設計", "はじめての交渉メモ", "社内資料の整え方", "3行で伝える報告術", "数字に強い人の習慣", "街角マーケティング観察記", "在庫を減らす考え方", "小さなチームの段取り術", "値付けの勘どころ", "ひとり仕事の集中法", "失敗しない見積もり入門", "朝礼で使える経営ことば"],
  "スピリチュアル": ["古神道と暮らしの知恵", "月のリズム手帳術", "はじめての開運習慣", "願いが叶うノート術", "星読みカレンダー入門", "神社散歩の小さな作法", "お守りの民俗ノート", "暦で整える毎日", "夢日記と心の声", "石と色のやさしい図鑑", "香りで整える夜時間", "季節の祈りごと", "直感を育てる読書術", "朝の浄化ルーティン", "不思議な縁の見つけ方", "言葉のおまもり帳", "満月前夜の整理術", "小さな祭りの歩き方", "幸運を呼ぶ机まわり", "古い言い伝えの読み解き"],
  "芸能人": ["伝説の俳優が語る人生論", "元アイドルの仕事術", "笑いの現場から", "私の青春エッセイ", "舞台裏のメイク室", "地方ロケ弁ものがたり", "名脇役の静かな流儀", "新人マネージャー奮闘記", "ラジオブースの夜明け", "衣装部屋の秘密メモ", "オーディション前夜", "小さな劇場の拍手", "芸能記者の取材手帳", "長寿番組の作り方", "司会者の聞く力", "引退後のセカンドステージ", "楽屋で生まれた名言", "テレビ黄金期の片隅で", "エキストラの見た現場", "スターを支えた人たち"],
  "マニアック専門書": ["昭和家電修理ハンドブック", "昆虫標本の作り方", "古地図で歩く城下町", "鉄道切符コレクション入門", "手回し計算機の研究", "路地裏看板図鑑", "古い鍵の構造学", "鉱物ラベル整理術", "廃線跡フィールドノート", "紙もの収集の作法", "昔の電話機分解読本", "豆本づくりの細かな技法", "古時計ゼンマイ入門", "港町倉庫の記録術", "模型工具の選び方", "団地給水塔観察帖", "活版印刷の小宇宙", "古道具屋の目利き手帖", "地方民具の分類ノート", "手描き地図の保存法"],
  "料理": ["絶版スパイス料理大全", "毎日つくれる発酵レシピ", "かんたん作り置き100", "お弁当おかず便利帳", "粉もの名人の台所", "昭和喫茶の軽食帖", "野菜を使い切る献立術", "小さな鍋の季節料理", "休日カレー研究室", "郷土おやつ散歩", "保存瓶のごちそう", "手早い魚料理入門", "台所道具の選び方", "家庭中華の火加減", "パン耳おやつ図鑑", "市場で選ぶ旬の味", "はじめての梅しごと", "冷凍上手な晩ごはん", "ひとり分の和定食", "香味野菜の使いこなし"],
  "心理学": ["心が軽くなる心理学", "会話でわかる気持ちの整理", "怒りと距離を置く練習", "小さな不安のほどき方", "人づきあいの境界線", "やさしい認知のレッスン", "聞き上手になる心理メモ", "先延ばしの心理地図", "比べない練習帳", "職場の空気を読む技術", "親子の気持ち翻訳ノート", "眠れない夜の考え方", "心を守る断り方", "初対面が楽になる会話術", "思い込みをほどく質問", "感情日記のはじめ方", "落ち込んだ日の回復メモ", "集中できない人の心理学", "褒め方と受け取り方", "小さな自信の育て方"],
  "スポーツ": ["少年バスケ練習メニュー", "草野球スコアの読み方", "ランニングフォーム手帳", "部活コーチの声かけ術", "週末テニス上達ノート", "サッカー守備の基本図鑑", "卓球ラリー集中法", "水泳ターンの練習帳", "山歩き体力づくり", "ストレッチ再入門", "スポーツ栄養の小さな本", "試合前のメンタル準備", "ジュニア選手の育て方", "ゴルフ練習場メモ", "自転車旅の体づくり", "審判目線のルール入門", "勝てるチームの準備術", "朝練のメニュー集", "ケガを防ぐ動き方", "応援席から見る戦術"],
  "旅行": ["絶景ドライブ100選", "古い温泉街の歩き方", "ひとり旅の荷造り術", "駅弁でめぐる小旅行", "港町カメラ散歩", "週末ローカル線案内", "小さな宿の楽しみ方", "市場めぐり旅ノート", "雨の日の京都裏通り", "島旅の持ちもの帳", "朝市から始める旅", "城下町カフェ案内", "地図を読んで歩く旅", "親子で行く博物館旅", "旅先で困らない会話集", "日帰り山里さんぽ", "サービスエリア研究帖", "古民家宿の選び方", "海辺の町の路地歩き", "旅の予算メモ入門"],
  "小説": ["雨の日の喫茶店", "夜明け前の古本市", "坂道に咲く手紙", "港の見える文房具店", "小さな駅の忘れもの", "二階席の約束", "夏帽子と路面電車", "夕焼け団地の合唱", "古い鍵と日曜日", "冬の校庭にて", "硝子窓の向こう側", "猫背の探偵ノート", "月曜日の郵便受け", "路地裏ベーカリー事件", "青い傘の帰り道", "星空図書室の秘密", "春待ち商店街", "海風アパートメント", "最後の文化祭準備室", "花屋の奥の小さな椅子"],
  "歴史": ["戦国武将の人間関係", "江戸の商い入門", "古文書を読む第一歩", "幕末町人の暮らし", "城下町の地名図鑑", "大名行列の舞台裏", "寺子屋の一日", "明治新聞の読み解き", "街道と宿場の記録", "武家屋敷の生活道具", "戦国合戦の補給線", "江戸の物価ノート", "藩校で学んだ人々", "古い年表の楽しみ方", "近代建築散歩", "歴史人物の手紙術", "港と貿易の日本史", "古写真で見る町の記憶", "庶民が見た維新", "祭礼から読む地域史"],
  "健康": ["体を整える朝の習慣", "肩こりをゆるめる生活術", "眠りの質を上げる小事典", "歩き方から整える健康法", "台所から始める養生", "目を休める一日設計", "疲れを残さない入浴術", "ゆっくり筋トレ入門", "姿勢メモの作り方", "季節の不調ケア", "呼吸を深める練習帳", "冷え対策の暮らし方", "健康診断の読み方メモ", "水分補給の小さな工夫", "更年期を軽くする知恵", "座りすぎを防ぐ習慣", "足裏から見る体調", "朝食で整える一週間", "ストレス疲れ回復ノート", "家でできる体力測定"],
  "自己啓発": ["夢を叶えるノート術", "朝10分の目標整理", "続ける人の小さな工夫", "自分会議のはじめ方", "迷いを減らす決め方", "毎日を整える質問集", "やりたいこと棚卸し", "一年計画の作り方", "小さな達成を集める本", "時間を味方にする習慣", "言葉にする練習帳", "自分を責めない改善術", "予定を詰めない勇気", "読書メモで変わる毎日", "朝型にならない朝活", "未来の自分への手紙", "ひとり反省会の終わらせ方", "心が動く目標の立て方", "小さな挑戦の記録術", "休日リセットノート"],
  "育児": ["親子で楽しむ読書時間", "はじめての読み聞かせ", "朝の支度を楽にする工夫", "子どもの気持ちメモ", "お片づけ声かけノート", "親子で作る週末ごはん", "寝る前10分の会話術", "きょうだいげんかのほどき方", "園グッズ準備の知恵", "小学生の宿題サポート", "親も休める育児計画", "雨の日のおうち遊び", "子ども写真整理術", "家族会議のはじめ方", "ほめ方しかり方の練習", "親子で歩く図書館案内", "おこづかい会議入門", "忙しい朝の連絡帳", "子どもの質問に答える本", "週末自然遊びのヒント"]
};

// 利益ランクは4種類だけ。出現数を調整すると難易度を変えられます。
const profitRanks = [
  { name: "high", count: 3, message: "大当たり！" },
  { name: "middle", count: 6, message: "ナイス仕入れ！" },
  { name: "low", count: 10, message: "利益あり！" },
  { name: "minus", count: 11, message: "赤字かも…" }
];

// ランクごとの価格生成ルールです。profitだけが答え合わせ用の内部値です。
const priceRules = {
  high: { profitMin: 3000, profitMax: 6500, costMin: 800, costMax: 1400, feeMin: 1300, feeMax: 2200 },
  middle: { profitMin: 400, profitMax: 1500, costMin: 220, costMax: 700, feeMin: 450, feeMax: 850 },
  low: { profitMin: 1, profitMax: 150, costMin: 220, costMax: 550, feeMin: 300, feeMax: 650 },
  minus: { profitMin: -300, profitMax: 0, costMin: 220, costMax: 650, feeMin: 320, feeMax: 700 }
};

// 今回の本棚に並ぶ本です。ゲーム開始ごとにgenerateBookshelf()で作り直します。
let books = [];

// チュートリアルの文章は、この配列を編集すると差し替えられます。
const tutorialPages = [
  { title: "古本屋へようこそ！", text: "今日は60秒で利益本を探します。" },
  { title: "本をタップして確認", text: "仕入れ価格・販売価格・手数料が見られます。" },
  { title: "判断はテンポよく", text: "暗算して、利益が出そうなら「仕入れる」。微妙なら「スルー」。考えている間も時間は止まりません。" },
  { title: "目標利益は10,000円", text: "60秒以内に達成を目指しましょう！" }
];

const storyLines = [
  "今日は本せどりをしに\n古本屋へやってきた。",
  "今日もいっぱい利益本を\n見つけるぞ！",
  "目標利益は10000円！",
  "よーし、\n仕入れ開始！！"
];

const screens = document.querySelectorAll(".screen");
const bookshelf = document.getElementById("bookshelf");
const shelfArea = document.getElementById("shelfArea");
const modalLayer = document.getElementById("modalLayer");
const modalCover = document.getElementById("modalCover");
const toast = document.getElementById("toast");
const storyDialog = document.getElementById("storyDialog");
const storyText = document.getElementById("storyText");
const storyHint = document.getElementById("storyHint");

let tutorialIndex = 0;
let storyIndex = 0;
let storyCharIndex = 0;
let storyTimer = null;
let isTypingStory = false;
let selectedBook = null;
let pickedBooks = [];
let pickedIds = new Set();
let currentProfit = 0;
let timeLeft = gameConfig.timeLimit;
let timerId = null;
let gameEnded = false;
let audioContext = null;
let lastTickSecond = null;

// ===== 小さな共通関数 =====
function yen(value) {
  return value.toLocaleString("ja-JP") + "円";
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function roundToTen(value) {
  return Math.round(value / 10) * 10;
}

function shuffle(list) {
  const copied = [...list];
  for (let index = copied.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copied[index], copied[randomIndex]] = [copied[randomIndex], copied[index]];
  }
  return copied;
}

function weightedPick(items, weightKey) {
  const total = items.reduce((sum, item) => sum + item[weightKey], 0);
  let ticket = Math.random() * total;
  for (const item of items) {
    ticket -= item[weightKey];
    if (ticket <= 0) return item;
  }
  return items[items.length - 1];
}

function pickGenre(rank) {
  if (rank === "high") return weightedPick(genreConfigs, "highWeight");
  if (rank === "middle") return weightedPick(genreConfigs, "middleWeight");
  return genreConfigs[randomInt(0, genreConfigs.length - 1)];
}

function pickUniqueTitle(genreName, usedTitles) {
  const candidates = shuffle(titlePools[genreName]);
  const title = candidates.find((candidate) => !usedTitles.has(candidate));
  if (title) {
    usedTitles.add(title);
    return title;
  }

  const fallbackTitle = `${genreName}の掘り出し本 ${usedTitles.size + 1}`;
  usedTitles.add(fallbackTitle);
  return fallbackTitle;
}

function generatePrices(rank) {
  const rule = priceRules[rank];
  const profit = roundToTen(randomInt(rule.profitMin, rule.profitMax));
  const cost = roundToTen(randomInt(rule.costMin, rule.costMax));
  const fee = roundToTen(randomInt(rule.feeMin, rule.feeMax));
  const price = Math.max(300, cost + fee + profit);
  return { cost, price, fee, profit };
}

function buildRankDeck() {
  return shuffle(profitRanks.flatMap((rank) => Array(rank.count).fill(rank.name)));
}

function generateBookshelf() {
  const usedTitles = new Set();
  books = buildRankDeck().map((rank, index) => {
    const genre = pickGenre(rank);
    const prices = generatePrices(rank);
    return {
      id: index + 1,
      genre: genre.name,
      title: pickUniqueTitle(genre.name, usedTitles),
      rank,
      coverColor: genre.coverColor,
      coverIcon: genre.icon,
      coverLayout: genre.layout,
      ...prices
    };
  });
}

// 画面は全部HTML内に置き、表示する画面だけscreen-activeを付け替えます。
function showScreen(id) {
  screens.forEach((screen) => screen.classList.toggle("screen-active", screen.id === id));
}

// 広告文言はadConfigから流し込むので、HTMLを直接触らずに差し替えできます。
function setupAds() {
  document.getElementById("adCatchSmall").textContent = adConfig.catchCopy;
  document.getElementById("adTitleSmall").textContent = adConfig.title;
  document.getElementById("adCatch").textContent = adConfig.catchCopy;
  document.getElementById("adTitle").textContent = adConfig.title;
  document.getElementById("adDescription").textContent = adConfig.description;
  document.getElementById("adDetailButton").textContent = adConfig.buttonText;
}

// 本棚に30冊を並べます。表紙の色はcoverColorからCSSクラスに変換しています。
function renderBooks() {
  bookshelf.innerHTML = "";
  books.forEach((book) => {
    const button = document.createElement("button");
    button.className = `book cover-${book.coverColor} cover-layout-${book.coverLayout}`;
    button.type = "button";
    button.dataset.bookId = book.id;
    button.innerHTML = `<span class="book-icon">${book.coverIcon}</span><span class="book-title">${book.title}</span>`;
    button.addEventListener("click", () => openBookModal(book.id));
    bookshelf.appendChild(button);
  });
}

// 仕入れ済みの本には、本棚上で「仕入れ済み」表示を付けます。
function updatePickedMarks() {
  document.querySelectorAll(".book").forEach((bookNode) => {
    const id = Number(bookNode.dataset.bookId);
    bookNode.classList.toggle("book-picked", pickedIds.has(id));
  });
}

// 本をタップしたときのポップアップです。ここでは利益額を表示しません。
function openBookModal(bookId) {
  if (gameEnded) return;

  selectedBook = books.find((book) => book.id === bookId);
  if (!selectedBook) return;

  modalCover.className = `modal-cover cover-${selectedBook.coverColor} cover-layout-${selectedBook.coverLayout}`;
  modalCover.innerHTML = `<span class="modal-icon">${selectedBook.coverIcon}</span><span class="modal-title-on-cover">${selectedBook.title}</span>`;
  document.getElementById("modalGenre").textContent = selectedBook.genre;
  document.getElementById("modalTitle").textContent = selectedBook.title;
  document.getElementById("modalCost").textContent = yen(selectedBook.cost);
  document.getElementById("modalPrice").textContent = yen(selectedBook.price);
  document.getElementById("modalFee").textContent = yen(selectedBook.fee);
  document.getElementById("buyButton").disabled = pickedIds.has(selectedBook.id);
  document.getElementById("buyButton").textContent = pickedIds.has(selectedBook.id) ? "仕入れ済み" : "🛒仕入れる";

  shelfArea.classList.add("dimmed");
  modalLayer.classList.add("show");
  modalLayer.setAttribute("aria-hidden", "false");
}

// 「仕入れる」か「スルー」を押したあとだけ閉じます。
function closeBookModal() {
  selectedBook = null;
  shelfArea.classList.remove("dimmed");
  modalLayer.classList.remove("show");
  modalLayer.setAttribute("aria-hidden", "true");
}

// 上部の時間・目標・カゴ冊数をまとめて更新します。利益はゲーム中に見せません。
function updateHud() {
  document.getElementById("timeLeft").textContent = timeLeft;
  document.getElementById("cartCount").textContent = pickedBooks.length;
  document.getElementById("timeStat").classList.toggle("warning", timeLeft <= 10 && !gameEnded);
}

function clearStoryTimers() {
  clearTimeout(storyTimer);
  storyTimer = null;
}

function typeStoryLine() {
  clearStoryTimers();
  const line = storyLines[storyIndex];
  storyCharIndex = 0;
  isTypingStory = true;
  storyText.textContent = "";
  storyHint.textContent = "▼";
  storyHint.classList.remove("show");
  storyDialog.classList.add("typing");

  const tick = () => {
    storyCharIndex += 1;
    storyText.textContent = line.slice(0, storyCharIndex);

    if (storyCharIndex < line.length) {
      storyTimer = setTimeout(tick, 75);
      return;
    }

    isTypingStory = false;
    storyDialog.classList.remove("typing");
    storyHint.classList.add("show");
  };

  tick();
}

function advanceStory() {
  clearStoryTimers();
  if (isTypingStory) {
    storyText.textContent = storyLines[storyIndex];
    isTypingStory = false;
    storyDialog.classList.remove("typing");
    storyHint.classList.add("show");
    return;
  }

  if (storyIndex >= storyLines.length - 1) {
    startCountdown(false);
    return;
  }

  storyIndex += 1;
  typeStoryLine();
}

function startStoryIntro() {
  resetGame();
  storyIndex = 0;
  showScreen("storyScreen");
  typeStoryLine();
}

function getMainResultTitle(percent) {
  if (currentProfit >= gameConfig.targetProfit) return "目標達成！";
  if (percent >= 80) return "惜しい！";
  if (currentProfit > 0) return "ファイト！";
  return "こんな日もある！";
}

function getBrainAffiliateMessage(profit) {
  if (profit >= 10000) {
    return {
      headline: "すごい！リアル副業としても狙えるかも",
      body: "本せどりは、正しい基礎を知って続ければ、月1〜3万円の副業として十分現実的です。まずは初心者向けに全体像を学ぶのがおすすめです。"
    };
  }
  if (profit >= 3000) {
    return {
      headline: "センスあり！次はリアル店舗でも挑戦",
      body: "ゲームで利益を出せたなら、本せどりの考え方と相性がいいかもしれません。現実の仕入れでも、基本を覚えると一気に見つけやすくなります。"
    };
  }
  return {
    headline: "惜しい！最初はみんな迷います",
    body: "利益本探しは、見るポイントを知らないと難しく感じます。まずは基本の型を知ると、仕入れ判断がかなりラクになります。"
  };
}

function updateBrainAffiliateCard() {
  const message = getBrainAffiliateMessage(currentProfit);
  document.getElementById("brainAffiliateHeadline").textContent = message.headline;
  document.getElementById("brainAffiliateMessage").textContent = message.body;
}

// 利益額に合わせて、短い演出メッセージを切り替えます。
function getRankMessage(book) {
  if (book.profit >= 800) return { text: "大当たり！", rank: "high" };
  if (book.profit >= 300) return { text: "ナイス仕入れ！", rank: "middle" };
  if (book.profit > 0) return { text: "利益あり！", rank: "low" };
  return { text: "赤字かも…", rank: "minus" };
}

// 画面下に一瞬だけ出るメッセージです。
function showToast(text, rank = "") {
  toast.textContent = text;
  toast.className = `toast ${rank}`;
  void toast.offsetWidth;
  toast.classList.add("show");
}

// ===== 効果音 =====
// 外部音源を使わず、Web Audio APIで短い音を作っています。
function ensureAudioContext() {
  if (!audioContext) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    audioContext = new AudioContextClass();
  }
}

function playTone(frequency, duration, type = "sine", delay = 0, volume = 0.05) {
  if (!audioContext) return;

  const start = audioContext.currentTime + delay;
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, start);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(volume, start + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start(start);
  oscillator.stop(start + duration + 0.02);
}

function playBuySound(profit) {
  ensureAudioContext();
  if (profit >= 800) {
    playTone(740, 0.12, "triangle", 0, 0.06);
    playTone(980, 0.14, "triangle", 0.08, 0.06);
    playTone(1320, 0.18, "triangle", 0.17, 0.05);
  } else if (profit >= 300) {
    playTone(660, 0.12, "square", 0, 0.04);
    playTone(880, 0.12, "square", 0.08, 0.04);
  } else if (profit > 0) {
    playTone(420, 0.12, "sine", 0, 0.045);
  } else {
    playTone(180, 0.18, "sawtooth", 0, 0.045);
    playTone(120, 0.15, "sawtooth", 0.08, 0.035);
  }
}

function playSkipSound() {
  ensureAudioContext();
  playTone(260, 0.08, "sine", 0, 0.035);
}

function playTickSound() {
  ensureAudioContext();
  playTone(880, 0.055, "square", 0, 0.025);
}

function playFanfare() {
  ensureAudioContext();
  [523, 659, 784, 1046].forEach((tone, index) => playTone(tone, 0.13, "triangle", index * 0.09, 0.06));
}

// ===== ゲーム操作 =====
function buySelectedBook() {
  if (!selectedBook || gameEnded || pickedIds.has(selectedBook.id)) return;

  const pickedBookId = selectedBook.id;
  pickedIds.add(selectedBook.id);
  pickedBooks.push(selectedBook);
  currentProfit += selectedBook.profit;
  const result = getRankMessage(selectedBook);
  playBuySound(selectedBook.profit);
  showToast(result.text, result.rank);
  closeBookModal();
  updatePickedMarks();
  updateHud();

  const bookNode = document.querySelector(`[data-book-id="${pickedBookId}"]`);
  if (bookNode) {
    bookNode.classList.remove("spark");
    void bookNode.offsetWidth;
    bookNode.classList.add("spark");
  }

  if (currentProfit >= gameConfig.targetProfit) {
    endGame(true);
  }
}

function skipSelectedBook() {
  if (!selectedBook || gameEnded) return;

  const bookNode = document.querySelector(`[data-book-id="${selectedBook.id}"]`);
  playSkipSound();
  showToast("棚に戻した");
  closeBookModal();
  if (bookNode) {
    bookNode.classList.remove("skip-shake");
    void bookNode.offsetWidth;
    bookNode.classList.add("skip-shake");
  }
}

function resetGame() {
  clearStoryTimers();
  generateBookshelf();
  renderBooks();
  pickedBooks = [];
  pickedIds = new Set();
  currentProfit = 0;
  timeLeft = gameConfig.timeLimit;
  gameEnded = false;
  lastTickSecond = null;
  clearInterval(timerId);
  closeBookModal();
  updatePickedMarks();
  updateHud();
}

// カウントダウン後にゲーム画面へ進みます。
function startCountdown(shouldReset = true) {
  if (shouldReset) resetGame();
  showScreen("countdownScreen");
  const sequence = ["3", "2", "1", "START！！"];
  let index = 0;
  const countdownNumber = document.getElementById("countdownNumber");
  countdownNumber.textContent = sequence[index];
  playToneAfterGesture(520);

  const countdownId = setInterval(() => {
    index += 1;
    countdownNumber.textContent = sequence[index];
    countdownNumber.classList.remove("countdown-number");
    void countdownNumber.offsetWidth;
    countdownNumber.classList.add("countdown-number");
    playToneAfterGesture(index === 3 ? 900 : 520 + index * 120);

    if (index === sequence.length - 1) {
      clearInterval(countdownId);
      setTimeout(startGame, 900);
    }
  }, 1000);
}

function playToneAfterGesture(freq) {
  ensureAudioContext();
  playTone(freq, 0.08, "sine", 0, 0.035);
}

function startGame() {
  showScreen("gameScreen");
  updateHud();
  timerId = setInterval(() => {
    if (gameEnded) return;

    timeLeft -= 1;
    if (timeLeft <= 10 && timeLeft > 0 && lastTickSecond !== timeLeft) {
      lastTickSecond = timeLeft;
      playTickSound();
    }
    updateHud();

    if (timeLeft <= 0) {
      endGame(false);
    }
  }, 1000);
}

// クリア・時間切れのどちらでも、1秒メッセージを見せて結果画面へ進みます。
function endGame(isClear) {
  if (gameEnded) return;

  gameEnded = true;
  clearInterval(timerId);
  closeBookModal();
  document.getElementById("bigMessage").textContent = isClear ? "MISSION COMPLETE！" : "TIME UP！";
  showScreen("messageScreen");
  if (isClear) playFanfare();
  setTimeout(() => showResult(isClear), 1000);
}

// 結果画面では、ここで初めて仕入れた本の利益を答え合わせできます。
function showResult(isClear) {
  const percent = Math.max(0, Math.floor((currentProfit / gameConfig.targetProfit) * 100));
  document.getElementById("resultTitle").textContent = getMainResultTitle(percent);
  document.getElementById("resultProfit").textContent = yen(currentProfit);
  document.getElementById("resultCount").textContent = pickedBooks.length + "冊";
  document.getElementById("resultTarget").textContent = yen(gameConfig.targetProfit);
  document.getElementById("resultPercent").textContent = percent + "%";
  updateBrainAffiliateCard();
  renderPickedList();
  showScreen("resultScreen");
}

function renderPickedList() {
  const pickedList = document.getElementById("pickedList");
  if (pickedBooks.length === 0) {
    pickedList.innerHTML = `<p class="picked-empty">まだ仕入れた本はありません。</p>`;
    return;
  }

  pickedList.innerHTML = pickedBooks.map((book) => `
    <div class="picked-item ${book.profit >= 0 ? "profit-plus" : "profit-minus"}">
      <strong>${book.title}</strong>
      <span><small>仕入れ価格</small>${yen(book.cost)}</span>
      <span><small>販売価格</small>${yen(book.price)}</span>
      <span><small>手数料</small>${yen(book.fee)}</span>
      <b><small>利益</small>${yen(book.profit)}</b>
    </div>
  `).join("");
}

function updateTutorial() {
  const page = tutorialPages[tutorialIndex];
  document.getElementById("tutorialPageNow").textContent = tutorialIndex + 1;
  document.getElementById("tutorialTitle").textContent = page.title;
  document.getElementById("tutorialText").textContent = page.text;
  document.getElementById("tutorialBackButton").textContent = tutorialIndex === 0 ? "TOPへ" : "戻る";
  document.getElementById("tutorialNextButton").textContent = tutorialIndex === tutorialPages.length - 1 ? "ゲームスタート" : "次へ";
  document.getElementById("tutorialDots").innerHTML = tutorialPages.map((_, index) => (
    `<span class="${index === tutorialIndex ? "active" : ""}"></span>`
  )).join("");
}

// X投稿画面を別タブで開きます。gameConfig.gameUrlもここで一緒に渡しています。
function shareResult() {
  const percent = Math.max(0, Math.floor((currentProfit / gameConfig.targetProfit) * 100));
  const shareText = [
    "本せどり仕入れゲーム「利益本ハンター」で遊んでみた！📚",
    "",
    `見込み利益：${yen(currentProfit)}`,
    `仕入れ冊数：${pickedBooks.length}冊`,
    `達成率：${percent}%`,
    "",
    "あなたは60秒で目標利益1万円を超えられる？",
    "",
    "#利益本ハンター",
    "#本せどり"
  ].join("\n");
  const shareUrl = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(shareText) + "&url=" + encodeURIComponent(gameConfig.gameUrl);
  window.open(shareUrl, "_blank", "noopener");
}

function openAdUrl() {
  window.open(adConfig.url, "_blank", "noopener");
}

function bindEvents() {
  document.getElementById("startButton").addEventListener("click", startStoryIntro);
  document.getElementById("storyScreen").addEventListener("click", advanceStory);
  document.getElementById("tutorialButton").addEventListener("click", () => {
    tutorialIndex = 0;
    updateTutorial();
    showScreen("tutorialScreen");
  });
  document.getElementById("tutorialBackButton").addEventListener("click", () => {
    if (tutorialIndex === 0) {
      showScreen("topScreen");
    } else {
      tutorialIndex -= 1;
      updateTutorial();
    }
  });
  document.getElementById("tutorialNextButton").addEventListener("click", () => {
    if (tutorialIndex === tutorialPages.length - 1) {
      startStoryIntro();
    } else {
      tutorialIndex += 1;
      updateTutorial();
    }
  });
  document.getElementById("buyButton").addEventListener("click", buySelectedBook);
  document.getElementById("skipButton").addEventListener("click", skipSelectedBook);
  document.getElementById("retryButton").addEventListener("click", startCountdown);
  document.getElementById("adBanner").addEventListener("click", openAdUrl);
  document.getElementById("adBannerButton").addEventListener("click", (event) => {
    event.stopPropagation();
    openAdUrl();
  });
  document.getElementById("shareButton").addEventListener("click", shareResult);
  document.getElementById("adDetailButton").addEventListener("click", openAdUrl);
  document.getElementById("backToResultButton").addEventListener("click", () => showScreen("resultScreen"));
}

// ===== 初期化 =====
setupAds();
generateBookshelf();
renderBooks();
updateTutorial();
updateHud();
bindEvents();
