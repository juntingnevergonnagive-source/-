// 完整 78 張塔羅牌資料庫 (22 張大阿爾克那 + 56 張小阿爾克那)
const tarotDeck = [
  // ---------------- 大阿爾克那 (Major Arcana 22張) ----------------
  { name: "0. 愚者 (The Fool)", keyword: "新的開始、冒險、自由、純真" },
  { name: "I. 魔術師 (The Magician)", keyword: "創造力、技能、意志力、資源" },
  { name: "II. 女祭司 (The High Priestess)", keyword: "直覺、潛意識、智慧、神祕" },
  { name: "III. 皇后 (The Empress)", keyword: "豐盛、滋養、愛、母性" },
  { name: "IV. 皇帝 (The Emperor)", keyword: "權威、結構、控制、穩定" },
  { name: "V. 教皇 (The Hierophant)", keyword: "傳統、信仰、指引、規範" },
  { name: "VI. 戀人 (The Lovers)", keyword: "選擇、結合、愛、價值觀" },
  { name: "VII. 戰車 (The Chariot)", keyword: "意志力、勝利、自律、克服困難" },
  { name: "VIII. 力量 (Strength)", keyword: "勇氣、耐心、包容、內在力量" },
  { name: "IX. 隱士 (The Hermit)", keyword: "內省、尋求智慧、孤獨、引路" },
  { name: "X. 命運之輪 (Wheel of Fortune)", keyword: "轉折點、運氣、週期、契機" },
  { name: "XI. 正義 (Justice)", keyword: "公平、真相、因果、決策" },
  { name: "XII. 倒吊人 (The Hanged Man)", keyword: "換位思考、等待、犧牲、臣服" },
  { name: "XIII. 死神 (Death)", keyword: "結束、轉化、重生、新階段" },
  { name: "XIV. 節制 (Temperance)", keyword: "平衡、和諧、調和、耐心" },
  { name: "XV. 惡魔 (The Devil)", keyword: "執著、慾望、束縛、物質" },
  { name: "XVI. 塔 (The Tower)", keyword: "突變、破除偽裝、覺醒、重塑" },
  { name: "XVII. 星星 (The Star)", keyword: "希望、靈感、療癒、信心" },
  { name: "XVIII. 月亮 (The Moon)", keyword: "不安、潛意識、幻象、直覺" },
  { name: "XIX. 太陽 (The Sun)", keyword: "喜悅、成功、活力、光明" },
  { name: "XX. 審判 (Judgment)", keyword: "召喚、覺醒、反省、重大決定" },
  { name: "XXI. 世界 (The World)", keyword: "圓滿、完成、旅程終點、整體" },

  // ---------------- 權杖牌組 (Wands - 火元素 14張) ----------------
  { name: "權杖首牌 (Ace of Wands)", keyword: "靈感、新熱情、衝勁、潛力" },
  { name: "權杖二 (Two of Wands)", keyword: "規劃、遠見、抉擇、探索" },
  { name: "權杖三 (Three of Wands)", keyword: "擴張、遠景、進展、準備出發" },
  { name: "權杖四 (Four of Wands)", keyword: "慶祝、和諧、奠基、家園" },
  { name: "權杖五 (Five of Wands)", keyword: "競爭、衝突、意見不合、挑戰" },
  { name: "權杖六 (Six of Wands)", keyword: "勝利、榮譽、認同、自信" },
  { name: "權杖七 (Seven of Wands)", keyword: "堅守陣地、防衛、不屈不撓" },
  { name: "權杖八 (Eight of Wands)", keyword: "迅速行動、訊息、變化、進展" },
  { name: "權杖九 (Nine of Wands)", keyword: "防備、堅持、最後防線、韌性" },
  { name: "權杖十 (Ten of Wands)", keyword: "重負、壓力、責任、過勞" },
  { name: "權杖侍從 (Page of Wands)", keyword: "探索、好奇心、熱情消息、學習" },
  { name: "權杖騎士 (Knight of Wands)", keyword: "冒險、衝勁、行動派、熱血" },
  { name: "權杖王后 (Queen of Wands)", keyword: "自信、魅力、熱情、獨立" },
  { name: "權杖國王 (King of Wands)", keyword: "領導力、願景、果斷、企業家精神" },

  // ---------------- 聖杯牌組 (Cups - 水元素 14張) ----------------
  { name: "聖杯首牌 (Ace of Cups)", keyword: "新情感、愛、直覺、心靈豐沛" },
  { name: "聖杯二 (Two of Cups)", keyword: "夥伴關係、吸引力、互信、合作" },
  { name: "聖杯三 (Three of Cups)", keyword: "歡慶、友誼、聚會、分享" },
  { name: "聖杯四 (Four of Cups)", keyword: "冷漠、倦怠、忽視機會、沉思" },
  { name: "聖杯五 (Five of Cups)", keyword: "失落、悲傷、懊悔、焦點偏差" },
  { name: "聖杯六 (Six of Cups)", keyword: "懷念、童心、贈予、溫暖回憶" },
  { name: "聖杯七 (Seven of Cups)", keyword: "幻想、多種選擇、迷茫、白日夢" },
  { name: "聖杯八 (Eight of Cups)", keyword: "轉身離開、尋求更高追求、放手" },
  { name: "聖杯九 (Nine of Cups)", keyword: "願望實現、滿足、享受、物質快樂" },
  { name: "聖杯十 (Ten of Cups)", keyword: "美滿家庭、情感圓滿、和諧幸福" },
  { name: "聖杯侍從 (Page of Cups)", keyword: "感性訊息、創意、直覺萌芽" },
  { name: "聖杯騎士 (Knight of Cups)", keyword: "浪漫、追求者、理想主義、邀請" },
  { name: "聖杯王后 (Queen of Cups)", keyword: "同理心、溫柔、直覺強大、滋養" },
  { name: "聖杯國王 (King of Kings)", keyword: "情感成熟、掌控情緒、包容、智慧" },

  // ---------------- 寶劍牌組 (Swords - 風元素 14張) ----------------
  { name: "寶劍首牌 (Ace of Swords)", keyword: "突破、清晰思考、真相、心智力量" },
  { name: "寶劍二 (Two of Swords)", keyword: "僵局、逃避決定、抗拒真相" },
  { name: "寶劍三 (Three of Swords)", keyword: "心碎、傷痛、悲傷、言語傷害" },
  { name: "寶劍四 (Four of Swords)", keyword: "休息、休養、沉思、恢復能量" },
  { name: "寶劍五 (Five of Swords)", keyword: "爭執、兩敗俱傷、自私勝出" },
  { name: "寶劍六 (Six of Swords)", keyword: "療癒過渡、渡過難關、平息" },
  { name: "寶劍七 (Seven of Swords)", keyword: "不誠實、策略、私下行動、逃避責任" },
  { name: "寶劍八 (Eight of Swords)", keyword: "受困、自我設限、無助感" },
  { name: "寶劍九 (Nine of Swords)", keyword: "焦慮、噩夢、過度擔憂、失眠" },
  { name: "寶劍十 (Ten of Swords)", keyword: "底線、結束、谷底反彈、解脫" },
  { name: "寶劍侍從 (Page of Swords)", keyword: "警覺、求知慾、搜集資訊、敏銳" },
  { name: "寶劍騎士 (Knight of Swords)", keyword: "急躁、勇往直前、犀利、果斷" },
  { name: "寶劍王后 (Queen of Swords)", keyword: "理性、獨立思考、清晰邊界、直言" },
  { name: "寶劍國王 (King of Swords)", keyword: "專業權威、公正決策、邏輯強大" },

  // ---------------- 星幣/金幣牌組 (Pentacles - 土元素 14張) ----------------
  { name: "星幣首牌 (Ace of Pentacles)", keyword: "新財務機會、實質回報、繁榮" },
  { name: "星幣二 (Two of Pentacles)", keyword: "平衡資源、多工作業、適應力" },
  { name: "星幣三 (Three of Pentacles)", keyword: "團隊合作、技能展現、建立基礎" },
  { name: "星幣四 (Four of Pentacles)", keyword: "保守、保守資產、拒絕改變" },
  { name: "星幣五 (Five of Pentacles)", keyword: "物質匱乏、孤立無援、經濟困境" },
  { name: "星幣六 (Six of Pentacles)", keyword: "施與受、平衡收支、慷慨援助" },
  { name: "星幣七 (Seven of Pentacles)", keyword: "耐心等待、評估成果、長期投資" },
  { name: "星幣八 (Eight of Pentacles)", keyword: "專注精進、勤奮、技能提升" },
  { name: "星幣九 (Nine of Pentacles)", keyword: "財務獨立、自足、享受成果" },
  { name: "星幣十 (Ten of Pentacles)", keyword: "家族財富、長遠安定、傳承" },
  { name: "星幣侍從 (Page of Pentacles)", keyword: "學習實務、新工作機會、務實" },
  { name: "星幣騎士 (Knight of Pentacles)", keyword: "踏實、負責、勤奮不懈、可靠" },
  { name: "星幣王后 (Queen of Pentacles)", keyword: "務實滋養、豐富家園、安全感" },
  { name: "星幣國王 (King of Pentacles)", keyword: "商業成功、物質豐盛、穩定掌控" }
];

// 處理抽牌邏輯
async function handleDrawCard() {
  const userQuestion = document.getElementById('userQuestion').value.trim();
  const apiKey = document.getElementById('apiKeyInput').value.trim();
  const spreadType = document.querySelector('input[name="spreadType"]:checked').value;

  if (!userQuestion) {
    alert("請先輸入你想要請教塔羅的問題喔！");
    return;
  }

  if (!apiKey) {
    alert("請先貼上你的 Gemini API Key！");
    return;
  }

  // 1. 根據牌陣決定抽牌張數
  let cardCount = spreadType === 'single' ? 1 : 3;
  let selectedCards = [];
  let shuffled = [...tarotDeck].sort(() => 0.5 - Math.random());

  for (let i = 0; i < cardCount; i++) {
    const isReversed = Math.random() < 0.3; // 30% 機率逆位
    selectedCards.push({
      ...shuffled[i],
      isReversed: isReversed,
      positionLabel: getPositionLabel(spreadType, i)
    });
  }

  // 2. 顯示卡牌區
  renderCards(selectedCards);
  document.getElementById('cardDisplayArea').classList.remove('hidden');
  
  // 3. 顯示 AI 解牌區並載入中
  document.getElementById('resultArea').classList.remove('hidden');
  document.getElementById('loadingSpinner').classList.remove('hidden');
  document.getElementById('aiReadingContent').classList.add('hidden');
  
  // 平滑滾動到卡牌區
  document.getElementById('cardDisplayArea').scrollIntoView({ behavior: 'smooth' });

  // 4. 呼叫 Gemini API 進行解牌
  await fetchGeminiReading(apiKey, userQuestion, selectedCards);
}

// 取得牌陣位置名稱
function getPositionLabel(spreadType, index) {
  if (spreadType === 'single') return '指引牌';
  if (spreadType === 'timeline') {
    return ['過去脈絡', '現在狀態', '未來趨勢'][index];
  }
  if (spreadType === 'choices') {
    return ['選項 A 狀態', '選項 B 狀態', '綜合智慧建議'][index];
  }
  return `第 ${index + 1} 張`;
}

// 渲染卡牌 HTML
function renderCards(cards) {
  const container = document.getElementById('cardsContainer');
  container.innerHTML = '';

  cards.forEach((card) => {
    const cardEl = document.createElement('div');
    cardEl.className = 'w-48 h-72 bg-slate-950/90 border-2 border-amber-500/50 rounded-xl p-4 flex flex-col justify-between items-center text-center shadow-[0_0_15px_rgba(245,158,11,0.2)] transition-all duration-500 hover:scale-105 backdrop-blur-md';
    
    cardEl.innerHTML = `
      <div class="text-xs text-amber-400 font-bold tracking-widest uppercase border-b border-amber-500/30 pb-1.5 w-full font-serif-tc">
        ${card.positionLabel}
      </div>
      <div class="my-auto">
        <div class="text-3xl mb-2">${card.isReversed ? '🙃' : '🃏'}</div>
        <div class="font-serif-tc text-base font-bold text-amber-100">
          ${card.name}
        </div>
        <div class="text-xs font-bold ${card.isReversed ? 'text-purple-400' : 'text-amber-300'} mt-1">
          ${card.isReversed ? '【逆位】' : '【正位】'}
        </div>
      </div>
      <div class="text-[11px] text-slate-300 border-t border-slate-800 pt-2 w-full font-light">
        ${card.keyword}
      </div>
    `;
    container.appendChild(cardEl);
  });
}

// 呼叫 Gemini API
async function fetchGeminiReading(apiKey, question, cards) {
  const cardsText = cards.map(c => `・${c.positionLabel}：${c.name}（${c.isReversed ? '逆位' : '正位'}）- 核心語意：${c.keyword}`).join('\n');
  
  const prompt = `你是一位精通塔羅牌與心理學的專業塔羅占卜師。
請根據問卜者的問題與抽出的牌陣，提供一段溫暖、深刻且具有實用指引價值的解牌分析。

【問卜者問題】：${question}

【抽出的牌陣】：
${cardsText}

請用繁體中文回答，架構包含：
1. 🌟 **總體能量回應**：針對問題簡述當前的能量狀態。
2. 🔮 **牌面詳細剖析**：逐張解析每張牌在此位置代表的涵義。
3. 💡 **命運與行動建議**：給予問卜者具體可執行的指引與心態調整建議。`;

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: prompt }]
        }]
      })
    });

    const data = await response.json();

    if (data.error) {
      throw new Error(data.error.message || "API 金鑰無效或請求失敗");
    }

    const aiReply = data.candidates[0].content.parts[0].text;
    
    // 格式化 AI 解讀內容
    const formattedHtml = aiReply
      .split('\n\n')
      .map(p => `<p class="mb-3 leading-relaxed">${p.replace(/\n/g, '<br>')}</p>`)
      .join('');

    document.getElementById('loadingSpinner').classList.add('hidden');
    const contentDiv = document.getElementById('aiReadingContent');
    contentDiv.innerHTML = formattedHtml;
    contentDiv.classList.remove('hidden');

  } catch (error) {
    console.error("Gemini API Error:", error);
    document.getElementById('loadingSpinner').classList.add('hidden');
    const contentDiv = document.getElementById('aiReadingContent');
    contentDiv.innerHTML = `
      <div class="p-4 bg-red-950/40 border border-red-500/50 rounded-xl text-red-200 text-sm">
        <p class="font-bold">❌ 解牌失敗：${error.message}</p>
        <p class="mt-1 text-xs text-slate-400">請檢查：<br>1. API Key 是否貼錯（開頭應為 AIzaSy...，且不要有前後空格）<br>2. 是否已在 Google AI Studio 開通帳號權限。</p>
      </div>
    `;
    contentDiv.classList.remove('hidden');
  }
}
