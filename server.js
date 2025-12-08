require('dotenv').config();
const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Serve static files from current directory

// API endpoint for generating prompts
app.post('/api/generate-prompt', async (req, res) => {
  try {
    const { prompt, industry, category } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({ error: 'OpenAI API key not configured' });
    }

    const systemPrompt = `You are an expert at creating sales agent prompts. Generate three sections for the user's request:
1. "intro" - A conversational opening script for the agent (2-3 sentences)
2. "discuss" - Key talking points and goals (numbered list, 3-5 points)
3. "avoid" - Guardrails and things the agent should NOT do (3-5 points)

Industry context: ${industry}
Category: ${category}

Return ONLY a JSON object with these three keys: intro, discuss, avoid. Keep it professional, concise, and actionable.`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: prompt }
      ],
      temperature: 0.7,
      max_tokens: 1000,
      response_format: { type: "json_object" }
    });

    const response = JSON.parse(completion.choices[0].message.content);
    res.json(response);

  } catch (error) {
    console.error('Error generating prompt:', error);
    res.status(500).json({ 
      error: 'Failed to generate prompt',
      message: error.message 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    hasApiKey: !!process.env.OPENAI_API_KEY 
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📝 API Key configured: ${!!process.env.OPENAI_API_KEY}`);
});

