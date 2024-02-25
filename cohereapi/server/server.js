const express = require('express');
const fetch = require('node-fetch'); // or any other HTTP client
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.post('/chat', async (req, res) => {
  const { message, chatHistory } = req.body;

  try {
    // Here, we send the user's message and the chat history to Cohere's API
    const cohereResponse = await fetch('https://api.cohere.ai/cohere/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.COHERE_API_KEY}` // stores in environment variable
      },
      body: JSON.stringify({
        messages: chatHistory.concat([{ text: message, role: 'user' }]),
      })
    });

    const cohereData = await cohereResponse.json();

    if (cohereResponse.ok) {
      // Send the response from Cohere back to the front-end
      res.json({ message: cohereData.choices[0].message });
    } else {
      res.status(500).json({ error: cohereData.error });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
