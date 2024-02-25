// This would be in your server-side Node.js code
const { CohereClient } = require("cohere-ai");
const express = require("express");
const app = express();

const cohere = new CohereClient({
  token: "your-api-key", // Ensure you keep your API key secret
});

app.use(express.json());

app.post("/chat", async (req, res) => {
  try {
    const chatStream = await cohere.chatStream({
      chatHistory: req.body.chatHistory,
      message: req.body.message,
      connectors: [{ id: "web-search" }],
    });

    const messages = [];
    for await (const message of chatStream) {
      if (message.eventType === "text-generation") {
        messages.push(message);
      }
    }

    res.json({ messages });
  } catch (error) {
    res.status(500).send(error.toString());
  }
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
