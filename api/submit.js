module.exports = async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const { studentName, studentId, response, timestamp } = req.body || {};

  if (!studentName || !studentId || !response) {
    return res.status(400).json({ success: false, error: '缺少必要欄位' });
  }

  const gasUrl = process.env.GAS_URL;
  if (!gasUrl) {
    return res.status(500).json({ success: false, error: '伺服器設定錯誤' });
  }

  try {
    const gasRes = await fetch(gasUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ studentName, studentId, response, timestamp }),
      redirect: 'follow'
    });

    const gasData = await gasRes.json();

    return res.status(200).json({ success: true, data: gasData });
  } catch (err) {
    console.error('GAS request failed:', err);
    return res.status(502).json({ success: false, error: '無法連線到後端服務' });
  }
};
