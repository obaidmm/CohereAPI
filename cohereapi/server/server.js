// This would be in your server-side Node.js code
const express = require('express');
const { CohereClient } = require('cohere-ai');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY, // Store your API key securely
});

app.post('/chat', async (req, res) => {
  const { message, chatHistory } = req.body;

  try {
    const stream = await cohere.chatStream({
      model: "command",
      message: message,
      chatHistory: chatHistory,
      promptTruncation: "AUTO",
      citationQuality: "accurate",
      connectors: [{"id":"web-search"}],
      documents: []
    });

    for await (const chat of stream) {
      if (chat.eventType === "text-generation") {
        return res.json({ message: chat.text });
      }
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Error communicating with Cohere API');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
