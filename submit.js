module.exports = async function handler(req, res) {
  // 處理跨域請求 (CORS)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: '只允許 POST 請求' });
  }

  const { studentName, studentId, response, context, timestamp } = req.body || {};

  if (!studentName || !studentId || !response) {
    return res.status(400).json({ success: false, error: '缺少必要欄位' });
  }

  const gasUrl = process.env.GAS_URL;
  let gasData = null;

  // 1. 傳送資料到 Google Apps Script (GAS) 進行儲存
  if (gasUrl) {
    try {
      const gasRes = await fetch(gasUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ studentName, studentId, response, timestamp }),
        redirect: 'follow'
      });
      gasData = await gasRes.json();
    } catch (err) {
      console.error('GAS 儲存失敗:', err);
    }
  }

  // 2. 呼叫 OpenRouter 取得 AI 回饋
  let aiFeedback = "AI 暫時無法提供回饋，但您的答案已成功記錄。";
  
  if (process.env.AI_KEY) {
    try {
      const systemPrompt = `你是一位專業且富有耐心的科學教師。
你的任務是根據「CER (Claim主張, Evidence證據, Reasoning推理) 框架」，給予學生的論證回答具體且建設性的回饋。
請遵守以下原則：
1. 語氣要鼓勵，先肯定學生的優點。
2. 指出可以改進的地方（證據是否足以支撐主張？邏輯是否連貫？）。
3. 絕對不要直接給出標準答案，用引導式的問題啟發思考。
4. 回覆請使用繁體中文。`;

      const userPrompt = `【背景資料與題目】\n${context || '未提供'}\n\n【學生回答】\n${response}\n\n請給予回饋：`;

      const aiRes = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.AI_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          // 指定有效的 OpenRouter 免費模型
          model: 'google/gemini-2.0-flash-lite-preview-02-05:free', 
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userPrompt }
          ]
        })
      });

      const aiData = await aiRes.json();
      
      if (aiData.choices && aiData.choices.length > 0) {
        aiFeedback = aiData.choices[0].message.content; // 成功取得 AI 文字！
      } else {
        console.error('OpenRouter 回應異常:', aiData);
        aiFeedback = "AI 回應格式異常，請老師檢查 Vercel Logs。";
      }
    } catch (err) {
      console.error('OpenRouter 請求失敗:', err);
      aiFeedback = "產生 AI 回饋時發生連線錯誤。";
    }
  } else {
    aiFeedback = "系統未設定 AI_KEY，無法啟用 AI 助手。";
  }

  // 將資料回傳給你的 index.html
  return res.status(200).json({ success: true, data: gasData, aiFeedback: aiFeedback });
};