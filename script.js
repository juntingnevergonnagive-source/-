// 完整 78 張韋特塔羅牌資料庫
const tarotDeck = [
  // 大阿爾克那 (Major Arcana 22張)
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

  // 權杖牌組 (Wands 14張)
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

  // 聖杯牌組 (Cups 14張)
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
  { name: "聖杯國王 (King of Cups)", keyword: "情感成熟、掌控情緒、包容、智慧" },

  // 寶劍牌組 (Swords 14張)
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

  // 星幣/金幣牌組 (Pentacles 14張)
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

// 動態紫金星雲與閃爍繁星 Canvas 渲染
function initStarfield() {
  const canvas = document.getElementById('starfield');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let stars = [];
  let shootingStars = [];
  let nebulaAngle = 0;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    stars = [];
    const count = Math.floor((canvas.width * canvas.height) / 2000);
    const colors = ['#ffffff', '#fde047', '#c084fc', '#60a5fa', '#f472b6'];

    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        alpha: Math.random(),
        speed: Math.random() * 0.025 + 0.008,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
  }

  function drawScene() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#030712';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    nebulaAngle += 0.003;
    const cx = canvas.width / 2;
    const cy = canvas.height / 3;

    const grad1 = ctx.createRadialGradient(
      cx + Math.cos(nebulaAngle) * 90, cy + Math.sin(nebulaAngle) * 60, 20,
      cx, cy, canvas.width * 0.75
    );
    grad1.addColorStop(0, 'rgba(88, 28, 135, 0.45)');
    grad1.addColorStop(0.5, 'rgba(30, 27, 75, 0.25)');
    grad1.addColorStop(1, 'rgba(3, 7, 18, 0)');
    ctx.fillStyle = grad1;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const grad2 = ctx.createRadialGradient(
      cx - Math.sin(nebulaAngle) * 110, cy - Math.cos(nebulaAngle) * 70, 10,
      cx, cy, canvas.width * 0.55
    );
    grad2.addColorStop(0, 'rgba(217, 119, 6, 0.22)');
    grad2.addColorStop(1, 'rgba(3, 7, 18, 0)');
    ctx.fillStyle = grad2;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {
      star.alpha += star.speed;
      if (star.alpha > 1 || star.alpha < 0) star.speed = -star.speed;

      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = star.color;
      ctx.globalAlpha = Math.max(0, Math.min(1, star.alpha));
      ctx.fill();
    });

    if (Math.random() < 0.035) {
      shootingStars.push({
        x: Math.random() * canvas.width * 0.8,
        y: Math.random() * (canvas.height * 0.4),
        length: Math.random() * 140 + 70,
        speed: Math.random() * 12 + 7,
        alpha: 1,
        angle: Math.PI / 4
      });
    }

    for (let i = shootingStars.length - 1; i >= 0; i--) {
      const s = shootingStars[i];
      s.x += Math.cos(s.angle) * s.speed;
      s.y += Math.sin(s.angle) * s.speed;
      s.alpha -= 0.02;

      if (s.alpha <= 0) {
        shootingStars.splice(i, 1);
        continue;
      }

      ctx.beginPath();
      const tailX = s.x - Math.cos(s.angle) * s.length;
      const tailY = s.y - Math.sin(s.angle) * s.length;
      const lineGrad = ctx.createLinearGradient(s.x, s.y, tailX, tailY);
      lineGrad.addColorStop(0, `rgba(253, 224, 71, ${s.alpha})`);
      lineGrad.addColorStop(0.5, `rgba(168, 85, 247, ${s.alpha * 0.7})`);
      lineGrad.addColorStop(1, `rgba(253, 224, 71, 0)`);

      ctx.strokeStyle = lineGrad;
      ctx.lineWidth = 2.5;
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(tailX, tailY);
      ctx.stroke();
    }

    ctx.globalAlpha = 1;
    requestAnimationFrame(drawScene);
  }

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
  drawScene();
}

// 抽牌處理
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

  // 1. 洗牌並隨機抽牌
  let cardCount = spreadType === 'single' ? 1 : 3;
  let selectedCards = [];
  let shuffled = [...tarotDeck].sort(() => 0.5 - Math.random());

  for (let i = 0; i < cardCount; i++) {
    const isReversed = Math.random() < 0.3;
    selectedCards.push({
      ...shuffled[i],
      isReversed: isReversed,
      positionLabel: getPositionLabel(spreadType, i)
    });
  }

  // 2. 顯示卡牌區
  renderCards(selectedCards);
  document.getElementById('cardDisplayArea').classList.remove('hidden');

  // 3. 顯示 AI 載入區域
  document.getElementById('resultArea').classList.remove('hidden');
  document.getElementById('loadingSpinner').classList.remove('hidden');
  document.getElementById('aiReadingContent').classList.add('hidden');

  // 平滑滾動到卡牌區
  document.getElementById('cardDisplayArea').scrollIntoView({ behavior: 'smooth' });

  // 4. 呼叫 Gemini AI
  await fetchGeminiReading(apiKey, userQuestion, selectedCards);
}

// 取得位置標籤
function getPositionLabel(spreadType, index) {
  if (spreadType === 'single') return '核心指引牌';
  if (spreadType === 'timeline') {
    return ['【過去脈絡】', '【現在狀態】', '【未來趨勢】'][index];
  }
  if (spreadType === 'choices') {
    return ['【選項 A 狀態】', '【選項 B 狀態】', '【綜合智慧建議】'][index];
  }
  return `第 ${index + 1} 張`;
}

// 渲染卡牌
function renderCards(cards) {
  const container = document.getElementById('cardsContainer');
  container.innerHTML = '';

  cards.forEach((card) => {
    const cardEl = document.createElement('div');
    cardEl.className = 'tarot-card w-48 h-72 bg-slate-950/90 border-2 border-amber-500/50 rounded-xl p-4 flex flex-col justify-between items-center text-center backdrop-blur-md cursor-pointer';

    cardEl.innerHTML = `
      <div class="text-xs text-amber-400 font-bold tracking-widest uppercase border-b border-amber-500/30 pb-1.5 w-full font-serif-tc">
        ${card.positionLabel}
      </div>
      <div class="my-auto">
        <div class="text-4xl mb-2.5 filter drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]">${card.isReversed ? '🙃' : '🃏'}</div>
        <div class="font-serif-tc text-base font-bold text-amber-100">
          ${card.name}
        </div>
        <div class="text-xs font-bold ${card.isReversed ? 'text-purple-400' : 'text-amber-300'} mt-1">
          ${card.isReversed ? '【逆位】' : '【正位】'}
        </div>
      </div>
      <div class="text-[11px] text-slate-300 border-t border-slate-800/80 pt-2 w-full font-light">
        ${card.keyword}
      </div>
    `;
    container.appendChild(cardEl);
  });
}

// 呼叫 Gemini API（依序嘗試目前實際可用的穩定模型）
async function fetchGeminiReading(apiKey, question, cards) {
  const cardsText = cards.map(c => `・${c.positionLabel}：${c.name}（${c.isReversed ? '逆位' : '正位'}）- 核心語意：${c.keyword}`).join('\n');

  const prompt = `你是一位精通 78 張韋特塔羅牌與心理諮商學的專業塔羅神秘學大師。
請針對問卜者的問題，與本次抽出的牌陣進行詳細、具體且富有洞察力的深度解牌。

【問卜者提問】：${question}

【抽出的牌陣】：
${cardsText}

請以繁體中文撰寫一份完整詳細的解牌報告，文章結構請包含：
1. 🌟 **總體能量與局勢分析**：針對問卜者的問題，說明目前整體能量場與的核心情況。
2. 🔮 **牌面深度剖析與象徵意涵**：逐張詳細解說每張牌（含正/逆位）在其位置所代表的內在心理狀態、外在環境影響與牌面隱喻。
3. 💡 **關鍵引導與行動建議**：針對該問題給予具體、切實可行的行動方針與心態調整建議。

請保持文筆溫暖、睿智、富含啟發性與心理指引價值。`;

  // 目前實際存在、免費 API Key 也能存取的穩定模型（依優先順序）
  const modelList = [
    'gemini-2.5-flash',
    'gemini-2.0-flash-001',
    'gemini-2.5-flash-lite'
  ];

  let success = false;
  let errorLog = [];
  const cleanKey = apiKey.trim();

  for (const modelName of modelList) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${cleanKey}`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      });

      const data = await response.json();

      if (data.error) {
        errorLog.push(`[${modelName}] ${data.error.message || JSON.stringify(data.error)}`);
        continue;
      }

      if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
        const aiReply = data.candidates[0].content.parts[0].text;

        const formattedHtml = aiReply
          .split('\n\n')
          .map(p => `<p class="mb-3 leading-relaxed">${p.replace(/\n/g, '<br>')}</p>`)
          .join('');

        document.getElementById('loadingSpinner').classList.add('hidden');
        const contentDiv = document.getElementById('aiReadingContent');
        contentDiv.innerHTML = formattedHtml;
        contentDiv.classList.remove('hidden');
        success = true;
        break;
      } else {
        errorLog.push(`[${modelName}] 回應中沒有可用的內容（可能被安全設定擋下）`);
      }
    } catch (err) {
      errorLog.push(`[${modelName}] 連線例外：${err.message}`);
    }
  }

  if (!success) {
    document.getElementById('loadingSpinner').classList.add('hidden');
    const contentDiv = document.getElementById('aiReadingContent');
    contentDiv.innerHTML = `
      <div class="p-4 bg-red-950/50 border border-red-500/60 rounded-xl text-red-200 text-sm space-y-2">
        <p class="font-bold text-red-400"><i class="fa-solid fa-triangle-exclamation mr-1"></i> 解牌連線失敗</p>
        <p class="text-xs text-slate-300 whitespace-pre-line">${errorLog.join('\n')}</p>
        <p class="text-xs text-slate-400">請嘗試：<br>1. 確認 API Key 是否正確、前後無多餘空白字符<br>2. 到 Google AI Studio 確認該金鑰有啟用 Gemini API 配額<br>3. 按 Ctrl+F5 (Mac: Cmd+Shift+R) 清除瀏覽器快取</p>
      </div>
    `;
    contentDiv.classList.remove('hidden');
  }
}

// 頁面載入觸發星空繪製
window.addEventListener('DOMContentLoaded', () => {
  initStarfield();
});
