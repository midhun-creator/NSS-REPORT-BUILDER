const functions = require('firebase-functions');
const fetch = require('node-fetch'); // Make sure to run: npm install node-fetch@2

exports.compileLatex = functions.https.onRequest(async (req, res) => {
  // Set CORS headers to allow your web app to call this function
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(204).send('');
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed');
    return;
  }

  try {
    const params = new URLSearchParams();
    params.append('formula', req.body.formula || '');
    params.append('fsize', req.body.fsize || '14px');
    params.append('fcolor', req.body.fcolor || '000000');
    params.append('mode', '0');
    params.append('out', '1');
    params.append('remhost', 'quicklatex.com');
    params.append('preamble', req.body.preamble || '\\usepackage{amsmath}\n\\usepackage{amsfonts}\n\\usepackage{amssymb}\n\\usepackage{tikz}');

    const response = await fetch('https://www.quicklatex.com/latex3.f', {
      method: 'POST',
      body: params
    });

    const text = await response.text();
    res.status(200).send(text);
  } catch (error) {
    console.error('Error proxying to QuickLaTeX:', error);
    res.status(500).send('-1\nInternal Server Error proxying request');
  }
});
