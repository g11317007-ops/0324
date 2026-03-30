<!DOCTYPE html>
<html lang="zh-Hant">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>能源政策議題 — CER 論證練習</title>

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@400;700;900&family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=JetBrains+Mono:wght@400;500&family=Noto+Sans+TC:wght@300;400;500;700&display=swap" rel="stylesheet" />

  <style>
    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

    :root {
      --bg-deep: #0a0e14;
      --bg-card: #111820;
      --bg-card-alt: #161d28;
      --accent-amber: #f0a500;
      --accent-amber-dim: rgba(240, 165, 0, 0.15);
      --accent-green: #00e89d;
      --accent-green-dim: rgba(0, 232, 157, 0.08);
      --accent-blue: #7c8cf8;
      --accent-blue-dim: rgba(124, 140, 248, 0.12);
      --text-primary: #e8e6e1;
      --text-secondary: #8a94a6;
      --text-muted: #4a5568;
      --border: rgba(255,255,255,0.06);
      --border-focus: rgba(240, 165, 0, 0.4);
      --danger: #ff4757;
      --radius: 12px;
    }

    html { scroll-behavior: smooth; }

    body {
      font-family: 'Noto Sans TC', sans-serif;
      background: var(--bg-deep);
      color: var(--text-primary);
      min-height: 100vh;
      line-height: 1.8;
      overflow-x: hidden;
    }

    body::before {
      content: '';
      position: fixed;
      top: -30%; left: -10%;
      width: 120%; height: 160%;
      background:
        radial-gradient(ellipse 600px 600px at 15% 20%, rgba(240,165,0,0.04) 0%, transparent 70%),
        radial-gradient(ellipse 500px 500px at 85% 70%, rgba(0,232,157,0.03) 0%, transparent 70%),
        repeating-conic-gradient(from 0deg at 50% 40%, transparent 0deg, rgba(240,165,0,0.008) 2deg, transparent 4deg);
      pointer-events: none;
      z-index: 0;
    }

    body::after {
      content: '';
      position: fixed;
      inset: 0;
      background-image:
        url("data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='200' cy='200' rx='180' ry='120' fill='none' stroke='rgba(240,165,0,0.025)' stroke-width='0.8'/%3E%3Cellipse cx='200' cy='200' rx='140' ry='90' fill='none' stroke='rgba(240,165,0,0.02)' stroke-width='0.6'/%3E%3Cellipse cx='200' cy='200' rx='100' ry='65' fill='none' stroke='rgba(240,165,0,0.015)' stroke-width='0.5'/%3E%3Cellipse cx='200' cy='200' rx='60' ry='40' fill='none' stroke='rgba(240,165,0,0.01)' stroke-width='0.4'/%3E%3C/svg%3E");
      opacity: 0.6;
      pointer-events: none;
      z-index: 0;
    }

    .container {
      position: relative;
      z-index: 1;
      max-width: 820px;
      margin: 0 auto;
      padding: 40px 24px 80px;
    }

    .header {
      text-align: center;
      margin-bottom: 48px;
      animation: fadeUp 0.8s ease-out;
    }

    .header-tag {
      display: inline-block;
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: var(--accent-amber);
      background: var(--accent-amber-dim);
      padding: 6px 18px;
      border-radius: 100px;
      border: 1px solid rgba(240,165,0,0.2);
      margin-bottom: 24px;
    }

    .header h1 {
      font-family: 'Noto Serif TC', 'Playfair Display', serif;
      font-weight: 900;
      font-size: clamp(28px, 5vw, 42px);
      line-height: 1.3;
      letter-spacing: -0.5px;
      background: linear-gradient(135deg, var(--text-primary) 0%, var(--accent-amber) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 12px;
    }

    .header .subtitle {
      font-size: 15px;
      color: var(--text-secondary);
      font-weight: 300;
    }

    .passage-card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 36px 32px;
      margin-bottom: 32px;
      position: relative;
      overflow: hidden;
      animation: fadeUp 0.8s ease-out 0.15s both;
    }

    .passage-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0;
      width: 4px; height: 100%;
      background: linear-gradient(180deg, var(--accent-amber), var(--accent-green));
      border-radius: 4px 0 0 4px;
    }

    .passage-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10px;
      letter-spacing: 2.5px;
      text-transform: uppercase;
      color: var(--accent-green);
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .passage-label::before {
      content: '';
      width: 6px; height: 6px;
      background: var(--accent-green);
      border-radius: 50%;
      box-shadow: 0 0 8px var(--accent-green);
      animation: pulse 2s infinite;
    }

    .passage-text {
      font-family: 'Noto Serif TC', serif;
      font-size: 15.5px;
      line-height: 2;
      color: var(--text-primary);
      text-align: justify;
    }

    .passage-text p {
      margin-bottom: 16px;
      text-indent: 2em;
    }

    .passage-text p:last-child {
      margin-bottom: 0;
    }

    .question-card {
      background: var(--bg-card-alt);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 32px;
      margin-bottom: 32px;
      animation: fadeUp 0.8s ease-out 0.3s both;
    }

    .question-card .q-icon {
      width: 44px; height: 44px;
      background: var(--accent-amber-dim);
      border: 1px solid rgba(240,165,0,0.25);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Playfair Display', serif;
      font-size: 22px;
      font-weight: 900;
      font-style: italic;
      color: var(--accent-amber);
      margin-bottom: 18px;
    }

    .question-card .q-text {
      font-size: 16px;
      line-height: 1.9;
      color: var(--text-primary);
      font-weight: 400;
    }

    .question-card .q-text strong {
      color: var(--accent-amber);
      font-weight: 700;
    }

    .cer-guide {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 12px;
      margin-bottom: 32px;
      animation: fadeUp 0.8s ease-out 0.4s both;
    }

    @media (max-width: 640px) {
      .cer-guide { grid-template-columns: 1fr; }
    }

    .cer-item {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 20px 16px;
      text-align: center;
      transition: border-color 0.3s, transform 0.3s;
    }

    .cer-item:hover {
      border-color: var(--border-focus);
      transform: translateY(-2px);
    }

    .cer-letter {
      font-family: 'Playfair Display', serif;
      font-size: 32px;
      font-weight: 900;
      margin-bottom: 4px;
    }

    .cer-item:nth-child(1) .cer-letter { color: var(--accent-amber); }
    .cer-item:nth-child(2) .cer-letter { color: var(--accent-green); }
    .cer-item:nth-child(3) .cer-letter { color: var(--accent-blue); }

    .cer-label {
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.5px;
      margin-bottom: 6px;
    }

    .cer-desc {
      font-size: 12px;
      color: var(--text-secondary);
      line-height: 1.6;
    }

    .response-section {
      animation: fadeUp 0.8s ease-out 0.5s both;
    }

    .response-section label {
      display: block;
      font-size: 14px;
      font-weight: 500;
      color: var(--text-secondary);
      margin-bottom: 10px;
    }

    .textarea-wrap {
      position: relative;
      border-radius: var(--radius);
      background: var(--bg-card);
      border: 1.5px solid var(--border);
      transition: border-color 0.3s, box-shadow 0.3s;
    }

    .textarea-wrap:focus-within {
      border-color: var(--accent-amber);
      box-shadow: 0 0 0 3px var(--accent-amber-dim), 0 8px 32px rgba(0,0,0,0.3);
    }

    .response-textarea {
      width: 100%;
      min-height: 280px;
      padding: 24px;
      background: transparent;
      border: none;
      outline: none;
      color: var(--text-primary);
      font-family: 'Noto Sans TC', sans-serif;
      font-size: 15px;
      line-height: 1.9;
      resize: vertical;
    }

    .response-textarea::placeholder {
      color: var(--text-muted);
      font-style: italic;
    }

    .textarea-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 20px;
      border-top: 1px solid var(--border);
    }

    .char-count {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      color: var(--text-muted);
      transition: color 0.3s;
    }

    .char-count.active { color: var(--text-secondary); }
    .char-count.warn { color: var(--accent-amber); }

    .timestamp {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      color: var(--text-muted);
    }

    .student-info {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin-bottom: 20px;
    }

    @media (max-width: 500px) {
      .student-info { grid-template-columns: 1fr; }
    }

    .field-group label {
      font-size: 12px;
      color: var(--text-muted);
      letter-spacing: 0.5px;
      text-transform: uppercase;
      font-family: 'JetBrains Mono', monospace;
      margin-bottom: 6px;
    }

    .field-input {
      width: 100%;
      padding: 12px 16px;
      background: var(--bg-card);
      border: 1.5px solid var(--border);
      border-radius: 8px;
      color: var(--text-primary);
      font-family: 'Noto Sans TC', sans-serif;
      font-size: 14px;
      outline: none;
      transition: border-color 0.3s, box-shadow 0.3s;
    }

    .field-input:focus {
      border-color: var(--accent-amber);
      box-shadow: 0 0 0 3px var(--accent-amber-dim);
    }

    .submit-row {
      margin-top: 24px;
      display: flex;
      gap: 12px;
      align-items: center;
    }

    .btn-submit {
      flex: 1;
      padding: 16px 32px;
      background: linear-gradient(135deg, var(--accent-amber), #e09100);
      color: var(--bg-deep);
      font-family: 'Noto Sans TC', sans-serif;
      font-size: 16px;
      font-weight: 700;
      letter-spacing: 1px;
      border: none;
      border-radius: 10px;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s, opacity 0.2s;
      position: relative;
      overflow: hidden;
    }

    .btn-submit::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%);
      transform: translateX(-100%);
      transition: transform 0.5s;
    }

    .btn-submit:hover::after { transform: translateX(100%); }
    .btn-submit:hover { transform: translateY(-1px); box-shadow: 0 6px 24px rgba(240,165,0,0.3); }
    .btn-submit:active { transform: translateY(0); }
    .btn-submit:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }

    .status-msg {
      margin-top: 16px;
      padding: 14px 20px;
      border-radius: 10px;
      font-size: 14px;
      line-height: 1.6;
      display: none;
      animation: fadeUp 0.4s ease-out;
    }

    .status-msg.success {
      display: block;
      background: rgba(0,232,157,0.08);
      border: 1px solid rgba(0,232,157,0.2);
      color: var(--accent-green);
    }

    .status-msg.error {
      display: block;
      background: rgba(255,71,87,0.08);
      border: 1px solid rgba(255,71,87,0.2);
      color: var(--danger);
    }

    .status-msg.loading {
      display: block;
      background: var(--accent-amber-dim);
      border: 1px solid rgba(240,165,0,0.2);
      color: var(--accent-amber);
    }

    .feedback-card {
      display: none;
      margin-top: 28px;
      background: linear-gradient(180deg, rgba(124,140,248,0.08), rgba(124,140,248,0.03));
      border: 1px solid rgba(124,140,248,0.22);
      border-radius: var(--radius);
      padding: 28px 24px;
      animation: fadeUp 0.5s ease-out;
    }

    .feedback-card.show {
      display: block;
    }

    .feedback-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      margin-bottom: 18px;
      flex-wrap: wrap;
    }

    .feedback-title {
      font-size: 20px;
      font-weight: 700;
      color: #c9d1ff;
    }

    .feedback-model {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      color: #aeb8ff;
      background: var(--accent-blue-dim);
      border: 1px solid rgba(124,140,248,0.2);
      border-radius: 999px;
      padding: 6px 10px;
    }

    .feedback-block {
      background: rgba(255,255,255,0.02);
      border: 1px solid rgba(255,255,255,0.05);
      border-radius: 10px;
      padding: 16px;
      margin-bottom: 14px;
    }

    .feedback-block:last-child {
      margin-bottom: 0;
    }

    .feedback-block h3 {
      font-size: 14px;
      color: #d9deff;
      margin-bottom: 10px;
    }

    .feedback-block p {
      color: var(--text-primary);
      font-size: 14px;
      line-height: 1.9;
      white-space: pre-wrap;
    }

    .feedback-list {
      list-style: none;
      padding-left: 0;
      display: grid;
      gap: 8px;
    }

    .feedback-list li {
      position: relative;
      padding-left: 18px;
      color: var(--text-primary);
      font-size: 14px;
      line-height: 1.8;
    }

    .feedback-list li::before {
      content: '•';
      position: absolute;
      left: 0;
      top: 0;
      color: var(--accent-blue);
      font-weight: 700;
    }

    .cer-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
    }

    .cer-subcard {
      background: rgba(255,255,255,0.02);
      border-radius: 10px;
      padding: 14px;
      border: 1px solid rgba(255,255,255,0.04);
    }

    .cer-subcard strong {
      display: block;
      margin-bottom: 6px;
      color: #d9deff;
      font-size: 13px;
    }

    .cer-subcard p {
      font-size: 14px;
      color: var(--text-primary);
      white-space: pre-wrap;
    }

    .page-footer {
      margin-top: 56px;
      padding-top: 24px;
      border-top: 1px solid var(--border);
      text-align: center;
      font-size: 12px;
      color: var(--text-muted);
      font-family: 'JetBrains Mono', monospace;
      letter-spacing: 0.5px;
      animation: fadeUp 0.8s ease-out 0.6s both;
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(16px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.4; }
    }

    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: var(--text-muted); border-radius: 3px; }
    ::-webkit-scrollbar-thumb:hover { background: var(--text-secondary); }
  </style>
</head>
<body>
  <div class="container">

    <header class="header">
      <div class="header-tag">科學論證評量 · CER Framework</div>
      <h1 id="promptTitle">台灣能源政策議題</h1>
      <p class="subtitle">閱讀以下背景資料，運用 CER 框架提出你的論點</p>
    </header>

    <article class="passage-card">
      <div class="passage-label">背景資料 Background</div>
      <div class="passage-text" id="promptBackground">
        <p>在2025年，台灣的能源組成滿足國家能源需求所使用的不同能源來源的分佈，包含了來自核能的約80%，以及來自可再生能源和其他能源的約20%（約略的比例）。台灣在能源供應上高度依賴核能發電，作為穩定且大規模的基載電力來源。同時，台灣也致力於推動能源轉型，加速發展可再生能源，以達成減少溫室氣體排放和實現碳中和的國際目標。</p>
        <p>核能發電具有高度穩定性的優勢，因為它不受天氣條件影響，且能持續提供大量電力。此外，核能在發電過程中幾乎不排放溫室氣體，有助於減緩氣候變遷。然而，核能也伴隨著核廢料處理、核安風險以及社會接受度等問題，使其在政策與社會討論中具有高度爭議性。</p>
        <p>在社會中，有關是否應持續以核能作為主要能源來源的辯論相當活躍。一方面，支持者認為核能是兼顧穩定供電與減碳的重要選項；另一方面，反對者則關注核能可能帶來的安全風險與長期環境影響。在氣候變遷的背景下，台灣面臨著減少碳排放與確保能源安全的雙重壓力，使能源政策的選擇更加複雜且關鍵。</p>
      </div>
    </article>

    <div class="question-card">
      <div class="q-icon">Q</div>
      <p class="q-text" id="promptQuestion">
        鑑於應對氣候變遷，你是否支持將「以核能發電作為主要能源來源」的能源政策？請使用 <strong>CER（Claim, Evidence, Reasoning）</strong> 框架來提出你的論點，清楚說明你的立場、支持證據與推理過程。
      </p>
    </div>

    <div class="cer-guide">
      <div class="cer-item">
        <div class="cer-letter">C</div>
        <div class="cer-label">Claim 主張</div>
        <div class="cer-desc">你的立場是什麼？<br />明確表達支持或反對</div>
      </div>
      <div class="cer-item">
        <div class="cer-letter">E</div>
        <div class="cer-label">Evidence 證據</div>
        <div class="cer-desc">有哪些數據或事實<br />支持你的主張？</div>
      </div>
      <div class="cer-item">
        <div class="cer-letter">R</div>
        <div class="cer-label">Reasoning 推理</div>
        <div class="cer-desc">證據如何連結到<br />你的主張？</div>
      </div>
    </div>

    <form id="responseForm" class="response-section" autocomplete="off">
      <div class="student-info">
        <div class="field-group">
          <label for="studentName">姓名 Name</label>
          <input type="text" id="studentName" class="field-input" placeholder="請輸入姓名" required />
        </div>
        <div class="field-group">
          <label for="studentId">學號 Student ID</label>
          <input type="text" id="studentId" class="field-input" placeholder="請輸入學號" required />
        </div>
      </div>

      <label for="responseText">你的回答 Your Response</label>
      <div class="textarea-wrap">
        <textarea
          id="responseText"
          class="response-textarea"
          placeholder="請在此撰寫你的 CER 論證…&#10;&#10;Claim（主張）：我支持／反對……&#10;&#10;Evidence（證據）：根據背景資料……&#10;&#10;Reasoning（推理）：因為……所以……"
          required
        ></textarea>
        <div class="textarea-footer">
          <span class="char-count" id="charCount">0 字</span>
          <span class="timestamp" id="liveTime"></span>
        </div>
      </div>

      <div class="submit-row">
        <button type="submit" class="btn-submit" id="submitBtn">提交回答並取得 AI 建議</button>
      </div>

      <div class="status-msg" id="statusMsg"></div>
    </form>

    <section class="feedback-card" id="feedbackCard">
      <div class="feedback-header">
        <div class="feedback-title">AI 回饋建議</div>
        <div class="feedback-model" id="feedbackModel">model: -</div>
      </div>

      <div class="feedback-block">
        <h3>整體回饋</h3>
        <p id="overallComment">尚無內容</p>
      </div>

      <div class="feedback-block">
        <h3>做得好的地方</h3>
        <ul class="feedback-list" id="strengthsList"></ul>
      </div>

      <div class="feedback-block">
        <h3>可改進的地方</h3>
        <ul class="feedback-list" id="suggestionsList"></ul>
      </div>

      <div class="feedback-block">
        <h3>CER 分項建議</h3>
        <div class="cer-grid">
          <div class="cer-subcard">
            <strong>Claim 主張</strong>
            <p id="cerClaim">-</p>
          </div>
          <div class="cer-subcard">
            <strong>Evidence 證據</strong>
            <p id="cerEvidence">-</p>
          </div>
          <div class="cer-subcard">
            <strong>Reasoning 推理</strong>
            <p id="cerReasoning">-</p>
          </div>
        </div>
      </div>

      <div class="feedback-block">
        <h3>參考改寫</h3>
        <p id="sampleRevision">-</p>
      </div>
    </section>

    <footer class="page-footer">
      Energy Policy Assessment · CER Argumentation · 2025
    </footer>
  </div>

  <script>
    const textarea = document.getElementById('responseText');
    const charCount = document.getElementById('charCount');
    const liveTime = document.getElementById('liveTime');
    const form = document.getElementById('responseForm');
    const submitBtn = document.getElementById('submitBtn');
    const statusMsg = document.getElementById('statusMsg');

    const feedbackCard = document.getElementById('feedbackCard');
    const feedbackModel = document.getElementById('feedbackModel');
    const overallComment = document.getElementById('overallComment');
    const strengthsList = document.getElementById('strengthsList');
    const suggestionsList = document.getElementById('suggestionsList');
    const cerClaim = document.getElementById('cerClaim');
    const cerEvidence = document.getElementById('cerEvidence');
    const cerReasoning = document.getElementById('cerReasoning');
    const sampleRevision = document.getElementById('sampleRevision');

    textarea.addEventListener('input', () => {
      const len = textarea.value.length;
      charCount.textContent = `${len} 字`;
      charCount.className = 'char-count' + (len > 0 ? ' active' : '') + (len > 500 ? ' warn' : '');
    });

    function updateTime() {
      const now = new Date();
      liveTime.textContent = now.toLocaleTimeString('zh-TW', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
    }
    updateTime();
    setInterval(updateTime, 1000);

    function showStatus(type, message) {
      statusMsg.className = 'status-msg ' + type;
      statusMsg.textContent = message;
    }

    function safeText(value, fallback = '—') {
      const text = value == null ? '' : String(value).trim();
      return text || fallback;
    }

    function renderList(container, items, fallbackText) {
      container.innerHTML = '';

      if (!Array.isArray(items) || items.length === 0) {
        const li = document.createElement('li');
        li.textContent = fallbackText;
        container.appendChild(li);
        return;
      }

      items.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        container.appendChild(li);
      });
    }

    function renderFeedback(aiFeedback, modelName) {
      feedbackModel.textContent = `model: ${safeText(modelName, 'openrouter/free')}`;
      overallComment.textContent = safeText(aiFeedback?.overallComment);
      renderList(strengthsList, aiFeedback?.strengths, '目前沒有額外偵測到明顯優點，建議再補充內容。');
      renderList(suggestionsList, aiFeedback?.suggestions, '目前沒有額外建議。');
      cerClaim.textContent = safeText(aiFeedback?.cerBreakdown?.claim);
      cerEvidence.textContent = safeText(aiFeedback?.cerBreakdown?.evidence);
      cerReasoning.textContent = safeText(aiFeedback?.cerBreakdown?.reasoning);
      sampleRevision.textContent = safeText(aiFeedback?.sampleRevision, aiFeedback?.rawText || '未提供參考改寫');
      feedbackCard.classList.add('show');
      feedbackCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function getPromptData() {
      const title = document.getElementById('promptTitle')?.innerText?.trim() || '';
      const background = document.getElementById('promptBackground')?.innerText?.trim() || '';
      const question = document.getElementById('promptQuestion')?.innerText?.trim() || '';

      return {
        promptTitle: title,
        promptBackground: background,
        promptQuestion: question
      };
    }

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const studentName = document.getElementById('studentName').value.trim();
      const studentId = document.getElementById('studentId').value.trim();
      const response = textarea.value.trim();

      if (!studentName || !studentId || !response) {
        showStatus('error', '請填寫所有欄位後再提交。');
        return;
      }

      const promptData = getPromptData();

      submitBtn.disabled = true;
      submitBtn.textContent = 'AI 分析中…';
      showStatus('loading', '正在提交資料並產生 AI 建議，請稍候…');

      try {
        const res = await fetch('/api/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            studentName,
            studentId,
            response,
            timestamp: new Date().toISOString(),
            ...promptData
          })
        });

        const data = await res.json();

        if (!res.ok || !data.success) {
          throw new Error(data.error || '提交失敗');
        }

        showStatus(
          'success',
          data.gasWarning
            ? `提交成功，AI 建議已產生。${data.gasWarning}`
            : '提交成功！AI 建議已產生。'
        );

        renderFeedback(data.aiFeedback || {}, data.aiModel || 'openrouter/free');
      } catch (err) {
        showStatus('error', `提交失敗：${err.message}。請稍後再試或聯繫老師。`);
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = '提交回答並取得 AI 建議';
      }
    });
  </script>
</body>
</html>