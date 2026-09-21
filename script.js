// 塔羅牌資料庫
const TAROT_DECK = [
  { name: "愚者 (The Fool)", icon: "fa-solid fa-feather", upright: "新的開始、冒險、自由、無限可能", reversed: "輕率、冒險過度、盲目、猶豫不決" },
  { name: "魔術師 (The Magician)", icon: "fa-solid fa-wand-magic-sparkles", upright: "創造力、技巧、主動性、實現目標", reversed: "欺騙、才能未發揮、缺乏計劃、意志薄弱" },
  { name: "女祭司 (The High Priestess)", icon: "fa-solid fa-book-bookmark", upright: "直覺、潛意識、智慧、內省", reversed: "情緒化、壓抑、表面化、忽視直覺" },
  { name: "女皇 (The Empress)", icon: "fa-solid fa-crown", upright: "豐盛、母愛、自然、創造力、繁榮", reversed: "過度依賴、浪費、缺乏安全感、阻礙成長" },
  { name: "皇帝 (The Emperor)", icon: "fa-solid fa-chess-king", upright: "權威、結構、穩定、領導力、控制", reversed: "專制、控制狂、缺乏紀律、不靈活" },
  { name: "教皇 (The Hierophant)", icon: "fa-solid fa-place-of-worship", upright: "傳統、信仰、指引、體制、學習", reversed: "打破常規、固執、盲從、非傳統信念" },
  { name: "戀人 (The Lovers)", icon: "fa-solid fa-heart", upright: "愛、和諧、選擇、價值觀契合", reversed: "不和諧、選擇困難、價值觀衝突、逃避責任" },
  { name: "戰車 (The Chariot)", icon: "fa-solid fa-shield-halved", upright: "意志力、勝利、專注、突破困境", reversed: "失控、方向感缺失、衝動、挫折" },
  { name: "力量 (Strength)", icon: "fa-solid fa-hand-fist", upright: "勇氣、耐心、包容、內在力量", reversed: "自我懷疑、軟弱、情緒失控、自信不足" },
  { name: "隱士 (The Hermit)", icon: "fa-solid fa-lantern", upright: "尋求真理、內省、孤獨、智慧指引", reversed: "孤立過度、退縮、偏執、拒絕協助" },
  { name: "命運之輪 (Wheel of Fortune)", icon: "fa-solid fa-arrows-spin", upright: "轉機、好運、週期變遷、命中注定", reversed: "抗拒改變、不幸、低潮、意外波折" },
  { name: "正義 (Justice)", icon: "fa-solid fa-scale-balanced", upright: "公平、真理、因果、明智決策", reversed: "不公、偏見、避責、延誤判定" },
  { name: "倒吊人 (The Hanged Man)", icon: "fa-solid fa-person-arrow-down-to-line", upright: "換位思考、犧牲、等待、啟示", reversed: "無謂犧牲、拖延、抗拒、原地踏步" },
  { name: "死神 (Death)", icon: "fa-solid fa-skull", upright: "結束、轉變、新生、舊局告終", reversed: "抗拒改變、恐懼未知、拖泥帶水" },
  { name: "節制 (Temperance)", icon: "fa-solid fa-glass-water", upright: "平衡、調和、耐心、適度與和諧", reversed: "失衡、過度、缺乏自律、衝突" },
  { name: "惡魔 (The Devil)", icon: "fa-solid fa-spaghetti-monster-flying", upright: "束縛、慾望、物質誘惑、執著", reversed: "擺脫束縛, 覺醒, 解放, 恢復自由" },
  { name: "高塔 (The Tower)", icon: "fa-solid fa-bolt", upright: "驟變、突發衝擊、破舊立新、啟示", reversed: "險境避開、恐懼改變、強行延緩衝擊" },
  { name: "星星 (The Star)", icon: "fa-solid fa-star-of-david", upright: "希望、靈感、療癒、平靜、信心", reversed: "絕望、缺乏信心、消極、期望落空" },
  { name: "月亮 (The Moon)", icon: "fa-solid fa-moon", upright: "不安、潛意識、混亂、直覺與幻象", reversed: "迷霧散去、解開誤會、克服恐懼" },
  { name: "太陽 (The Sun)", icon: "fa-solid fa-sun", upright: "成功、喜悅、活力、清晰、光明", reversed: "暫時低潮、過度樂觀、成功受阻" },
  { name: "審判 (Judgement)", icon: "fa-solid fa-bell", upright: "覺醒、召喚、重大決定、自我反省", reversed: "自我懷疑、逃避召喚、悔恨、拖延" },
  { name: "世界 (The World)", icon: "fa-solid fa-earth-americas", upright: "圓滿、完成、成就、新階段開始", reversed: "未完成、遺憾、缺乏收尾、延遲" }
];

// 牌陣配置
const SPREAD_CONFIGS = {
  single: { count: 1, labels: ["當前指引"], promptTitle: "單牌指引" },
  timeline: { count: 3, labels: ["過去脈絡", "現在狀態", "未來趨勢"], promptTitle: "時間之流牌陣（過去 / 現在 / 未來）" },
  choices: { count: 3, labels: ["選項 A 情況", "選項 B 情況", "綜合建議"], promptTitle: "二選一二元解析牌陣（選項A / 選項B / 建議）" }
};

let currentDrawnCards = [];

// 抽牌主處理邏輯
async function handleDrawCard() {
  const questionInput = document.getElementById("userQuestion").value.trim();
  if (!questionInput) {
    alert("請先輸入你想要請教塔羅的問題喔！");
    return;
  }

  const selectedSpread = document.querySelector('input[name="spreadType"]:checked').value;
  const config = SPREAD_CONFIGS[selectedSpread];

  const drawBtn = document.getElementById("drawBtn");
  drawBtn.disabled = true;
  drawBtn.classList.add("opacity-50", "cursor-not-allowed");

  // 1. 不重複隨機抽牌
  currentDrawnCards = [];
  const deckCopy = [...TAROT_DECK];
  for (let i = 0; i < config.count; i++) {
    const randomIndex = Math.floor(Math.random() * deckCopy.length);
    const card = deckCopy.splice(randomIndex, 1)[0];
    const isReversed = Math.random() < 0.5;
    currentDrawnCards.push({
      card,
      isReversed,
      label: config.labels[i]
    });
  }

  // 2. 渲染卡牌 HTML
  const cardsContainer = document.getElementById("cardsContainer");
  cardsContainer.innerHTML = "";

  currentDrawnCards.forEach((item, index) => {
    const cardHtml = `
      <div class="flex flex-col items-center space-y-2">
        <span class="text-xs text-amber-300 bg-amber-950/60 border border-amber-800/80 px-2.5 py-1 rounded-full font-semibold">
          ${item.label}
        </span>
        <div id="card-${index}" class="tarot-card ${item.isReversed ? 'card-reversed' : ''} w-48 sm:w-52 h-80 sm:h-96 cursor-pointer" onclick="flipCard(${index})">
          <div class="card-inner relative w-full h-full text-center shadow-2xl rounded-2xl">
            <!-- 牌背 -->
            <div class="card-back absolute w-full h-full rounded-2xl p-3 flex flex-col items-center justify-between border-2 border-amber-500/40">
              <div class="w-full h-full border border-amber-500/20 rounded-xl flex flex-col items-center justify-between p-4 bg-purple-950/20">
                <i class="fa-solid fa-sun text-amber-400/40 text-xl"></i>
                <div class="text-center">
                  <i class="fa-solid fa-compass text-amber-400/60 text-3xl mb-2 animate-spin-slow"></i>
                  <p class="text-xs text-amber-200/60 font-serif tracking-widest">點擊翻牌</p>
                </div>
                <i class="fa-solid fa-moon text-amber-400/40 text-xl"></i>
              </div>
            </div>
            <!-- 牌面 -->
            <div class="card-front absolute w-full h-full rounded-2xl border-2 border-amber-400/60 flex flex-col justify-between p-4 bg-gradient-to-b from-slate-900 via-purple-950 to-slate-900">
              <div class="text-right">
                <span class="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
                  ${item.isReversed ? '逆位' : '正位'}
                </span>
              </div>
              <div class="my-auto text-center space-y-3">
                <div class="card-icon text-4xl sm:text-5xl text-amber-300">
                  <i class="${item.card.icon}"></i>
                </div>
                <h3 class="font-serif text-lg sm:text-xl font-bold text-amber-100">${item.card.name}</h3>
                <p class="text-[11px] text-slate-300 px-1 line-clamp-2">
                  ${item.isReversed ? item.card.reversed : item.card.upright}
                </p>
              </div>
              <div class="text-center text-[10px] text-amber-400/60 tracking-wider uppercase font-serif">
                ARCANE TAROT
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    cardsContainer.insertAdjacentHTML('beforeend', cardHtml);
  });

  document.getElementById("cardDisplayArea").classList.remove("hidden");

  // 3. 逐張翻牌動畫
  currentDrawnCards.forEach((_, index) => {
    setTimeout(() => {
      document.getElementById(`card-${index}`)?.classList.add("flipped");
    }, 300 + index * 250);
  });

  // 4. 啟動 AI 解牌
  await generateAIInterpretation(questionInput, config, currentDrawnCards);

  drawBtn.disabled = false;
  drawBtn.classList.remove("opacity-50", "cursor-not-allowed");
}

// 手動翻牌
function flipCard(index) {
  const cardElement = document.getElementById(`card-${index}`);
  if (cardElement) {
    cardElement.classList.toggle("flipped");
  }
}

// 呼叫 API 進行個人化解讀
async function generateAIInterpretation(question, config, drawnCards) {
  const resultArea = document.getElementById("resultArea");
  const loadingSpinner = document.getElementById("loadingSpinner");
  const aiContent = document.getElementById("aiReadingContent");
  const customApiKey = document.getElementById("apiKeyInput").value.trim();

  resultArea.classList.remove("hidden");
  loadingSpinner.classList.remove("hidden");
  aiContent.classList.add("hidden");
  
  resultArea.scrollIntoView({ behavior: 'smooth' });

  // 彙整牌組資訊 Prompt
  const cardsSummary = drawnCards.map(item => 
    `・【${item.label}】：${item.card.name}（${item.isReversed ? '逆位' : '正位'}）- 象徵：${item.isReversed ? item.card.reversed : item.card.upright}`
  ).join("\n");

  const prompt = `你是一位專業、溫暖且具備深刻洞察力的塔羅占卜師。
使用者提出的問題是：『${question}』
使用牌陣為：『${config.promptTitle}』

抽出的塔羅牌如下：
${cardsSummary}

請針對使用者的『具體問題』，結合上述牌陣與牌義（包含正逆位），進行一份條理分明、有深度且具備實用建議的個人化解讀。

解讀結構請包含：
1. **牌陣整體能量概述**：說明這組牌陣為這個問題帶來的整體氣氛或核心主題。
2. **各位置詳細剖析**：針對牌陣中的每一個位置（如過去/現在/未來或選項A/B），分析個別牌面對於問題的啟示。
3. **綜合解答與建議**：直接回應使用者的提問，並給予 2-3 點可行、積極的行動指引。

語氣請保持優雅、同理、充滿啟發性，並使用 Markdown 格式（可用 **粗體** 或列點）。格式請直接輸出內文，無需額外引號。`;

  try {
    const apiKey = customApiKey || "AIzaSyDummyKey_ForTestOnly"; 
    
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash:generateContent?key=${apiKey}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    });

    if (!response.ok) {
      throw new Error(`API 請求失敗 (HTTP ${response.status})`);
    }

    const data = await response.json();
    const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text || "抱歉，目前無法取得解牌結果，請稍後再試。";
    
    loadingSpinner.classList.add("hidden");
    aiContent.innerHTML = formatMarkdown(rawText);
    aiContent.classList.remove("hidden");

  } catch (error) {
    console.error("Gemini API Error:", error);
    loadingSpinner.classList.add("hidden");
    
    // 離線預設 Fallback
    const fallbackText = `
      <h3>🔮 牌陣整體能量概述</h3>
      <p>針對你所詢問的「<strong>${question}</strong>」，這次抽出的牌陣揭示了重要的能量流動與轉折訊息。</p>
      
      <h3>✨ 各位置詳細剖析</h3>
      <ul>
        ${drawnCards.map(item => `
          <li><strong>${item.label} - ${item.card.name} (${item.isReversed ? '逆位' : '正位'})：</strong>
          代表「${item.isReversed ? item.card.reversed : item.card.upright}」，提示在此環節中需要注意內部心態調整與外部環境變化。</li>
        `).join('')}
      </ul>
      
      <h3>💡 綜合解答與建議</h3>
      <p>這組牌陣提醒你保持順應與自信。釐清當前真正的瓶頸，採取漸進式的行動。</p>
      <ul>
        <li><strong>直面內心：</strong>審視當前選擇背後真正驅動你的動機。</li>
        <li><strong>穩健前行：</strong>不急於一時，按照自己的節奏進行改變。</li>
      </ul>
      <p class="text-xs text-amber-400/80 mt-4">（註：此為離線示範解讀。若要取得 Gemini AI 的即時動態解讀，請於上方設定區貼上有效的 Gemini API Key。）</p>
    `;
    
    aiContent.innerHTML = fallbackText;
    aiContent.classList.remove("hidden");
  }
}

// Markdown 格式化轉換工具
function formatMarkdown(text) {
  return text
    .replace(/### (.*)/g, '<h3>$1</h3>')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/^\* (.*)/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>)/s, '<ul>$1<\/ul>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^/, '<p>')
    .replace(/$/, '</p>');
}
