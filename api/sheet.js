export default async function handler(req, res) {
  const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQRqu7KSe1dYmlcQ3I9Fwiv50sxkgoXfMxXMkREX27iLUZv_f7Xldh2_4ayRwEqmeI_i26X-z7uXT3Y/pub?gid=0&single=true&output=csv';
  const response = await fetch(url);
  const text = await response.text();
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'text/csv');
  res.status(200).send(text);
}
